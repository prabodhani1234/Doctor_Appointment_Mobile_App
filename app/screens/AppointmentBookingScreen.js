import React, { useState } from 'react';  
import { SafeAreaView,Button, StyleSheet, Text, TextInput, View,ScrollView,TouchableOpacity  } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import DateTimePicker from '@react-native-community/datetimepicker'

const Appointment = ({navigation}) => {
    const [isPickerShow, setIsPickerShow] = useState(false);
  const [date, setDate] = useState(new Date(Date.now()))
  const showPicker = () => {
    setIsPickerShow(true);
  };

  const onChange = (event, value) => {
    setDate(value);
    if (Platform.OS === 'android') {
      setIsPickerShow(false);
    }
  };

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

                            <Text>{date.toUTCString()}</Text>
                            {!isPickerShow && (
                            <TouchableOpacity activeOpacity={0.5} onPress={showPicker}>
                                <Icon name='calendar-day' size={25} style={{marginLeft:'30%', marginBottom:10, marginTop:10}} />
                            </TouchableOpacity>)}
                        </View>
                        
                        <Text style={styles.textStyle}>Time</Text>
                        <TextInput
                            placeholder="Select Time"
                            style={styles.inputStyle}
                        />
                        
                        <TouchableOpacity style={styles.buttonContainer} activeOpacity={0.8} onPress={() => navigation.navigate('PaymentScreen')}>
                            <Text style={styles.buttonText}>Conform</Text>
                        </TouchableOpacity>
                        {isPickerShow && (
                            <DateTimePicker
                            value={date}
                            mode={'date'}
                            display={Platform.OS === 'ios' ? 'spinner' : 'default'}
                            is24Hour={true}
                            onChange={onChange}
                            style={styles.datePicker}
                            />
                        )}
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
        },
        datePicker: {
            width: 320,
            height: 260,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'flex-start',
          },
    }
)
export default Appointment;