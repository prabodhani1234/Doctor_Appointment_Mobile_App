import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  SectionList,
  SafeAreaView,
  Image,
  FlatList,
  ScrollView,
  TouchableOpacity
} from 'react-native';
import {Card} from 'react-native-shadow-cards';
import Icon from 'react-native-vector-icons/FontAwesome';
import Images from '../../theme/Images'


class DocProp extends Component{

  render(){
    return(
      <Card style={styles.mainContainer}>
          <View>
            <Image source={this.props.imageUri} style={styles.imageContainer}/>
           
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
            height:"27%",
            position:'absolute',
            left:'8%', 
            top:'-12%'
        },
        imageContainer:{
            height:120, 
            width:120 ,
            resizeMode:'contain',
            marginLeft:'8%', 
            marginTop:'8%'
        }
    }
)
export default DocProp;