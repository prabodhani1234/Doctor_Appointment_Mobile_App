import React, { Component } from 'react';  
import { SafeAreaView, StyleSheet, Text, View,ScrollView,TouchableOpacity  } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class Appointment extends Component{
    onPressHomeButton=()=>{
        this.props.navigation.navigate('Home')
      }
    render(){
        return(
            <SafeAreaView style={styles.mainContainer}>
                <ScrollView >
                    <View>
                        <View style={styles. mainTextContainer}>
                            <Text style={styles.mainText}>Available Doctors</Text>
                            
                        </View>
                        
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
            backgroundColor:'#3067F1',
        },
        mainTextContainer:{
            flex:1,
            marginBottom:"40%",
            paddingTop:25
        },
        mainText:{
            fontSize:26,
            color:"#ffffff",
            textAlign:'center',
            position:'absolute',
            left:'25%',
            top:'60%'
        },
    }
)