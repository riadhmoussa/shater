import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import LoginScreen from '../views/Login';
import {createStackNavigator} from '@react-navigation/stack';
import AdsScreen from '../views/Ads';
import HomeScreen from '../views/Home';
import PublicationScreen from '../views/Publication';
import RegisterScreen from '../views/Register';

const Navigation = () => {
  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="LoginScreen">
        <Stack.Screen
          name="LoginScreen"
          component={LoginScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
        name="AdsScreen"
        component={AdsScreen}
        options={{headerShown: false}}/>
        <Stack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{headerShown: false}}/>
        <Stack.Screen
        name="PublicationScreen"
        component={PublicationScreen}
        options={{headerShown: false}}/>
        <Stack.Screen
        name="RegisterScreen"
        component={RegisterScreen}
        options={{headerShown: false}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
