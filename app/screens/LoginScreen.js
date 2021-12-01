import React, { Component } from "react";
import { StyleSheet, Text, View ,TouchableOpacity,TextInput, SafeAreaView, Image} from "react-native";
import Images from '../theme/Images';
import {Card} from 'react-native-shadow-cards';

export default class LoginScreen extends Component {
  constructor(props){
    super(props);
    this.state={}
  };


  render() {
    return(
      <SafeAreaView >
        <View>
          <View>
            <Image style={{width:'100%'}} source={Images.login} />
          </View>
          <View style={styles.ImageView}/>
          <View style={styles.container}>
            <Text style={styles.mainText}>Login</Text>
            <Card style={styles.inputContainer}>
              <TextInput
                placeholder='E-mail'
                keyboardType="email-address"
                style={styles.inputText}
              />
            </Card>
            <Card style={{marginLeft:20, marginTop:20}}>
              <TextInput
                placeholder='Password'
                placeholder="Password"
                secureTextEntry={true}
                style={styles.inputText}
              />
            </Card>
            <TouchableOpacity>
              <Text style={styles.ForgotPasswortext}>Forgot Password</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.loginButton} activeOpacity={0.8}>
                <Text style={styles.loginButtonText}>Log in</Text>
            </TouchableOpacity>

            <View style={{marginTop:"5%"}}>
              <Text style={{left:80}}>Don't have an account ? </Text>
               <TouchableOpacity style={styles.signUpText} activeOpacity={0.7}>
                 <Text style={{color:'#3067F1'}}>Sign Up</Text>
               </TouchableOpacity>
               <Text style={{textAlign:'center'}}>or login with</Text>

               <TouchableOpacity style={{margin:25}} activeOpacity={0.7} >
                 <Image source={Images.google} style={{width:43, height:43, left:'35%'}}/>
                
               </TouchableOpacity>
               <TouchableOpacity activeOpacity={0.7}>
               <Image source={Images.facebook} style={{width:40, height:40, position:'absolute',left:'55%', bottom:27}}/>
               </TouchableOpacity>

            </View>
          </View>
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
        top:'92%',
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
      ForgotPasswortext:{
        color:'#3067F1',
        textDecorationLine:'underline',
         marginLeft:'64%', 
         marginTop:"5%"
      },
      loginButton:{
        alignItems: 'center',
        justifyContent:'center', 
        backgroundColor:'#3067F1', 
        marginLeft:"13%",
        marginTop:'7%', 
        width:'75%', 
        height:50,
        borderRadius:40,
      },
      loginButtonText:{
        color:'#ffffff', 
        fontFamily:'Roboto-Bold', 
        fontSize:21, 
      },
      signUpText:{
        position:'absolute', 
        right:80,
      },
     
     
  });  
