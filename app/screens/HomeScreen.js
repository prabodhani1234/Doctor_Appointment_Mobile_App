import React, { Component } from 'react';  
import {  Text, View, StyleSheet, TextInput, SafeAreaView,FlatList, TouchableOpacity,ScrollView,} from 'react-native';
import Category from '../components/HomeScreenCom/Category';
import Images from '../theme/Images';
import DoctorCategory from '../components/HomeScreenCom/DoctorCategory';
import DoctorDetails from '../stores/DoctorDetails';

function HomeScreen({navigation}){
    {
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
                    <View style={{flex:1}}>
                        <Text style={styles.CatogoryName}>Carogory</Text>
                        <TouchableOpacity activeOpacity={0.5} style={styles.showAllButtonContainer} >
                            <Text style={styles.showAllButtonText}>Show All</Text>
                        </TouchableOpacity>
                        <View style={{height:140, marginTop:20}}>
                        <ScrollView horizontal={true}
                        showsHorizontalScrollIndicator={false}
                        >
                            <TouchableOpacity activeOpacity={0.8} >
                            <Category imageUri={Images.category1}
                            name="Cardiologiats"
                            />
                            </TouchableOpacity>
                            <TouchableOpacity activeOpacity={0.8}>
                            <Category imageUri={Images.category2}
                            name="Optimologists"
                            />
                            </TouchableOpacity>
                            <TouchableOpacity activeOpacity={0.8}>
                            <Category imageUri={Images.category3}
                            name="Dentists"
                            />
                            </TouchableOpacity>
                            <TouchableOpacity activeOpacity={0.8}>
                            <Category imageUri={Images.category4}
                            name="ENT Specielist"
                            />
                            </TouchableOpacity>
                            <TouchableOpacity activeOpacity={0.8}>
                            <Category imageUri={Images.category5}
                            name="Pediatrician"
                            />
                            </TouchableOpacity>
                        </ScrollView>
                        </View>
                    </View>
                    <View style={styles.doctordetailsContainer}>
                        <Text style={styles.doccontainer}>Doctors</Text>
                        <TouchableOpacity activeOpacity={0.5} style={styles.showAllButtonContainer} onPress={() => navigation.navigate('AllDoctors')} >
                            <Text style={styles.showAllButtonText}>Show All</Text>
                        </TouchableOpacity>
                        <View style={{height:240, marginTop:20}}>
                            <FlatList
                            showsHorizontalScrollIndicator={false}
                            horizontal={true}
                            data={DoctorDetails}
                            renderItem={({item})=>
                            <TouchableOpacity activeOpacity={0.8}>
                            <DoctorCategory 
                            name={item.name} 
                            imageUri={item.imageUri} 
                            Catogory={item.Catogory} /></TouchableOpacity>}
                            />
                    
                        </View>
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
            marginTop:"10%" ,
            marginBottom:"5%",
            borderRadius:6
        },
        container:{
            flex:1,
            backgroundColor:'white',
            paddingTop:'5%',
            paddingBottom:"11%",
            borderTopLeftRadius:20,
            borderTopRightRadius:20
        },
        CatogoryName:{
            fontSize:24, 
            fontWeight:'700', 
            paddingHorizontal:"5%",
            color:'black'
        }, 
        showAllButtonContainer:{
            position:'absolute',
            left:'80%', 
            top:"7%",
        },
        showAllButtonText:{
            color:'blue',
            textDecorationLine:'underline'
        },
        doctordetailsContainer:{
            flex:1, 
            backgroundColor:'white', 
            paddingTop:'5%'
        },
        doccontainer:{
            fontSize:24, 
            fontWeight:'700', 
            paddingHorizontal:"5%", 
            color:'black',
        },
    

        doctorCategoryContainer:{
            height:240, 
            marginTop:20
        }
        
    }
);

export default HomeScreen;