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
      <SafeAreaView >
        <View style={styles.MainContainer}>
          <View>
            <Image source={Images.login} />
          </View>
          <View style={styles.ImageView}/>
        </View>
      </SafeAreaView>
    );
  } 
};

const styles = StyleSheet.create(  
  {  
      MainContainer:  
      {  
          flex: 1,  
          justifyContent: 'center',  
          alignItems: 'center',  
          backgroundColor:'white'
      },
      ImageView:{
        width:'100%',
        height:600, 
        backgroundColor:'#3B68E7', 
        position:'absolute',
        opacity:0.2,
      }  
     
     
  });  
