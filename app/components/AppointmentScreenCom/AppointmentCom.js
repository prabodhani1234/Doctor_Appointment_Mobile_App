import React, {Component} from 'react';
import {
  Text,
  View,
  Image,
  TouchableOpacity,
  StyleSheet
} from 'react-native';
import {Card} from 'react-native-shadow-cards';


class AppointmentCom extends Component{


  render(){
    return(
      <Card style={styles.mainConataner}>
          <View style={{marginLeft:10}}>
              <Text style={styles.docNameText}>{this.props.name}</Text>
              <Text style={styles.catNameText}>{this.props.catogory}</Text>
              <Text style={styles.dateText}>{this.props.date}</Text>
              
              <TouchableOpacity style={{paddingTop:10}}>
                <Text style={styles.subButton}>{this.props.button}</Text>
              </TouchableOpacity>
              
          </View>
          <View>
            <View>
                <Image source={this.props.imageUri} style={styles.imagestyle}/>
            </View>
            <TouchableOpacity style={styles.mainButtonContainer}>
                <Text style={styles.mainButtonText}>{this.props.mainButton}</Text>
            </TouchableOpacity>
          </View>
      </Card>
    )
  }
}
export default AppointmentCom;

const styles=StyleSheet.create({
    mainConataner:{
        width:345, 
        height:132,
        marginRight:"5%", 
        elevation:10,
        marginTop:'3%'
    },
    
    docNameText:{
        color:'black', 
        fontSize: 18,
        fontFamily:'Roboto-Bold',
        marginBottom:"3%",
        marginTop:'2%'
    },
    catNameText:{
        color:'black',
        fontFamily:'Roboto-Bold',
    },
    dateText:{
        fontFamily:'Roboto-Bold',
    },
    subButton:{
        color:'blue',
        textDecorationLine:'underline'
    },
    imagestyle:{
        height:80, 
        width:80 ,
        resizeMode:'contain', 
        position:'absolute', 
        left:225, 
        bottom:28
    },
    mainButtonContainer:{
        backgroundColor:'#3067F1',
        marginLeft:"51%", 
        marginRight:10, 
        position:'absolute', 
        bottom:0.1, 
        padding:3,
        borderRadius:5, 
        paddingLeft:'3%', 
        paddingRight:'3%'
    },
    mainButtonText:{
        textAlign:'center', 
        color:'#ffffff'
    }
})