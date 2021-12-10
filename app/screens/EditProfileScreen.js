import React, { Component } from 'react';  
import { SafeAreaView,Button, StyleSheet, Text, TextInput, View,ScrollView,TouchableOpacity,ImageBackground } from 'react-native';
import Images from '../theme/Images';


export default class EditProfileScreen extends Component{
    render(){
        return(
            <SafeAreaView>
                <View style={styles.mainContainer}>
                    <TouchableOpacity>
                        <View>
                            <ImageBackground source={Images.doctor1}>

                            </ImageBackground>
                        </View>
                    </TouchableOpacity>
                </View>
            </SafeAreaView>
        )
    }
}
const styles= StyleSheet.create(
    {
        mainContainer:{
            flex:1,
            backgroundColor:'#ffffff',
            alignItems:'center',
        }
    }
)