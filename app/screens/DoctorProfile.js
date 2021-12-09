import React, { Component } from 'react';  
import { SafeAreaView,Button, StyleSheet, Text, TextInput, View,ScrollView,TouchableOpacity  } from 'react-native';

export default class Appointment extends Component{
    render(){
        return(
            <SafeAreaView style={styles.mainContainer}>
                <ScrollView>
                    
                    <View style={styles.container}>
                        
                    </View>
                    
                </ScrollView>
            </SafeAreaView>
        )
    }
}
const styles= StyleSheet.create(
    {
        mainContainer:{
            flex:1,
            backgroundColor:'#3067F1',
            alignItems:'center',
            justifyContent:'center'
        },
        container:{
            flex:1, 
            backgroundColor:'#FCFCFC',
            width:'100%',
            alignItems:'center',
            justifyContent:'center'
        }
    }
)