import React, {Component} from 'react';
import {
  Text,
  View,
  StyleSheet,
} from 'react-native';

class DoctorsCom extends Component{
  render(){
    return(
      <View style={styles.mainContainer}>
          <View style={{marginLeft:10,marginTop:5}}>
              <Text style={styles.nameText}>{this.props.name}</Text>
              <Text style={styles.otherText}>{this.props.catogory}</Text>
              <Text style={{fontFamily:'Roboto-Bold'}}>Experience</Text>
              <Text style={styles.otherText}>{this.props.year}</Text>
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
        }
    }
)
export default DoctorsCom;