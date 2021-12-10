import React, {Component} from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  TouchableOpacity
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

class DoctorsCom extends Component{
  render(){
    return(
        <View style={styles.mainContainer}>
            <View style={{marginLeft:17,marginTop:10}}>
                <Text style={styles.nameText}>{this.props.name}</Text>
                <Text style={styles.otherText}>{this.props.catogory}</Text>
                <Text style={{fontFamily:'Roboto-Bold'}}>Experience</Text>
                <Text style={styles.otherText}>{this.props.year}</Text>
          
                <View style={styles.starStylesContainer}>
                    <Icon name='star' size={20} style={styles.starStyles} />
                    <Icon name='star' size={20} style={styles.starStyles}  />
                    <Icon name='star' size={20} style={styles.starStyles} />
                    <Icon name='star' size={20} style={styles.starStyles} />
                    <Icon name='star' size={20} style={styles.starStyles} />
                </View>
            </View>
            <View style={{flexDirection:'row'}}>
                <View>
                    <Image source={this.props.imageUri} style={styles.imageContainer}/>
                </View>
            </View>
            
        </View>
    )
  }
}
const styles=StyleSheet.create(
    {
        mainContainer:{
            flex:1,
            width:335, 
            height:150, 
            elevation:10,
            backgroundColor:'#ffffff', 
            marginTop:10,
            marginBottom:2, 
            marginRight:2 ,
            flexDirection:'row',
        },
        nameText:{
            color:'black', 
            fontSize: 18,
            fontFamily:'Roboto-Bold',
            marginBottom:10
        },
        otherText:{
            color:'black',
            fontFamily:'Roboto-Bold'
        },
        starStylesContainer:{
            flexDirection:'row',
        },
        starStyles:{
            color:'#EFE12B'
        },
        imageContainer:{
            height:100, 
            width:100 , 
            left:'87%',
            top:'7%' 
        },
        buttonContainer:{
            backgroundColor:'#3067F1',  
            position:'absolute', 
            left:'55%',
            top:'77%',
            borderRadius:5,
            padding:3,
            paddingLeft:15,
            paddingRight:15
        },
        buttonText:{
            textAlign:'center', 
            color:'#ffffff'
        }
    }
)
export default DoctorsCom;