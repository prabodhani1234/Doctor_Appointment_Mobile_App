import React, {Component} from 'react';
import {
  Text,
  View,
  StyleSheet,
  ScrollView
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

class DoctorsCom extends Component{
  render(){
    return(
        <View style={styles.mainContainer}>
            <View style={{marginLeft:17,marginTop:5}}>
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
        </View>
    )
  }
}
const styles=StyleSheet.create(
    {
        mainContainer:{
            flex:1,
            width:345, 
            height:135, 
            elevation:10,
            backgroundColor:'#ffffff', 
            marginTop:20,
            marginBottom:2, 
            marginRight:2 
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
        }
    }
)
export default DoctorsCom;