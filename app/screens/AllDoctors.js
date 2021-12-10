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
            backgroundColor:'#ffffff',
        },
        
    }
)