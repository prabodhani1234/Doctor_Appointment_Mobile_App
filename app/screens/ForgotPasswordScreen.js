import React, { Component } from "react";
import { StyleSheet, Text, View ,TouchableOpacity,TextInput, SafeAreaView, Image } from "react-native";
import Images from '../theme/Images';


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
            <Image style={{width:'100%'}} source={Images.forgotpassword} />
            <View style={styles.ImageView}/>
          </View>
        </View>
      </SafeAreaView>
    );
  }; 
};
