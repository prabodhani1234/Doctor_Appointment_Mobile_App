import React, { Component } from 'react';  
import { SafeAreaView,StyleSheet, View,ScrollView, } from 'react-native';
import AppointmentCom from '../../components/AppointmentScreenCom/AppointmentCom';
import Images from '../../theme/Images'



export default class UpcomingAppointment extends Component{
    render(){
        return(
            <SafeAreaView style={styles.mainConataner}>
                <ScrollView>
                    <View style={styles.listcontainer}>
                    <ScrollView
                    >
                    <View>
                        <AppointmentCom imageUri={Images.doctor1}
                        name="DR. Amelia Grosh" date='2 year' catogory='Cardiologiats' button='Cancel appoinment' mainButton='Change Reschedule'
                        />
                    </View>
                    <View>
                        <AppointmentCom imageUri={Images.doctor3}
                        name="DR. Oliver Gomes" date='5 year' catogory='Dentists' button='Cancel appoinment' mainButton='Change Reschedule'
                        />
                    </View>
                    <View>
                        <AppointmentCom imageUri={Images.doctor1}
                        name="DR. Amelia Grosh" date='2 year' catogory='Cardiologiats' button='Cancel appoinment' mainButton='Change Reschedule'
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
        
      },
})