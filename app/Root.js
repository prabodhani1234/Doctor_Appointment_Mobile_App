import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";

export default class Root extends Component {
  constructor(props){
    super(props);
    this.state={}
  };


  render() {
    return(
      <View>
        
          
          <Text style={{fontFamily:'Roboto-Bold'}}>
          
            Hellow</Text>
        
      </View>
    );
  }; 
};