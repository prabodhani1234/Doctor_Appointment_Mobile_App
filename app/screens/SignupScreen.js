import React, { useContext, useState } from 'react';
import { StyleSheet, Text, View ,TouchableOpacity,TextInput, SafeAreaView, Image} from "react-native";
import Images from '../theme/Images';
import {Card} from 'react-native-shadow-cards';
import { AuthContext } from '../navigation/AuthProvider';

const SignupScreen = ({navigation}) => {

  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [confirmPassword, setConfirmPassword] = useState();
  const {register} = useContext(AuthContext);

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
                  value={email}
                  onChangeText={(userEmail) => setEmail(userEmail)}
                  placeholder='E-mail'
                  keyboardType="email-address"
                  autoCapitalize="none"
                  autoCorrect={false}
                  style={styles.inputText}
                />
              </Card>
              <Card style={{marginLeft:20, marginTop:20}}>
                <TextInput
                  value={password}
                  onChangeText={(userPassword) => setPassword(userPassword)}
                  placeholder='Password'
                  style={styles.inputText}
                />
              </Card>
              <Card style={{marginLeft:20, marginTop:20}}>
                <TextInput
                  value={confirmPassword}
                  onChangeText={(userPassword) => setConfirmPassword(userPassword)}
                  placeholder=' Confirm Password'
                  style={styles.inputText}
                />
              </Card>
              <TouchableOpacity onPress={() => register(email, password)} style={styles.accountButton} activeOpacity={0.8}>
                <Text style={styles.accountButtonText}>Create Account</Text>
              </TouchableOpacity>
              <View style={{marginTop:"5%"}}>
              <Text style={{left:80}}>Already have a account ? </Text>
               <TouchableOpacity style={styles.loginText} activeOpacity={0.7} onPress={() => navigation.navigate('Login')}>
                 <Text style={{color:'#3067F1'}}>Login</Text>
               </TouchableOpacity>
               <Text style={{textAlign:'center'}}>or Sign up with</Text>

               <TouchableOpacity style={{margin:25}} activeOpacity={0.7} >
                 <Image source={Images.google} style={{width:43, height:43, left:'35%'}}/>
                
               </TouchableOpacity>
               <TouchableOpacity activeOpacity={0.7}>
               <Image source={Images.facebook} style={{width:40, height:40, position:'absolute',left:'55%', bottom:27}}/>
               </TouchableOpacity>

            </View>
            </View>
      </SafeAreaView>
    );
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
        marginTop:"6%",
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
export default SignupScreen;