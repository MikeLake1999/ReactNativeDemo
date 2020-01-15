import React, { Component } from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";

export default class FetchExample extends React.Component {
  constructor(props){
    super(props);
    
    this.state = {
      bubble: []
    };
  }

  componentDidMount () {
    fetch('https://boba.ansuzdev.com/api/bubbleTeas')
    .then(res => res.json())
    .then(bubble => {
      this.setState({
        bubble
      })
    })
  }

  render(){

    

    return(
      <View style={{flex: 1, paddingTop:20}}>
        <FlatList
          data={this.state.bubble}
          renderItem={({item}) => <Text>{item.name}, {item.avatar}</Text>}
          keyExtractor={({id}, index) => id}
        />
      </View>
    );
  }
}