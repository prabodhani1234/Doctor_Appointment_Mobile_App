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
            <Image style={{width:'100%'}} source={Images.signup} />
            <View style={styles.ImageView}/>
          </View>
          <View style={styles.container}>
            <Text style={styles.mainText}>Create Account</Text>
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
              <TouchableOpacity style={styles.accountButton} activeOpacity={0.8}>
                <Text style={styles.accountButtonText}>Create Account</Text>
              </TouchableOpacity>
              <View style={{marginTop:"10%"}}>
              <Text style={{left:80}}>Already have a account ? </Text>
               <TouchableOpacity style={styles.loginText} activeOpacity={0.7} onPress={this.onPressSignUpButton}>
                 <Text style={{color:'#3067F1'}}>Login</Text>
               </TouchableOpacity>
               <Text style={{textAlign:'center'}}>or Sign up with</Text>

            </View>
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
        top:'85%',
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
      accountButton:{
        alignItems: 'center',
        justifyContent:'center', 
        backgroundColor:'#3067F1', 
        marginLeft:"13%",
        marginTop:'7%', 
        width:'75%', 
        height:50,
        borderRadius:40,
      },
      accountButtonText:{
        color:'#ffffff', 
        fontFamily:'Roboto-Bold', 
        fontSize:21, 
      },
      loginText:{
        position:'absolute', 
        right:80,
      },
  }
)