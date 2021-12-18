import React, { Component } from 'react';  
import { SafeAreaView,Button, StyleSheet, Text, TextInput, View,ScrollView,TouchableOpacity  } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

export default class PaymentScreen extends Component{
    render(){
        return(
            <SafeAreaView style={styles.mainContainer}>
                <View style={styles.container}>
                    <ScrollView>
                        <View style={{width:'92%', height:180, backgroundColor:'#3067F1', borderRadius:20}}>
                            <View>
                               
                            </View>
                        </View>
                    </ScrollView>
                </View>
            </SafeAreaView>
        )
    }
}
const styles=StyleSheet.create(
    {
        mainContainer:{
            flex:1, 
            backgroundColor:'#3067F1'
        },
        container:{
            flex:1,
            backgroundColor:'#FCFCFC', 
            paddingLeft:'8%', 
            marginTop:'10%', 
            borderTopLeftRadius:20, 
            borderTopRightRadius:20,
            paddingTop:30
        },
    }
)