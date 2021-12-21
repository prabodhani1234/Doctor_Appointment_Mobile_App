import React, { Component } from 'react';  
import { SafeAreaView,Button, StyleSheet, Text, TextInput, View,ScrollView,TouchableOpacity  } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

const Appointment = ({navigation}) => {
    

        return(
            <SafeAreaView style={styles.mainContainer}>
               
                    <View style={styles.container}>
                    <ScrollView>
                        <Text style={styles.textStyle}>Full Name</Text>
                        <TextInput
                            placeholder="Enter your name"
                            style={styles.inputStyle}
                        />
                        <Text style={styles.textStyle}>Phone Number</Text>
                        <TextInput
                            placeholder="Enter Phone Number"
                            style={styles.inputStyle}
                        />
                        <Text style={styles.textStyle}>E-mail Address</Text>
                        <TextInput
                            placeholder="Enter Email"
                            style={styles.inputStyle}
                        />
                        <Text style={styles.textStyle}>Address</Text>
                        <TextInput
                            placeholder="Enter your Address"
                            style={styles.inputStyle}
                        />
                        <Text style={styles.textStyle}>Date</Text>
                        <View style={styles.inputStyle}>

                            <TextInput
                                placeholder="Select Date"
                            />
                            <TouchableOpacity activeOpacity={0.5}>
                                <Icon name='calendar-day' size={25} style={{ marginLeft:'71%', marginTop:'4%'}}/>
                            </TouchableOpacity>
                        </View>
                        
                        <Text style={styles.textStyle}>Time</Text>
                        <TextInput
                            placeholder="Select Time"
                            style={styles.inputStyle}
                        />
                        <TouchableOpacity style={styles.buttonContainer} activeOpacity={0.8} onPress={() => navigation.navigate('PaymentScreen')}>
                            <Text style={styles.buttonText}>Conform</Text>
                        </TouchableOpacity>
                        </ScrollView>
                    </View>
                    
                
            </SafeAreaView>
        )
    
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
            paddingLeft:'10%', 
            marginTop:'10%', 
            borderTopLeftRadius:20, 
            borderTopRightRadius:20,
            paddingTop:30
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
        buttonContainer:{
            alignItems:'center', 
            backgroundColor:'#3B68E7',
            marginRight:'20%', 
            marginLeft:'10%', 
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
export default Appointment;