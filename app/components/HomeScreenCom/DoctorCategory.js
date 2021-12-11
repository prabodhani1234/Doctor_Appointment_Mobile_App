import React, {Component} from 'react';
import {
  Text,
  View,
  Image,
  StyleSheet
} from 'react-native';
import {Card} from 'react-native-shadow-cards';
import Icon from 'react-native-vector-icons/FontAwesome';

class DoctorCategory extends Component{
  render(){
    return(
      <Card style={styles.mainCantainer}>
          <View style={styles.imageContainer}>
          <Image source={this.props.img} style={styles.imageStyle}/>
          </View>
          <View style={styles.textMainContainer}>
              <View style={styles.textContainer}>
                
                <Text style={styles.textStyle}>{this.props.name}</Text>
              </View>
              <View>
                <Text style={styles.catText}>{this.props.Catogory}</Text>
                <Text style={{fontSize:12}}>Reating</Text>
              </View>
              <View style={styles.starStylesContainer}>
                    <Icon name='star' size={15} style={styles.starStyles} />
                    <Icon name='star' size={15} style={styles.starStyles}  />
                    <Icon name='star' size={15} style={styles.starStyles} />
                    <Icon name='star' size={15} style={styles.starStyles} />
                    <Icon name='star' size={15} style={styles.starStyles} />
                </View>
                
          </View>
         
      </Card>
    )
  }
}
const styles = StyleSheet.create(
    {
      mainCantainer:{
        height:235,
        width:160, 
        marginLeft:20,
      },

      imageContainer:{
        flex:2,
        paddingLeft:28
      },

      imageStyle:{
        flex:1, 
        height:100, 
        width:100 ,
        resizeMode:'contain'
      },

      textMainContainer:{
        flex:1 ,
        paddingLeft:10, 
        paddingTop:10, 
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
        paddingLeft:10, 
        color:'#ffffff'
      },
      catText:{
        fontFamily:'Roboto-Black',
        color:'black', 
        paddingTop:10
      },
      starStylesContainer:{
        flexDirection:'row',
    },
    starStyles:{
        color:'#EFE12B'
    },
    }
  )
export default DoctorCategory;