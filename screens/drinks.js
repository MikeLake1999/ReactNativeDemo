import React, { Component } from "react";
import {
    View,
    StyleSheet,
    SafeAreaView,
    Button,
    Image,
    Text,
    TouchableWithoutFeedback,
    FlatList,
    TouchableOpacity,
} from "react-native";

class DrinkScreen extends Component {

    constructor(props) {
        super(props);
        this.state = {
            selected: false,
            classCode: '',
            student: '',
            bubble: [],
        };
    }



    componentDidMount() {
        fetch('https://boba.ansuzdev.com/api/bubbleTeas')
            .then(res => res.json())
            .then(bubble => {
                this.setState({
                    bubble,

                })
            })
    }
    renderItem(item) {
        return (

            <TouchableOpacity onPress={() => {
                this.setState({ selected: item.id })
            }}
            style={{ width: 195, height: 230 }}>
                <View style={{ width: "97%", height: "97%", backgroundColor: '#4372a6', }}>
                <Image style={{ flex: 1 }} source={{ uri: item.avatar }}/>
                <View style={{ width: "100%", height: 40, backgroundColor: 'rgba(61, 64, 81, 0.8)', }}>
                <Text style={{ fontSize: 13,fontWeight: "bold",  color: "white", right: -5 }}>{item.name}</Text>
                </View>
                </View>
                {
                    this.state.selected === item.id
                        ? <View style={{ position: "absolute", backgroundColor: 'rgba(52, 52, 52, alpha)' }}>
                            <Image style={{ width: 150, height: 150, marginTop: 30, marginLeft: 20 }}
                                source={{ uri: 'https://boba.ansuzdev.com/images/done.png' }}
                            />
                        </View>
                        : null
                }




            </TouchableOpacity>



        )
    }

    render() {
        const { navigation } = this.props;
        return (
            <SafeAreaView style={{ flex: 1 }}>
                <View style={styles.container}>
                    <View>
                        <FlatList
                            numColumns={2}
                            data={this.state.bubble}
                            renderItem={({ item }) => this.renderItem(item)}
                            keyExtractor={item => item.id.toString()}
                        />
                    </View>

                </View>
                <View>

                </View>
                <View style={[{ margin: 10 }]}>

                    <TouchableOpacity
                        onPress={this.onNextPress.bind(this)}
                        style={[styles.button]} style={[{height: 40, backgroundColor: '#ea6a5d' }]}>
                        <Text style={[styles.text]}>NEXT</Text>
                    </TouchableOpacity>
                </View>
            </SafeAreaView>

        );
    }

    onNextPress() {
        const { navigation } = this.props;
        let data = {
            classCode: navigation.getParam('classCode'),
            student: navigation.getParam('fullName'),
            teaId: this.state.selected,
        };

        fetch("https://boba.ansuzdev.com/api/orders", {
            headers: {
                "Content-Type": "application/json"

            },
            method: "POST",
            body: JSON.stringify(data),
        })
            .then(() => {
                this.props.navigation.navigate("Orders", {
                    id: this.state.selected,
                    classCode: navigation.getParam('classCode')
                });
            })
            .catch((error) => {
                console.log(error);
            })
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        textAlign: 'center',
        fontSize: 15,
        lineHeight: 40,
        color: 'white'
    }

});

export default DrinkScreen;