import React, { Component } from 'react';  
import { SafeAreaView,Button, Image, StyleSheet, Text, TextInput, View,ScrollView,TouchableOpacity,ImageBackground } from 'react-native';
import Images from '../theme/Images';


const EditProfileScreen= () =>{
        return(
            <View style={styles.mainContainer}>
            <TouchableOpacity activeOpacity={0.8} >
            <View
              style={styles.imageContainer}>
              <ImageBackground
                source={Images.doctor1}
                style={styles.imageStyle}
                imageStyle={{borderRadius: 15}}>
              </ImageBackground>
            </View>
          </TouchableOpacity>
          <Text style={styles.nameText}>
            Johne
          </Text>
        </View>
          
        )
    
}
const styles= StyleSheet.create(
    {
        mainContainer:{
            flex:1,
            backgroundColor:'#ffffff',
            alignItems:'center',
        },
        imageContainer:{
            height: 100,
            width: 100,
            borderRadius: 15,
            marginTop:50,
            justifyContent: 'center',
            alignItems: 'center',
        },
        imageStyle:{
            height: 150, 
            width: 150,
        },
        nameText:{
            marginTop: 30, 
            fontSize: 18, 
            fontWeight: 'bold',
        }
    }
)
export default EditProfileScreen;