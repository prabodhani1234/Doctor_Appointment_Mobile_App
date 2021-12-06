import React, { useContext } from 'react';  
import { SafeAreaView, StyleSheet, Text, View,ScrollView,Image,TouchableOpacity } from 'react-native';
import Images from '../theme/Images';
import { AuthContext } from '../navigation/AuthProvider';

const Profile=()=>{
    const { logout}=useContext(AuthContext);

        return(
            <SafeAreaView style={styles.mainContainer}>
                <ScrollView >
                    <View>
                        <View style={styles. mainTextContainer}>
                            <Text style={styles.mainText}>My Profile</Text>
                        </View>
                        <View style={styles.imageView}>
                            <View style={styles.imageContainer}>
                                <Image source={Images.doctor1} style={styles.imageStyle}/>
                            </View>
                            <View style={styles.textContaniner}>
                                <Text style={styles.nameTextStyle}>Ashraf Hossain</Text>
                                <Text>ashraf@gmail.com</Text>
                                <TouchableOpacity onPress={()=> logout()}>
                                    <Text style={{textAlign:'center'}}>Log Out</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </ScrollView>
            </SafeAreaView>
        )
    
};
const styles=StyleSheet.create(
    {
        mainContainer:{ 
            flex:1,
            backgroundColor:'#3067F1',
        },
        mainTextContainer:{
            flex:1,
            marginBottom:"40%",
            paddingTop:25
        },
        mainText:{
            fontSize:26,
            color:"#ffffff",
            textAlign:'center'
        },
        imageView:{
            flex:1, 
            backgroundColor:'white', 
            width:'100%',
            height:515, 
            borderTopLeftRadius:20, 
            borderTopRightRadius:20
        }, 
        imageContainer:{
            width:170, 
            height:170, 
            borderRadius:170, 
            borderColor:'#707070',
            backgroundColor:'#E0E0E0', 
            position:'absolute', 
            left:'28%', 
            top:-100
        }, 
        imageStyle:{
            width:150, 
            height:150,
            left:10, 
            top:10
        },
        textContaniner:{
            alignItems:'center', 
            marginTop:80
        },
        nameTextStyle:{
            fontFamily:'Roboto-Bold', 
            fontSize:19, 
            color:'black'
        }
    }
)
export default Profile;