import React, { Component } from "react";
import { StyleSheet, Text, View ,TouchableOpacity,TextInput, SafeAreaView, Image } from "react-native";

export default class ForgotPasswordScreen extends Component {
  constructor(props){
    super(props);
    this.state={}
  };


  render() {
    return(
      <SafeAreaView >
        <View>
          <View>
            <Text>forgot password</Text>
          </View>
        </View>
      </SafeAreaView>
    );
  }; 
};
