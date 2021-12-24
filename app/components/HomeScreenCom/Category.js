import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
} from 'react-native';
import {Card} from 'react-native-shadow-cards';

class Category extends Component{
    render(){
      return(
        <Card style={styles.mainCantainer}>
            <View style={styles.container}>
            <Image source={this.props.img} style={styles.imageStyle}/>
            </View>
            <View style={styles.nameContainer}>
              <Text style={styles.nameText}>{this.props.name}</Text>
            </View>
            
        </Card>
      )
    }
  }
  const styles = StyleSheet.create(
    {
      mainCantainer:{
        height:130, 
        width:130, 
        marginLeft:20, 
      },
      container:{
        flex:2,paddingLeft:25
      },
      imageStyle:{
        flex:1, 
        height:40, 
        width:80 ,
        resizeMode:'contain',
      },
      nameContainer:{
        flex:1 ,
        paddingLeft:10, 
        paddingTop:10,
      },
      nameText:{
        fontFamily:'Roboto-Black',
      }
    }
  )
  export default Category;