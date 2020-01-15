import React, { Component } from "react";
import {
  AppRegistry,
  View,
  StyleSheet,
  SafeAreaView,
  Image,
  Text,
  FlatList,
  TouchableOpacity,
} from "react-native";

class DrinkScreen extends Component {


  constructor(props) {
    super(props);
    this.state = {
      selected: false,
      bubble: [],
      listOrders: [],
      count: 0,
    };
  }

  

  static navigationOptions = {
    tittle: 'id',
  };
  fetchapi1() {
    fetch('https://boba.ansuzdev.com/api/bubbleTeas')
      .then(res => res.json())
      .then(bubble => {
        this.setState({
          bubble,

        })
      })
  }

  fetchapi() {
    const { navigation } = this.props;
    const url = "https://boba.ansuzdev.com/api/orders?classCode=" + navigation.getParam('classCode') + "";
    fetch(url)
      .then(res => res.json())
      .then(listOrders => {
        this.setState({
          listOrders,

        })
      })
  }
  componentDidMount() {
    this.fetchapi1();
    this.fetchapi();
  }

  renderOrders(orders) {
    return (
      <TouchableOpacity>
        <View style={styles.main}>
          <View>
            <Image style={styles.image} source={{ uri: orders.avatar }}></Image>
          </View>
          <View>
            <Text style={styles.text}>{orders.name}</Text>
          </View>
          <View>
            <TouchableOpacity style={styles.button3}>
              <Text style={[styles.text5]}>1</Text>
            </TouchableOpacity>
          </View>


        </View>
      </TouchableOpacity>
    )
  }
  renderItem(item) {
    const { navigation } = this.props;
    return (

      <TouchableOpacity onPress={() => {
        this.setState({ selected: item.id })
      }}>

        {
          item.id == navigation.getParam('id')
            ?
            <View style={styles.main}>
              <View>
                <Image style={styles.image} source={{ uri: item.avatar }}></Image>
              </View>
              <View>
                <Text style={styles.text}>{item.name}</Text>
              </View>
              <View>
                <TouchableOpacity onPress={() => {
                  this.props.navigation.navigate("Drinks");
                }} style={styles.button}>
                  <Text style={[styles.text2]}>Change</Text>
                </TouchableOpacity>
              </View>


            </View>
            : null
        }
      </TouchableOpacity>


    )
  }
  increment = () => {
    this.setState({
      count: this.state.listOrders + 1
    });
  }

  render() {
    const { navigation } = this.props;
    return (

      <SafeAreaView style={{ flex: 1 }}>
        <View>
          <Text style={[styles.text1]}>Your Drink</Text>
        </View>

        <View style={styles.container}>
          <View>
            <FlatList

              data={this.state.bubble}
              renderItem={({ item }) => this.renderItem(item)}
              keyExtractor={item => item.id.toString()}
            />
          </View>

        </View>
        
        <View style={styles.container}>
        <View style={[{ marginTop: -150 }]}>
          <Text style={[styles.text4]}>All Drink In Class {navigation.getParam('classCode')}</Text>
        </View>
          <View>
            <FlatList
              
              data={this.state.listOrders}
              renderItem={({ item }) => this.renderOrders(item)}
              keyExtractor={item => item.id.toString()}
            />
          </View>

        </View>
        <View><Text style={[styles.text4]}>Total: {this.state.listOrders.length}</Text></View>

        <View style={[{ margin: 10 }]}>
          
          <TouchableOpacity onPress={() => {
            this.props.navigation.navigate("Home");
          }} style={[{ height: 40, backgroundColor: '#ea6a5d' }]}>
            <Text style={[styles.text3]}>CLOSE</Text>
          </TouchableOpacity>

        </View>


      </SafeAreaView>




    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 10,

  },
  
  main: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderWidth: 1,
    borderColor: '#d6d7da',
    borderRadius: 0.5,
  },
  image: {
    flex: 1,
    width: 80,
    height: 80,
    backgroundColor: '#4372a6',
    left: 15,

  },
  text: {
    flex: 1,
    fontSize: 15,
    top: 25,
    fontWeight: "bold",
    textAlign: "right",
    

  },
  text1: {
    left: 10,
    fontSize: 20,
    fontWeight: "bold",
    color: '#4372a6',

  },
  text2: {
    flex: 1,
    textAlign: 'center',
    lineHeight: 75,
    fontSize: 15,
    color: 'white',
  },
  text4: {
    marginBottom: 10,
    left: 10,
    fontSize: 20,
    fontWeight: "bold",
    color: '#4372a6',
    
  },
  text5: {
    flex: 1,
    textAlign: 'center',
    lineHeight: 75,
    fontSize: 15,
    color: 'black',
    fontWeight: "bold",
    borderLeftWidth: 2,
    borderRightWidth: 2,
    borderColor: '#d6d7da',
  },
  button: {
    backgroundColor: '#ea6a5d',
    width: 80,
    height: 80,
    flex: 1,
    marginRight: 10,
  },
  button1: {

    width: 80,
    height: 40,
  },
  button3: {
    backgroundColor: '#f2f2f2',
    width: 80,
    height: 80,
    flex: 1,
    marginRight: 10,
  },
  text3: {
    textAlign: 'center',
    fontSize: 15,
    lineHeight: 40,
    color: 'white'
  },



});

export default DrinkScreen;