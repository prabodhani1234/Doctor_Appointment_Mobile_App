import React, { Component } from "react";
import { StyleSheet, Text, View , SafeAreaView, Image} from "react-native";
import Images from '../theme/Images';

export default class LoginScreen extends Component {
  constructor(props){
    super(props);
    this.state={}
  };


  render() {
    return(
      <SafeAreaView>
        <View>
          <Image source={Images.login} style={{width:'100%'}} />
        </View>
      </SafeAreaView>
    );
  } 
};
