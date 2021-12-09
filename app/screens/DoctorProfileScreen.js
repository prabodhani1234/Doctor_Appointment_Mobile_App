import React, { Component } from 'react';  
import { SafeAreaView,Button, StyleSheet, Image,Text, TextInput, View,ScrollView,TouchableOpacity  } from 'react-native';
import Card from 'react-native-shadow-cards';
import DocProp from '../components/ProfileScreenCom/DoctorProfileCom';
import Icon  from 'react-native-vector-icons/FontAwesome';
import Images from '../theme/Images';

const DoctorProfileScreen = ({navigation}) => {
        return(
            <SafeAreaView style={styles.mainContainer}>
                <ScrollView>
                    
                    <View style={styles.Container}>
                        
                        <DocProp  imageUri={Images.doctor1} name='DR. Anna' type='Dentist' Patients='25k' price='LK.2000'
                        
                        />
                        <TouchableOpacity style={styles.image1Container}>
                            <Icon name='phone-square' size={33} style={styles.imageColor}/>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.image2Container}>
                            <Icon name='envelope' size={33} style={styles.imageColor}/>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.buttonContainer} activeOpacity={0.8}>
                            <Text style={styles.buttonText}>Book Appointment</Text>
                        </TouchableOpacity>
                        
                    </View>
                    
                </ScrollView>
            </SafeAreaView>
        )
    
}
const styles= StyleSheet.create(
    {
        mainContainer:{
            flex:1,
            backgroundColor:'#3067F1',
        },
        Container:{
            flex:1, 
            backgroundColor:'#FCFCFC',
            width:'100%',
            height:700, 
            marginTop:120
        },
        image1Container:{
            top:'18%',
            left:'15%'
        },
        imageColor:{
            color:'#3067F1', 
        },
        image2Container:{
            top:'13%',
            left:'32.5%'
        },
        buttonContainer:{
            backgroundColor:'#3067F1', 
            position:'absolute', 
            bottom:'77%', 
            left:'50%', 
            padding:6,
            borderRadius:5,
            paddingLeft:18,
            paddingRight:18 
        },
        buttonText:{
            textAlign:'center', 
            color:'#ffffff'
        }
    }
)
export default DoctorProfileScreen;