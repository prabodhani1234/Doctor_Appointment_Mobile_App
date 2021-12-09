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
                            <Text style={styles.textContainer}>Dr. Anna is a the topmost Dentist specialist in amedical 
                            hospital in new york.Dr.Anna is a physician with above 12 years of experience.she achieved 
                            several awards for her wonderful contribution in her own field.Dr.Anna has been one of the top 
                            rated doctor in the community. Dr.Anna is known for 100% guaranteed results.</Text>
                            <Text style={styles.textTittle}>Qulification</Text>
                            <Text style={styles.textContainer}>M.B.B.S.F.C.P.S Cardio specialist</Text>
                            <Text style={styles.textTittle}>Working Time</Text>
                            <Text style={styles.textContainer}>Mon - Fri 09.00 AM - 20.00 PM</Text>
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