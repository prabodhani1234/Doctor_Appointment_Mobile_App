import React, { Component } from 'react';  
import { SafeAreaView, StyleSheet, View,ScrollView, } from 'react-native';
import AppointmentCom from '../../components/AppointmentScreenCom/AppointmentCom';
import Images from '../../theme/Images'



export default class PastAppointment extends Component{

    render(){
        return(
            <SafeAreaView style={styles.mainConataner}>
                <ScrollView>
                    <View style={styles.listcontainer}>
                        <ScrollView>
                            <View>
                        
                                <AppointmentCom imageUri={Images.doctor1}
                                name="DR. Amelia Grosh" date='Nov 24 2021 06.30 pm' catogory='Cardiologiats' button='Feedback' mainButton='Book Appoinment '
                                />
                                <AppointmentCom imageUri={Images.doctor2}
                                name="DR. Harry William" date='Nov 28 2021 06.30 pm' catogory='Optimologists' button='Feedback' mainButton='Book Appoinment '
                                />
                                <AppointmentCom imageUri={Images.doctor1}
                                name="DR. Amelia Grosh" date='Dec 2 2021 06.30 pm' catogory='Cardiologiats' button='Feedback' mainButton='Book Appoinment '
                                />
                             </View>
                        </ScrollView>
                    </View>
                </ScrollView>
            </SafeAreaView>
        )
    }
}

const styles=StyleSheet.create({
    mainConataner:{
        flex:1,
        backgroundColor:'#FCFCFC',
    },
    
    listcontainer: {
        width: '100%',
        padding: 16,
        paddingTop: 5,
        height:'100%'
        
      },
})