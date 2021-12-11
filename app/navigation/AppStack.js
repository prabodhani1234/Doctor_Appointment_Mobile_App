import React, {Component} from 'react';
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import Home from '../screens/HomeScreen';
import Appointment from '../screens/AppointmentScreens/AppointmentScreen';
import Profile from '../screens/ProfileScreen';
import Icon from 'react-native-vector-icons/FontAwesome';
import Upcoming from '../screens/AppointmentScreens/UpcomingAppointment';
import Past from '../screens/AppointmentScreens/PastAppointment';
import AllDoctors from '../screens/AllDoctors';
import DoctorProfile from '../screens/DoctorProfileScreen';
import EditProfile from '../screens/EditProfileScreen';
import AppointmentBookScreen from '../screens/AppointmentBookingScreen';

const Stack=createStackNavigator();
const BottomTab = createBottomTabNavigator();
const AppointmentTopTab=createMaterialTopTabNavigator();
const ApointmentStack=createStackNavigator();
const HomeStack=createStackNavigator();
const ProfileStack=createStackNavigator();



const ProfileStackScreen=()=>(
  <ProfileStack.Navigator>
    <ProfileStack.Screen name='Profile' component={Profile}
    options={{
      title: 'My Profile',
      headerStyle: {
        backgroundColor: '#3067F1',
      },
      
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
        fontSize:26,
        textAlign:'center'
        
      },
    }}
    />
    <ProfileStack.Screen name='EditProfile' component={EditProfile}/>
  </ProfileStack.Navigator>
)

const HomeStackScreen=()=>(
    <HomeStack.Navigator>
        <HomeStack.Screen name ='Home' component={Home}
          options={{
            title: 'Find Your Specialist',
            headerStyle: {
              backgroundColor: '#3067F1',
            },
            
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
              fontSize:26,
              paddingTop:10,
              marginLeft:'5%'
              
            },
          }}
        />
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
        <HomeStack.Screen name="DoctorProfile" component={DoctorProfile}
        options={{
          title: 'Doctor Profile',
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
      <HomeStack.Screen name="AppointmentBookScreen" component={AppointmentBookScreen}
        options={{
          title: 'Appointment',
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


class index extends Component{
    render(){
        return(
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
            <BottomTab.Screen name ="Profile" component={ProfileStackScreen}/>
        </BottomTab.Navigator>
            
        )
    }
}
export default index;