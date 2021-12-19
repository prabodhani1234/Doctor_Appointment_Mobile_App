import React, { Component } from 'react';  
import { SafeAreaView,Button, StyleSheet, Text, TextInput, View,ScrollView,TouchableOpacity,Image  } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Images from '../theme/Images';

export default class PaymentScreen extends Component{
    render(){
        return(
            <SafeAreaView style={styles.mainContainer}>
                <View style={styles.container}>
                    <ScrollView>
                        <View style={{width:'92%', height:180, backgroundColor:'#3067F1', borderRadius:20}}>
                            <View style={{marginLeft:'6%'}}>
                                <View style={styles.textContainer}>
                                <Text style={styles.card1fontstyle}>Credit Card</Text>
                                <Text style={styles.card2fontstyle}>Central Bank</Text>
                                </View>
                                <View style={styles.textContainer}>
                                    <Text>Image</Text>
                                    <Text style={styles.cardtextStyle}>Sri Lanka</Text>
                                </View>
                                <View style={{marginTop:'15%', flexDirection:'row'}}>
                                    <Text style={styles.card1fontstyle}>1234 5678 9458 2587</Text>
                                    <Text style={{color:'#ffffff',fontFamily:'Roboto-Bold',fontSize:16,marginLeft:'19%'}}>Expair</Text>
                                </View>
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
        textContainer:{
            flexDirection:'row',
            marginTop:8
        },
        card1fontstyle:{
            color:'#ffffff',
            fontFamily:'Roboto-Bold',
            fontSize:16,
        },
        card2fontstyle:{
            color:'#ffffff',
            fontFamily:'Roboto-Bold',
            fontSize:16,
            marginLeft:'28.5%'
        },
        imageStyles:{
            width:100,
            height:100
        },
        cardtextStyle:{
            color:'#ffffff',
            fontFamily:'Roboto-Bold',
            fontSize:13,
            marginLeft:'60.5%'
        },
        textStyle:{
            fontSize:16,
            color:'black'
        },
        inputStyle:{
            backgroundColor:'#ffffff',
            width:'90%', 
            marginTop:'2%', 
            borderColor:'#707070', 
            borderWidth:1, 
            marginBottom:'2%', 
            paddingLeft:20,
            flexDirection:'row'
        },
    }
)