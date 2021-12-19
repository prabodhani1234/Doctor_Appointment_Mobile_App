import React, { Component } from 'react';  
import { SafeAreaView,Button, Image, StyleSheet, Text, TextInput, View,ScrollView,TouchableOpacity,ImageBackground } from 'react-native';
import Images from '../theme/Images';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Icons from 'react-native-vector-icons/FontAwesome';

const EditProfileScreen= () =>{
        return(
            <SafeAreaView style={styles.mainContainer}>
                <View style={styles.container}>
                    <View style={{alignItems:'center'}}>
                    <TouchableOpacity activeOpacity={0.8} >
                        <View style={styles.imageContainer}>
                        <ImageBackground source={Images.doctor1} style={styles.imageStyle} imageStyle={{borderRadius: 15}}>
                                <View style={styles.iconContainer}>
                                    <Icon name="camera" size={35} color="#ffffff" style={styles.iconStyles}/>
                                </View>
                        </ImageBackground>
                        </View>
                    </TouchableOpacity>
                <Text style={styles.nameText}>
                    Johne
                </Text>
                </View>
            <View style={styles.inputContainer}>
                <View style={styles.inputItem}>
                <Icons name="user" size={27} style={{paddingRight:9}} />
                <TextInput
                    placeholder="Name"
                    autoCorrect={false}
                    style={styles.inputItemText}
                />
                </View>
                <View style={styles.inputItem}>
                <Icon name="map-marker-alt" size={27} style={{paddingRight:9}} />
                <TextInput
                    placeholder="Address"
                    autoCorrect={false}
                    style={styles.inputItemText}
                />
                </View>
                <View style={styles.inputItem}>
                <Icons name="envelope-open" size={27} style={{paddingRight:2}} />
                <TextInput
                    placeholder="E-mail Address"
                    autoCorrect={false}
                    style={styles.inputItemText}
                />
                </View>
                <View style={styles.inputItem}>
                <Icon name="phone" size={27} style={{paddingRight:1}}/>
                <TextInput
                    placeholder="Phone Number"
                    autoCorrect={false}
                    style={styles.inputItemText}
                />
                </View>
                <View style={styles.inputItem}>
                <Icon name="unlock-alt" size={27} style={{paddingRight:3}} />
                <TextInput
                    placeholder="Password"
                    autoCorrect={false}
                    style={styles.inputItemText}
                />
                </View> 
            </View>
            <View style={{alignItems:'center'}}>
                <TouchableOpacity style={styles.saveButtonContainer} activeOpacity={0.8}>
                    <Text style={styles.saveButtonText}>Save</Text>
                </TouchableOpacity>
            </View>
            </View>
        </SafeAreaView>
        
          
        )
    
}
const styles= StyleSheet.create(
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
            paddingTop:30,
            
            
        },
        imageContainer:{
            height: 100,
            width: 100,
            borderRadius: 15,
            marginTop:10,
            justifyContent: 'center',
            alignItems: 'center',
        },
        imageStyle:{
            height: 150, 
            width: 150,
        },
        nameText:{
            marginTop: 30, 
            fontSize: 18, 
            fontWeight: 'bold',
        },
        iconContainer:{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
        },
        iconStyles:{
            opacity:0.7,
        },
        inputContainer:{
            marginTop:'6%',
            marginLeft:'10%'
        },
        
        inputItem: {
            flexDirection: 'row',
            paddingVertical: 8,
            borderBottomWidth: 1,
            borderBottomColor: '#f2f2f2',
           
        },
        inputItemText: {
            color: '#777777',
            marginLeft: 20,
            fontWeight: '600',
            fontSize: 16,
            lineHeight: 26,
        },
        saveButtonContainer:{
            backgroundColor:'#3067F1',
            marginTop:20,
            width:'75%', 
            height:45,
            borderRadius:40,
            alignItems:'center',
            justifyContent:'center'
        },
        saveButtonText:{
            color:'#ffffff', 
            fontFamily:'Roboto-Bold', 
            fontSize:21, 
        },
    }
)
export default EditProfileScreen;