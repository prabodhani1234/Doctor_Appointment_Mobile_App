import React, { useContext } from 'react';  
import { SafeAreaView, StyleSheet, Text, View,ScrollView,Image,TouchableOpacity ,ImageBackground} from 'react-native';
import Images from '../theme/Images';
import { AuthContext } from '../navigation/AuthProvider';
import Icon  from 'react-native-vector-icons/FontAwesome5';


const Profile=({navigation})=>{
    const { logout}=useContext(AuthContext);

        return(
            <SafeAreaView >
                <ScrollView >
                    <View style={styles.mainContainer}>
                        <View style={styles.imageView}>
                            <View style={styles.imageContainer}>
                                <ImageBackground source={{uri: 'https://picsum.photos/id/10/200'}} style={styles.imageStyle} imageStyle={{borderRadius: 15}}/>
                            </View>
                            <View style={styles.textContaniner}>
                                <Text style={styles.nameTextStyle}>Ashraf Hossain</Text>
                                    <Text style={styles.emailText}>ashraf@gmail.com</Text>
                                    <TouchableOpacity style={styles.editButtonContainer} onPress={() => navigation.navigate('EditProfile')}>
                                        <Icon name='edit' color={'#3067F1'} size={18}/>
                                        <Text style={styles.editButtontext}>Edit</Text>
                                    </TouchableOpacity>
                            </View>
                            <View style={styles.manuContainer}>
                                <TouchableOpacity onPress={() => {}} activeOpacity={0.5} >
                                    <View style={styles.menuItem}>
                                        <Icon name='credit-card' size={25} color={'#3067F1'} style={{paddingRight:6}}/>
                                        <Text style={styles.menuItemText}>Payment</Text>
                                    </View>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() => {}} activeOpacity={0.5}>
                                    <View style={styles.menuItem}>
                                        <Icon name='map-marker-alt' size={25} color={'#3067F1'} style={{paddingRight:15}} />
                                        <Text style={styles.menuItemText}>Location</Text>
                                    </View>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() => {}} activeOpacity={0.5}>
                                    <View style={styles.menuItem}>
                                        <Icon name='user-edit' size={25} color={'#3067F1'} style={{paddingRight:3}}/>
                                        <Text style={styles.menuItemText}>Support</Text>
                                    </View>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() => {}} activeOpacity={0.5}>
                                    <View style={styles.menuItem}>
                                        <Icon name='cog' size={25} color={'#3067F1'} style={{paddingRight:10}}/>
                                        <Text style={styles.menuItemText}>Settings</Text>
                                    </View>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={()=> logout()} activeOpacity={0.5}>
                                    <View style={styles.menuItem}>
                                        <Icon name='sign-out-alt' size={25} color={'#3067F1'} style={{paddingRight:10}}/>
                                        <Text style={styles.menuItemText}>Log Out</Text>
                                    </View>
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
        imageView:{
            flex:1, 
            backgroundColor:'white', 
            width:'100%',
            height:522, 
            borderTopLeftRadius:20, 
            borderTopRightRadius:20,
            marginTop:"40%"
        }, 
        imageContainer:{
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
        },
        emailText:{
            color: '#777777',
            fontWeight: '600',
            fontSize: 15,
            
        },
        manuContainer:{
            marginTop:'6%',
            marginLeft:'10%'
        },
        
        menuItem: {
            flexDirection: 'row',
            paddingVertical: 15,
           
        },
        menuItemText: {
            color: '#777777',
            marginLeft: 20,
            fontWeight: '600',
            fontSize: 16,
            lineHeight: 26,
        },
        editButtonContainer:{
            flexDirection:'row',
            marginLeft:10,
            marginTop:6
        },
        editButtontext:{
            color:'#3067F1',
            paddingLeft:5
        },
    }
)
export default Profile;