import React, {useContext, useState} from 'react';
import { StyleSheet, Text, View ,TouchableOpacity,TextInput, SafeAreaView, Image} from "react-native";
import Images from '../theme/Images';
import LinearGradient from 'react-native-linear-gradient';
import {Card} from 'react-native-shadow-cards';
import { AuthContext } from '../navigation/AuthProvider';

const LoginScreen = ({navigation}) => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const {login} = useContext(AuthContext);
    return(
      <LinearGradient colors={['#3067F1', '#012454']} style={styles.MainContainer}>
          <View style={styles.container}>
            <Text style={styles.mainText}>Login</Text>
            <Card style={styles.inputContainer}>
              <TextInput
                Value={email}
                onChangeText={(userEmail) => setEmail(userEmail)}
                placeholder="Email"
                keyboardType="email-address"
                autoCapitalize="none"
                autoCorrect={false}
                style={styles.inputText}
              />
            </Card>
            <Card style={styles.inputContainer}>
              <TextInput
                Value={password}
                onChangeText={(userPassword) => setPassword(userPassword)}
                placeholder="Password"
                secureTextEntry={true}
                style={styles.inputText}
              />
            </Card>
            <TouchableOpacity onPress={() => navigation.navigate('ForgotPassword')}>
              <Text style={styles.ForgotPasswortext}>Forgot Password</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.loginButton} activeOpacity={0.8} onPress={() => login(email, password)}>
                <Text style={styles.loginButtonText}>Log in</Text>
            </TouchableOpacity>

            <View style={{marginTop:"5%"}}>
              <View style={styles.signUpText}>
                <Text style={{marginLeft:'8%'}}>Don't have an account ? </Text>
                <TouchableOpacity style={styles.signUpText} activeOpacity={0.7} onPress={() => navigation.navigate('SignUp')} >
                  <Text style={{color:'#3067F1'}}>Create Account</Text>
                </TouchableOpacity>
               </View>
               <Text style={{textAlign:'center'}}>or login with</Text>

               <TouchableOpacity style={{margin:25}} activeOpacity={0.7} >
                 <Image source={Images.google} style={{width:43, height:43, left:'35%'}}/>
                
               </TouchableOpacity>
               <TouchableOpacity activeOpacity={0.7}>
               <Image source={Images.facebook} style={{width:40, height:40, position:'absolute',left:'55%', bottom:27}}/>
               </TouchableOpacity>

            </View>
          </View>
          </LinearGradient>
    );
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
        marginLeft:"10%",
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
      ForgotPasswortext:{
        color:'#3067F1',
        textDecorationLine:'underline',
         marginLeft:'59%', 
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
        flexDirection:'row',
      },

  }); 
  export default LoginScreen;  
