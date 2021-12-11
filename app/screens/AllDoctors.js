import React, { Component } from 'react';  
import { SafeAreaView, StyleSheet,FlatList, Text, View,ScrollView,TouchableOpacity  } from 'react-native';
import DoctorsCom from '../components/HomeScreenCom/DoctorsCom';
import Images from '../theme/Images';
import DoctorDetails from '../stores/DoctorDetails';

function AllDocorsScreen({navigation}){

        return(
            <SafeAreaView style={styles.mainContainer}>  
                <View>
                    <FlatList
                        showsHorizontalScrollIndicator={false}
                        data={DoctorDetails}
                        renderItem={({item})=>
                            <TouchableOpacity activeOpacity={0.8} onPress={() => navigation.navigate('DoctorProfile', item)}>
                            <DoctorsCom 
                            name={item.name} 
                            imageUri={item.imageUri} 
                            catogory={item.Catogory}
                            year={item.experience}/></TouchableOpacity>}
                        />
                    
                </View>    
            </SafeAreaView>
        )
};
const styles=StyleSheet.create(
    {
        mainContainer:{ 
            flex:1,
            backgroundColor:'#F3F3F3',
            alignItems:'center',
            justifyContent:'center'
        },
        buttonContainer:{
            backgroundColor:'#3067F1',  
            position:'absolute', 
            left:'20%',
            top:'77%',
            borderRadius:5,
            padding:3,
            paddingLeft:15,
            paddingRight:15
        },
        buttonText:{
            textAlign:'center', 
            color:'#ffffff'
        },
        
    }
);
export default AllDocorsScreen;