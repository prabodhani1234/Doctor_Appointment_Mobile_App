import React, { Component } from "react";
import { StyleSheet, Text, View ,TouchableOpacity,TextInput, SafeAreaView, Image } from "react-native";
import LinearGradient from 'react-native-linear-gradient';
import {Card} from 'react-native-shadow-cards';

export default class ForgotPasswordScreen extends Component {
  constructor(props){
    super(props);
    this.state={}
  };


  render() {
    return(
      <LinearGradient colors={['#3067F1', '#012454']} style={styles.MainContainer}>
          <View style={styles.container}>
            <Text style={styles.mainText}>Forgot Password</Text>
            <Text style={styles.discribemainText}>Did Someone forget this password</Text>
            <Text style={styles.firstsubtext}>That's Ok...</Text>
            <Text style={styles.subtext}>Just enter the email address you've used to register with use and we'll send you a reset link</Text>
              <Card style={styles.inputContainer}>
                <TextInput
                  placeholder='E-mail'
                  keyboardType="email-address"
                  style={styles.inputText}
                />
              </Card>
              
              <TouchableOpacity style={styles.recoveryButton} activeOpacity={0.8}>
                <Text style={styles.recoveryButtonText}>Recovery Password</Text>
              </TouchableOpacity>
              </View>
          </LinearGradient>
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
      container:{
        width:'85%', 
        height:520, 
        backgroundColor:'#ffffff', 
        margin:20, 
        borderRadius:30
      },
      mainText:{
        fontSize:22, 
        fontFamily:'Roboto-Bold',
        color:'black',
        marginLeft:"7%",
        marginTop:'8%',

      },
      inputContainer:{
        marginLeft:"5%", 
        marginTop:"10%",
        width:'90%'
      },
      inputText:{
        marginLeft:"5%",
        fontFamily:'Roboto-Bold'
      },
      recoveryButton:{
        alignItems: 'center',
        justifyContent:'center', 
        backgroundColor:'#3067F1', 
        marginLeft:"10%",
        marginTop:'10%', 
        width:'80%', 
        height:50,
        borderRadius:40,
      },
      recoveryButtonText:{
        color:'#ffffff', 
        fontFamily:'Roboto-Bold', 
        fontSize:21, 
      },
      discribemainText:{
        fontFamily:'Roboto-Bold', 
        fontSize:17.5, 
        textAlign:'center',
        marginBottom:5, 
        color:'black',
        marginTop:'10%'
      },
      firstsubtext:{
        textAlign:'center', 
        marginBottom:5
      },
      subtext:{
        marginLeft:25, 
        marginRight:25, 
        textAlign:'justify', 
        fontSize:14,
      }
    }
);