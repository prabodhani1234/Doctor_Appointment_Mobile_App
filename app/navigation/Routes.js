import React, {useContext, useState, useEffect} from 'react';
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from '@react-navigation/native';
import AppStack from './AppStack';
import AuthStack from './AuthStack';

const Routes = () => {
    return (
        <NavigationContainer>
          <AuthStack /> 
        </NavigationContainer>
      );

}
export default Routes;