import React, {Component} from 'react';
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from '@react-navigation/native';
import Login from '../screens/LoginScreen';
import SignUp from '../screens/SignupScreen';
import ForgotPassword from '../screens/ForgotPasswordScreen';

const Stack=createStackNavigator();


class index extends Component{
    render(){
        return(
            <NavigationContainer> 
               <Stack.Navigator headerMode={{}}>
                <Stack.Screen name ="Login" component={Login}/>
                 <Stack.Screen name='SignUp' component={SignUp}/>
                 <Stack.Screen name='ForgotPassword' component={ForgotPassword}/>
               </Stack.Navigator>
            </NavigationContainer>
            
        )
    }
}
export default index;