import React, { Component } from 'react';  
import { SafeAreaView, StyleSheet, Text, View,ScrollView,TouchableOpacity  } from 'react-native';
import DoctorsCom from '../components/HomeScreenCom/DoctorsCom';

export default class Appointment extends Component{
    
    render(){
        return(
            <SafeAreaView style={styles.mainContainer}>
                <ScrollView >
                    <View>
                        <DoctorsCom name='DR.Anna' catogory='Dentist'year='2 years'/>
                    </View>
                </ScrollView>
            </SafeAreaView>
        )
    }
};
const styles=StyleSheet.create(
    {
        mainContainer:{ 
            flex:1,
            backgroundColor:'#F3F3F3',
            alignItems:'center',
            justifyContent:'center'
        },
        
    }
)