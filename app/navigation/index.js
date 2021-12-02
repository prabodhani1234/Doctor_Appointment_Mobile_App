import React, {Component} from 'react';
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import Login from '../screens/LoginScreen';
import SignUp from '../screens/SignupScreen';
import ForgotPassword from '../screens/ForgotPasswordScreen';
import Home from '../screens/HomeScreen';
import Appointment from '../screens/AppointmentScreens/AppointmentScreen';
import Profile from '../screens/ProfileScreen';
import Icon from 'react-native-vector-icons/FontAwesome';
import Upcoming from '../screens/AppointmentScreens/UpcomingAppointment';
import Past from '../screens/AppointmentScreens/PastAppointment';
import AllDoctors from '../screens/AllDoctors';


const Stack=createStackNavigator();
const BottomTab = createBottomTabNavigator();
const AppointmentTopTab=createMaterialTopTabNavigator();
const ApointmentStack=createStackNavigator();
const HomeStack=createStackNavigator();

const HomeStackScreen=()=>(
    <HomeStack.Navigator initialRouteName='Home' headerMode='none'>
        <HomeStack.Screen name ='Home' component={Home}/>
        <HomeStack.Screen name ="AllDoctors" component={AllDoctors}
            options={{
            title: 'Available Doctors',
            headerStyle: {
                backgroundColor: '#3067F1',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                fontWeight: 'bold',
                fontSize:26,
            }
            }}
        
        />
    </HomeStack.Navigator>
  )


const AppointemnetStackScreen=()=>(
    <ApointmentStack.Navigator>
      <ApointmentStack.Screen name ="Appointment" component={AppointmentTopTabScreen}
          options={{
            title: 'Appointment',
            headerStyle: {
              backgroundColor: '#3067F1',
  
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
              fontSize:26,
              textAlign:'center',
              paddingBottom:40,
              paddingTop:40,
            }
          }}
      
      />
    </ApointmentStack.Navigator>
  )

const AppointmentTopTabScreen=()=>(

    <AppointmentTopTab.Navigator
    screenOptions={({route}) => ({
      tabBarIcon: ({focused}) => {
        let Name;
  
        if (route.name === 'Upcoming') {
          Name = focused ? 'Upcoming' : 'Upcoming';
        } else if (route.name === 'Past') {
          Name = focused ? 'Past' : 'Past';
        }
        
        },
      })}
      tabBarOptions={{
        activeTintColor: '#3067F1',
        inactiveTintColor: 'gray',
      }}
    >
      
      <AppointmentTopTab.Screen name='Upcoming' component={Upcoming}/>
      <AppointmentTopTab.Screen name='Past' component={Past}/>
    </AppointmentTopTab.Navigator>
  )

const bottomTabScreens=()=>(
    <BottomTab.Navigator
        screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
        let iconName;
          
        if (route.name === 'Home') {
            iconName = focused ? 'home' : 'home';
        } else if (route.name === 'Profile') {
            iconName = focused ? 'user' : 'user';
        }else if (route.name === 'Appointment') {
            iconName = focused ? 'calendar' : 'calendar';
        }
          
                   
        return <Icon name={iconName} size={size} color={color} />;
        },

        })}
        tabBarOptions={{
            activeTintColor: '#3067F1',
            inactiveTintColor: 'gray',
        }}
        >
            <BottomTab.Screen name ="Home" component={HomeStackScreen}/>
            <BottomTab.Screen name ="Appointment" component={AppointemnetStackScreen}/>
            <BottomTab.Screen name ="Profile" component={Profile}/>
        </BottomTab.Navigator>
  )

class index extends Component{
    render(){
        return(
            <NavigationContainer> 
               <Stack.Navigator headerMode={{}}>
                <Stack.Screen name ="Login" component={Login}/>
                 <Stack.Screen name='SignUp' component={SignUp}/>
                 <Stack.Screen name='ForgotPassword' component={ForgotPassword}/>
                 <Stack.Screen name ="Home" component={bottomTabScreens}/>
               </Stack.Navigator>
            </NavigationContainer>
            
        )
    }
}
export default index;