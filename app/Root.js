import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import Navigation from './navigation/index'

export default class Root extends Component{
  render(){
      return(
          
              <View style={styles.mainContainer} >
                  <Navigation/>
              </View>

          
      )
  }
}

const styles= StyleSheet.create(
  {
      mainContainer:{
          flex:1,
          backgroundColor:'#ffffff',
      }
  }
)
