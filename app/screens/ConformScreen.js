import React, { Component } from 'react';  
import { SafeAreaView,Button, StyleSheet, Text, TextInput, View,ScrollView,TouchableOpacity  } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class Conform extends Component{
    render(){
        return(
            <SafeAreaView style={styles.mainContainer}>
                <View style={styles.container}>
                    <View>
                        <Icon name='check-circle' size={150} style={{color:'#3067F1'}}/>   
                    </View>
                    <Text style={styles.textStyle}>Your Appointment had </Text>
                    <Text style={styles.textStyle}>been Scheduled</Text>
                </View>
                <TouchableOpacity style={styles.buttonContainer} activeOpacity={0.8} >
                    <Text style={styles.buttonText}>Ok</Text>
                </TouchableOpacity>
            </SafeAreaView>
        )
    }
}
const styles=StyleSheet.create(
    {
        mainContainer:{
            flex:1, 
            backgroundColor:'#ffffff',
        },
        container:{
            flex:1,
            alignItems:'center', 
            justifyContent:'center'
        },
        textStyle:{
            fontSize:22, 
            fontFamily:'Roboto-Bold',
            color:'black'
        },
        buttonContainer:{
            alignItems:'center', 
            backgroundColor:'#3B68E7',
            marginBottom:'25%',
            marginRight:'30%', 
            marginLeft:'30%', 
            paddingTop:8, 
            paddingBottom:8,
            borderRadius:15
        },
        buttonText:{
            color:'#ffffff',
            fontSize:20
        }
    }
)