import React, { Component } from 'react';  
import {  Text, View, StyleSheet, TextInput, SafeAreaView, ScrollView} from 'react-native';

export default class HomeScreen extends Component{
    render(){
        return(
            <SafeAreaView style={styles.mainContainer}>
                <ScrollView  scrollEventThrottle={16}>
                <View >
                    <View style={styles.textInputContainer}>
                        <TextInput 
                        placeholder='Search Your Doctor'
                        />
                    </View>
                </View >
                <View style={styles.container}>
                    <View>
                    <Text style={styles.CatogoryName}>Carogory</Text>
                    </View>
                </View>
                </ScrollView>
            </SafeAreaView>
        )
    }
};
const styles= StyleSheet.create(
    {
        mainContainer:{ 
            flex:1,
            backgroundColor:'#3067F1',
        },
        textInputContainer:{
            backgroundColor:'#ffffff',
            marginLeft:"8%",
            marginRight:"8%",
            marginTop:"5%" ,
            marginBottom:"5%",
            borderRadius:6
        },
        container:{
            flex:1,
            backgroundColor:'white',
            width:'100%',
            height:'100%',
            paddingTop:20,
            paddingBottom:59,
            borderTopLeftRadius:20,
            borderTopRightRadius:20
        },
        CatogoryName:{
            fontSize:24, 
            fontWeight:'700', 
            paddingHorizontal:20
        }
    }
);