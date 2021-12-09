import React, { Component } from 'react';  
import { SafeAreaView,Button, StyleSheet, Image,Text, TextInput, View,ScrollView,TouchableOpacity  } from 'react-native';
import Card from 'react-native-shadow-cards';
import DocProp from '../components/ProfileScreenCom/DoctorProfileCom';
import Icon  from 'react-native-vector-icons/FontAwesome';
import Images from '../theme/Images';

const DoctorProfileScreen = ({navigation, route}) => {

    const DoctorDetails = route.params;

        return(
            <SafeAreaView style={styles.mainContainer}>
                <ScrollView>
                    
                    <View style={styles.Container}>
                        
                        <DocProp  imageUri={DoctorDetails.imageUri} name={DoctorDetails.name} type={DoctorDetails.Catogory} Patients={DoctorDetails.patients} price={DoctorDetails.price}
                        
                        />
                        <TouchableOpacity style={styles.image1Container} activeOpacity={0.8}>
                            <Icon name='phone-square' size={33} style={styles.imageColor}/>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.image2Container} activeOpacity={0.8}>
                            <Icon name='envelope' size={33} style={styles.imageColor}/>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.buttonContainer} activeOpacity={0.8}>
                            <Text style={styles.buttonText}>Book Appointment</Text>
                        </TouchableOpacity>

                        <View style={styles.infoContainer}>
                            <Text style={styles.textTittle}>About</Text>
                            <Text style={styles.textContainer}>{DoctorDetails.about}</Text>
                            <Text style={styles.textTittle}>Qulification</Text>
                            <Text style={styles.textContainer}>{DoctorDetails.qulification}</Text>
                            <Text style={styles.textTittle}>Working Time</Text>
                            <Text style={styles.textContainer}>{DoctorDetails.time}</Text>
                        </View>
                        
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
            height:'110%', 
            marginTop:120,
            paddingBottom:'15%'
        },
        image1Container:{
            top:'23.7%',
            left:'15%'
        },
        imageColor:{
            color:'#3067F1', 
        },
        image2Container:{
            top:'17%',
            left:'32.5%'
        },
        buttonContainer:{
            backgroundColor:'#3067F1', 
            position:'absolute', 
            bottom:'81%', 
            left:'50%', 
            padding:6,
            borderRadius:5,
            paddingLeft:18,
            paddingRight:18 
        },
        buttonText:{
            textAlign:'center', 
            color:'#ffffff'
        },
        infoContainer:{
            marginTop:'30%', 
            marginLeft:'9%',
            marginRight:'7%'
        },
        textTittle:{
            fontSize:16, 
            fontFamily:'Roboto-Bold',
            color:'black',
            marginTop:'3%',
            marginBottom:'3%'
        },
        textContainer:{
            color:'black', 
            textAlign:'justify',

        }    
    }
)
export default DoctorProfileScreen;