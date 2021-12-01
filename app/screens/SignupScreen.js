import React, { Component } from "react";
import { StyleSheet, Text, View ,TouchableOpacity,TextInput, SafeAreaView, Image} from "react-native";
import Images from '../theme/Images';
import {Card} from 'react-native-shadow-cards';

export default class SignupScreen extends Component {
  constructor(props){
    super(props);
    this.state={}
  };


  render() {
    return(
      <SafeAreaView>
        <View>
          <View>
            <Image style={{width:'100%'}} source={Images.signup} />
          </View>
        </View>
      </SafeAreaView>
    );
  }; 
};
