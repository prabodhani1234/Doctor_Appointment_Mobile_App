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
      <Card style={{ width:300, height:210,marginLeft:20,marginTop:10,position:'absolute',left:'6%', top:-100}}>
          <View>
            <Image source={this.props.imageUri} style={{ height:120, width:120 ,resizeMode:'contain',marginLeft:20, marginTop:20}}/>
           
          </View>
          
      </Card>
    )
  }
}
export default DocProp;