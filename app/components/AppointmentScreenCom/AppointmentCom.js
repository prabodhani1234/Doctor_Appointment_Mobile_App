import React, {Component} from 'react';
import {
  Text,
  View,
  Image,
  TouchableOpacity
} from 'react-native';
import {Card} from 'react-native-shadow-cards';


class AppointmentCom extends Component{


  render(){
    return(
      <Card style={{ width:345, height:132,marginRight:"5%", elevation:10,marginTop:10}}>
          <View style={{marginLeft:10}}>
              <Text style={{color:'black', fontSize: 18,fontFamily:'Roboto-Bold',marginBottom:10,marginTop:5}}>
              {this.props.name}
              </Text>
              <Text style={{color:'black',fontFamily:'Roboto-Bold'}}>{this.props.catogory}</Text>
              <Text style={{fontFamily:'Roboto-Bold'}}>{this.props.date}</Text>
              
              <TouchableOpacity style={{paddingTop:10}}>
                <Text style={{color:'blue',textDecorationLine:'underline'}}>{this.props.button}</Text>
              </TouchableOpacity>
              
          </View>
          <View>
            <View>
                <Image source={this.props.imageUri} style={{ height:80, width:80 ,resizeMode:'contain', position:'absolute', left:220, bottom:28}}/>
            </View>
            <TouchableOpacity style={{backgroundColor:'#3067F1',marginLeft:"55%", marginRight:10, position:'absolute', bottom:0.1, padding:3,borderRadius:5, paddingLeft:10, paddingRight:10}}>
                <Text style={{textAlign:'center', color:'#ffffff'}}>{this.props.mainButton}</Text>
            </TouchableOpacity>
          </View>
      </Card>
    )
  }
}
export default AppointmentCom;

const styles=StyleSheet.create({
    mainConataner:{
        flex:1,
        backgroundColor:'#FCFCFC',
    },
    
    listcontainer: {
        width: '100%',
        padding: 16,
        paddingTop: 5,
        height:'100%'
        
      },
})