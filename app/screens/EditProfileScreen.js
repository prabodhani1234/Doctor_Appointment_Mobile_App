import React, { useState  } from 'react';  
import { SafeAreaView,Button, Image, StyleSheet, Text, TextInput, View,ScrollView,TouchableOpacity,ImageBackground } from 'react-native';
import Images from '../theme/Images';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Icons from 'react-native-vector-icons/FontAwesome';
import ImagePicker from 'react-native-image-crop-picker';
import BottomSheet from 'reanimated-bottom-sheet';
import Animated from 'react-native-reanimated';

const EditProfileScreen= () =>{
    const [image, setImage] = useState('https://picsum.photos/id/10/200');

    const choosePhotoFromLibrary = () => {
        ImagePicker.openPicker({
          width: 300,
          height: 300,
          cropping: true,
          compressImageQuality: 0.7
        }).then(image => {
          console.log(image);
          setImage(image.path);
          this.bs.current.snapTo(1);
        });
      }
      renderInner = () => (
        
        <View style={styles.panel}>
          <View style={{alignItems: 'center'}}>
            <Text style={styles.panelTitle}>Upload Photo</Text>
            <Text style={styles.panelSubtitle}>Choose Your Profile Picture</Text>
          </View>
          <TouchableOpacity style={styles.panelButton} >
            <Text style={styles.panelButtonTitle}>Take Photo</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.panelButton} onPress={choosePhotoFromLibrary} >
            <Text style={styles.panelButtonTitle}>Choose From Gallery</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.panelButton} onPress={() => this.bs.current.snapTo(1)}>
            <Text style={styles.panelButtonTitle}>Cancel</Text>
          </TouchableOpacity>
        </View>
        
      );
    
      renderHeader = () => (
        <View style={styles.header}>
          <View style={styles.panelHeader}>
            <View style={styles.panelHandle} />
          </View>
        </View>
      );
    
      bs = React.createRef();
      fall = new Animated.Value(1);
        return(
            <SafeAreaView style={styles.mainContainer}>
                <BottomSheet
                    ref={this.bs}
                    snapPoints={[330, 0]}
                    renderContent={this.renderInner}
                    renderHeader={this.renderHeader}
                    initialSnap={1}
                    callbackNode={this.fall}
                    enabledGestureInteraction={true}
                />
                <View style={styles.container}>
                    <View style={{alignItems:'center'}}>
                    <TouchableOpacity activeOpacity={0.8} onPress={() => this.bs.current.snapTo(0)}>
                        <View style={styles.imageContainer}>
                        <ImageBackground source={{uri: image,}} style={styles.imageStyle} imageStyle={{borderRadius: 15}}>
                                <View style={styles.iconContainer}>
                                    <Icon name="camera" size={35} color="#ffffff" style={styles.iconStyles}/>
                                </View>
                        </ImageBackground>
                        </View>
                    </TouchableOpacity>
                <Text style={styles.nameText}>
                    Johne
                </Text>
                </View>
            <View style={styles.inputContainer}>
                <View style={styles.inputItem}>
                <Icons name="user" size={27} style={{paddingRight:9}} />
                <TextInput
                    placeholder="Name"
                    autoCorrect={false}
                    style={styles.inputItemText}
                />
                </View>
                <View style={styles.inputItem}>
                <Icon name="map-marker-alt" size={27} style={{paddingRight:9}} />
                <TextInput
                    placeholder="Address"
                    autoCorrect={false}
                    style={styles.inputItemText}
                />
                </View>
                <View style={styles.inputItem}>
                <Icons name="envelope-open" size={27} style={{paddingRight:2}} />
                <TextInput
                    placeholder="E-mail Address"
                    autoCorrect={false}
                    style={styles.inputItemText}
                />
                </View>
                <View style={styles.inputItem}>
                <Icon name="phone" size={27} style={{paddingRight:1}}/>
                <TextInput
                    placeholder="Phone Number"
                    autoCorrect={false}
                    style={styles.inputItemText}
                />
                </View>
                <View style={styles.inputItem}>
                <Icon name="unlock-alt" size={27} style={{paddingRight:3}} />
                <TextInput
                    placeholder="Password"
                    autoCorrect={false}
                    style={styles.inputItemText}
                />
                </View> 
            </View>
            <View style={{alignItems:'center'}}>
                <TouchableOpacity style={styles.saveButtonContainer} activeOpacity={0.8}>
                    <Text style={styles.saveButtonText}>Save</Text>
                </TouchableOpacity>
            </View>
            </View>
        </SafeAreaView>
        
          
        )
    
}
const styles= StyleSheet.create(
    {
        mainContainer:{
            flex:1, 
            backgroundColor:'#3067F1'
        },
        container:{
            flex:1,
            backgroundColor:'#FCFCFC', 
            paddingLeft:'8%', 
            marginTop:'5%', 
            paddingRight:'8%',
            borderTopLeftRadius:20, 
            borderTopRightRadius:20,
            paddingTop:30,    
            
        },
        imageContainer:{
            height: 100,
            width: 100,
            borderRadius: 15,
            marginTop:10,
            justifyContent: 'center',
            alignItems: 'center',
        },
        imageStyle:{
            height: 150, 
            width: 150,
        },
        nameText:{
            marginTop: 30, 
            fontSize: 18, 
            fontWeight: 'bold',
        },
        iconContainer:{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
        },
        iconStyles:{
            opacity:0.7,
        },
        inputContainer:{
            marginTop:'6%',
        },
        
        inputItem: {
            flexDirection: 'row',
            paddingVertical: 8,
            borderBottomWidth: 1,
            borderBottomColor: '#f2f2f2',
           
        },
        inputItemText: {
            color: '#777777',
            marginLeft: 20,
            fontWeight: '600',
            fontSize: 16,
            lineHeight: 26,
        },
        saveButtonContainer:{
            backgroundColor:'#3067F1',
            marginTop:20,
            width:'75%', 
            height:45,
            borderRadius:40,
            alignItems:'center',
            justifyContent:'center'
        },
        saveButtonText:{
            color:'#ffffff', 
            fontFamily:'Roboto-Bold', 
            fontSize:21, 
        },
        panel: {
            padding: 20,
            backgroundColor: '#FFFFFF',
            paddingTop: 20,
        },
        panelTitle: {
            fontSize: 27,
            height: 35,
            color:'black'
        },
        panelSubtitle: {
            fontSize: 14,
            height: 30,
            marginBottom: 10,
        },
        panelButton: {
            padding: 13,
            borderRadius: 10,
            backgroundColor: '#3067F1',
            alignItems: 'center',
            marginVertical: 7,
        },
        panelButtonTitle: {
            fontSize: 17,
            fontWeight: 'bold',
            color: 'white',
        },
        panelHeader: {
            alignItems: 'center',
        },
        panelHandle: {
            width: 40,
            height: 8,
            borderRadius: 4,
            marginBottom: 10,
        },
        header: {
            backgroundColor: '#FFFFFF',
            shadowColor: '#333333',
            shadowOffset: {width: -1, height: -3},
            shadowRadius: 2,
            shadowOpacity: 0.4,
            paddingTop: 20,
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20,
          },
    }
)
export default EditProfileScreen;