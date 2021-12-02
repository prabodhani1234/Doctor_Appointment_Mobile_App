import React, {Component} from 'react';
import {
  Text,
  View,
  Image,
  StyleSheet
} from 'react-native';
import {Card} from 'react-native-shadow-cards';

class DoctorCategory extends Component{
  render(){
    return(
      <Card style={styles.mainCantainer}>
          <View style={styles.imageContainer}>
          <Image source={this.props.imageUri} style={styles.imageStyle}/>
          </View>
          <View style={styles.textMainContainer}>
              <View style={styles.textContainer}>
                
                <Text style={styles.textStyle}>{this.props.doctor}</Text>
              </View>
              <View>
                <Text style={styles.catText}>{this.props.name}</Text>
                <Text style={{fontSize:12}}>Reating</Text>
              </View>
                
          </View>
         
      </Card>
    )
  }
}
const styles = StyleSheet.create(
    {
      mainCantainer:{
        height:"95%",
        width:"41%", 
        marginLeft:"6%",
      },

      imageContainer:{
        flex:2,
        paddingLeft:"18%"
      },

      imageStyle:{
        flex:1, 
        height:100, 
        width:100 ,
        resizeMode:'contain'
      },

      textMainContainer:{
        flex:1 ,
        paddingLeft:"7%", 
        paddingTop:"7%", 
        backgroundColor:'#E6EBFC'
      },

      textContainer:{
        backgroundColor:'#3B68E7', 
        width:'85%', 
        height:25, 
        position:'absolute',
        top:-12, 
        borderRadius:5
      },
      textStyle:{
        paddingLeft:"7%", 
        color:'#ffffff'
      },
      catText:{
        fontFamily:'Roboto-Black',
        color:'black', 
        paddingTop:"7%"
      }
    }
  )
export default DoctorCategory;