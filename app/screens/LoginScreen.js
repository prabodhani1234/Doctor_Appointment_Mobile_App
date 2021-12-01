import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import {Card} from 'react-native-shadow-cards';

export default class LoginScreen extends Component {
  constructor(props){
    super(props);
    this.state={}
  };


  render() {
    return(
      <Card>
        <Text>Login</Text>
      </Card>
    );
  }; 
};
