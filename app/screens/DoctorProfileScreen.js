import React, { Component } from 'react';  
import { SafeAreaView,Button, StyleSheet, Image,Text, TextInput, View,ScrollView,TouchableOpacity  } from 'react-native';
import Card from 'react-native-shadow-cards';
import DocProp from '../components/ProfileScreenCom/DoctorProfileCom';
import { Icon } from 'react-native-vector-icons/FontAwesome';
import Images from '../theme/Images';

const DoctorProfileScreen = ({navigation}) => {
        return(
            <SafeAreaView style={{flex:1,backgroundColor:'#3067F1'}}>
                <ScrollView>
                    
                    <View style={{flex:1, backgroundColor:'#FCFCFC',width:'100%',height:700, marginTop:120}}>
                        
                        <DocProp  imageUri={Images.doctor1} name='DR. Anna' type='Dentist' Patients='25k' price='LK.2000'
                        
                        />
                         
                    </View>
                    
                </ScrollView>
            </SafeAreaView>
        )
    
}
export default DoctorProfileScreen;