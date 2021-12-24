import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView
} from 'react-native';
import {Card} from 'react-native-shadow-cards';
import Icon from 'react-native-vector-icons/FontAwesome';


class DocProp extends Component{

  render(){
    return(
      <Card style={styles.mainContainer}>
          <View>
            <Image source={this.props.imageUri} style={styles.imageContainer}/>
           
          </View>
          <View style={styles.textContainer}>
              <Text style={styles.nameTextStyle}>{this.props.name}</Text>
              <Text style={styles.typeTextStyle}>{this.props.type}</Text>

              <ScrollView
              horizontal={true}>

              <Icon name='star' size={20} style={{color:'#EFE12B'}}/>
              <Icon name='star' size={20} style={styles.starContainer}/>
              <Icon name='star' size={20} style={styles.starContainer}/>
              <Icon name='star' size={20} style={styles.starContainer}/>
              <Icon name='star' size={20} style={{color:'#E6E6E6', marginLeft:3}}/>
              </ScrollView>

              <Text style={{fontFamily:'Roboto-Bold',fontSize:13, paddingTop:"1%"}}>Patients</Text>
              <Text style={styles.otherStyles}>{this.props.Patients}</Text>
              <Text style={styles.otherStyles}>{this.props.price}</Text>

              
          </View>
      </Card>
    )
  }
}
const styles= StyleSheet.create(
    {
        mainContainer:{
            flex:1,
            width:"84%", 
            height:"35%",
            position:'absolute',
            left:'8%', 
            top:'-15%'
        },
        imageContainer:{
            height:120, 
            width:120 ,
            resizeMode:'contain',
            marginLeft:'7%', 
            marginTop:'8%'
        },
        textContainer:{
            position:'absolute', 
            left:"50%", 
            marginTop:'5%'
        },
        nameTextStyle:{
            color:'black',
            fontFamily:'Roboto-Bold', 
            fontSize:18
        },
        typeTextStyle:{
            fontFamily:'Roboto-Bold'
        },
        starContainer:{
            color:'#EFE12B', 
            marginLeft:3
        },
        otherStyles:{
            color:'black',
            fontFamily:'Roboto-Bold'
        }
    }
)
export default DocProp;