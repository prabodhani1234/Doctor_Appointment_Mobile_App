import React, { Component } from 'react';  
import { SafeAreaView, StyleSheet, Text, View,ScrollView, } from 'react-native';

export default class Profile extends Component{
    render(){
        return(
            <SafeAreaView style={styles.mainContainer}>
                <ScrollView >
                    <View>
                        <View style={styles. mainTextContainer}>
                            <Text style={styles.mainText}>My Profile</Text>
                        </View>
                    </View>
                </ScrollView>
            </SafeAreaView>
        )
    }
}
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
      textAlign:'center'
    }
    }
)