import React, { Component } from 'react';  
import { SafeAreaView, StyleSheet,FlatList, Text, View,ScrollView,TouchableOpacity  } from 'react-native';
import DoctorsCom from '../components/HomeScreenCom/DoctorsCom';
import Images from '../theme/Images';
import DoctorDetails from '../stores/DoctorDetails';

function AllDocorsScreen({navigation}){
    const [catergoryIndex, setCategoryIndex] = React.useState(0);

    const categories = ['All', 'Optimo', 'Cardio','Dentist'];
  
    const CategoryList = () => {
      return (
        <View style={styles.categoryContainer}>
          {categories.map((item, index) => (
            <TouchableOpacity
              key={index}
              activeOpacity={0.8}
              onPress={() => setCategoryIndex(index)}>
              <Text
                style={[
                  styles.categoryText,
                  catergoryIndex === index && styles.categoryTextSelected,
                ]}>
                {item}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      );
    };
        return(
            <SafeAreaView style={styles.mainContainer}>
                <View style={styles.container}>
                    <CategoryList/>
                    <FlatList 
                        showsVerticalScrollIndicator={false}
                        showsHorizontalScrollIndicator={false}
                        data={DoctorDetails}
                        renderItem={({item})=>
                            <TouchableOpacity  activeOpacity={0.8} onPress={() => navigation.navigate('DoctorProfile', item)}>
                            <DoctorsCom 
                            name={item.name} 
                            imageUri={item.imageUri} 
                            catogory={item.Catogory}
                            year={item.experience}/><Text style={styles.buttonContainer}>Book Abbointment</Text></TouchableOpacity>}
                        />
                    
                </View>  
                  
            </SafeAreaView>
        )
};
const styles=StyleSheet.create(
    {
        mainContainer:{
            flex:1, 
            backgroundColor:'#3067F1'
        },
        container:{
            flex:1,
            backgroundColor:'#FCFCFC', 
            paddingLeft:'8%', 
            marginTop:'8%', 
            paddingRight:'8%',
            borderTopLeftRadius:20, 
            borderTopRightRadius:20,
        },
        buttonContainer:{
            backgroundColor:'#3067F1',  
            position:'absolute', 
            left:'52%',
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
        categoryContainer: {
            flexDirection: 'row',
            marginTop: 30,
            marginBottom: 20,
            justifyContent: 'space-between',
          },
          categoryText: {fontSize: 16, color: 'grey', fontWeight: 'bold'},
          categoryTextSelected: {
            color: '#3067F1',
            paddingBottom: 5,
            borderBottomWidth: 2,
            borderColor: '#3067F1',
          },
    }
);
export default AllDocorsScreen;