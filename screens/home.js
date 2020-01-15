import React, { Component } from 'react';

import { Alert, TouchableOpacity, Text , Button, TextInput, View, StyleSheet, Image } from 'react-native';

export default class Home extends Component {
  
  static navigationOptions = ({navigation}) => ({
    headerShown: false,
    
    tittle: "Boba",
  });
  constructor(props) {
    super(props);

    this.state = {
      classCode: "",
      student: "",
    };
    

  }

  // componentDidMount() {
  //   DefaultPreference.get("profile")
  //     .then((then) => {
        
  //     }
  // };

  render() {
    return (
      <View style={styles.container}>
        <Image
          style={{width: 200, height: 200, top: -60}}
          source={{uri: 'https://boba.ansuzdev.com/images/bubble_milk_tea.png'}}
        />
        <View>
        <Text style={[{ color: "white"}]}>Class</Text>
        <TextInput
          onChangeText={(classCode) => this.setState({classCode})}
          placeholder={'Code...'}
          placeholderTextColor={ '#e3e6e8'}
          style={styles.input}
        />
        </View>
        <View>
        <Text style={[{ color: "white"}]}>FullName</Text>
        <TextInput 
          onChangeText={(student) => this.setState({student})}
          placeholder={'Full Name...'}
          placeholderTextColor={ '#e3e6e8'}
          style={styles.input}
        />
        </View>
        
        <View style={[{ width: "80%", margin: 15}]}>
        <TouchableOpacity onPress={() => {
            this.props.navigation.navigate("Drinks", {
              classCode: this.state.classCode,
              fullName: this.state.student
            });
        }} style={[styles.button]}>
            <Text style={[styles.text]}>NEXT</Text>
        </TouchableOpacity>
        </View> 
      </View>
      
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#4372a6',
  },
  titleStyle: {
    fontWeight: 'bold',
  },
  input: {
    width: 330,
    height: 44,
    opacity: 0.5,
    padding: 10,
    borderBottomWidth: 1,
    borderColor: 'rgba(255, 255, 255, .5)',
    marginBottom: 10,
    
  },
  button: {
    display: 'flex',
    height: 50,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',

    backgroundColor: '#e3e6e8',
    shadowColor: '#2AC062',
    shadowOpacity: 0.4,
    shadowOffset: { height: 10, width: 0 },
    shadowRadius: 20,
},

text: {
    fontSize: 16,
    textTransform: 'uppercase',
    color: '#a8afb5',
    fontWeight: 'bold',
},
});
