import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import LoginScreen from './screens/LoginScreen';

export default class Root extends Component {
  constructor(props){
    super(props);
    this.state={}
  };


  render() {
    return(
      <View>
        <LoginScreen/>
      </View>
    );
  }; 
};
