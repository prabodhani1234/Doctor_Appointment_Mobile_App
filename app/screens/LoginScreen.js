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
        <View>
          <View>
            <Image style={{width:'100%'}} source={Images.login} />
          </View>
          <View style={styles.ImageView}/>
          <View style={styles.container}>
            <Text style={styles.mainText}>Login</Text>
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
        height:300, 
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
        marginTop:'8%'
      }  
     
     
  });  
