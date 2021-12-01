import React, { Component } from "react";
import { StyleSheet, Text, View ,TouchableOpacity,TextInput, SafeAreaView, Image } from "react-native";
import Images from '../theme/Images';
import {Card} from 'react-native-shadow-cards';

export default class ForgotPasswordScreen extends Component {
  constructor(props){
    super(props);
    this.state={}
  };


  render() {
    return(
      <SafeAreaView >
          <View>
            <Image style={{width:'100%'}} source={Images.forgotpassword} />
            <View style={styles.ImageView}/>
          </View>
          <View style={styles.container}>
            <Text style={styles.mainText}>Forgot Password</Text>
              <Card style={styles.inputContainer}>
                <TextInput
                  placeholder='E-mail'
                  keyboardType="email-address"
                  style={styles.inputText}
                />
              </Card>
          </View>
      </SafeAreaView>
    );
  }; 
};
const styles = StyleSheet.create(  
  {  
      MainContainer:  
      {  
          flex: 1,  
          justifyContent: 'center',  
          alignItems: 'center',  
      },
      ImageView:{
        width:'100%',
        height:"100%", 
        backgroundColor:'#3B68E7', 
        position:'absolute',
        opacity:0.5,
      },
      container:{
        width:'100%', 
        height:"200%", 
        backgroundColor:'#ffffff', 
        borderTopLeftRadius:30,
        borderTopRightRadius:30,
        position:'absolute',
        top:'93%',
      },
      mainText:{
        fontSize:22, 
        fontFamily:'Roboto-Bold',
        color:'black',
        marginLeft:"10%",
        marginTop:'8%',

      },
      inputContainer:{
        marginLeft:"5%", 
        marginTop:"10%",
      },
      inputText:{
        marginLeft:"5%",
        fontFamily:'Roboto-Bold'
      },
      
    }
);