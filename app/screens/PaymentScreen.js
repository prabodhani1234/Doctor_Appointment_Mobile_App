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
                        <View style={{width:'100%', height:180, backgroundColor:'#3067F1', borderRadius:20}}>
                            <View style={{marginLeft:'6%',}}>
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
                        <View style={styles.subtextContainer}>
                            <Text style={{fontFamily:'Roboto-Bold'}}>by adding debit/credit card you agree to the </Text>
                            <Text style={{color:'#3067F1',fontFamily:'Roboto-Bold'}}>Terms and Conditions</Text>
                        </View>
                        <View style={{marginTop:'5%'}}>
                            <Text style={styles.textStyle}>Card Name</Text>
                            <TextInput
                                placeholder="Enter card name"
                                style={styles.inputStyle}
                            />
                            <Text style={styles.textStyle}>Card Number</Text>
                            <TextInput
                                placeholder="Enter card number"
                                style={styles.inputStyle}
                            />
                            <View style={{flexDirection:'row'}}>
                                <Text style={styles.textStyle}>Expire Date</Text>
                                <Text style={{fontSize:16,color:'black', marginLeft:'27%'}}>CVC</Text>
                            </View>
                            <View style={{flexDirection:'row'}}>
                                <TextInput
                                    placeholder="MM/YY"
                                    style={styles.expireDateStyle}
                                />
                                <TextInput
                                    placeholder="Enter your name"
                                    secureTextEntry={true}
                                    style={styles.CVCstyle}
                                />
                            </View>
                            <TouchableOpacity style={styles.buttonContainer} activeOpacity={0.8} >
                                <Text style={styles.buttonText}>Payment Now</Text>
                            </TouchableOpacity>
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
            paddingRight:'8%',
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
            width:'100%',
            marginTop:'2%', 
            borderColor:'#707070', 
            borderWidth:1, 
            marginBottom:'2%', 
            paddingLeft:20,
            flexDirection:'row'
        },
        expireDateStyle:{
            backgroundColor:'#ffffff',
            width:'45%',
            marginTop:'2%', 
            borderColor:'#707070', 
            borderWidth:1, 
            marginBottom:'2%', 
            paddingLeft:20,
        },
        CVCstyle:{
            backgroundColor:'#ffffff',
            width:'45%',
            marginTop:'2%', 
            borderColor:'#707070', 
            borderWidth:1, 
            marginBottom:'2%', 
            paddingLeft:20,
            marginLeft:'10%'
        },
        subtextContainer:{
            alignItems:'center',
            marginTop:'5%'
        },
        buttonContainer:{
            alignItems:'center', 
            backgroundColor:'#3B68E7',
            marginRight:'20%', 
            marginLeft:'20%', 
            marginTop:'4%', 
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