import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {Home} from '../components/home/Home';

export const RoutesContainer = () => {
  const {Navigator, Screen} = createStackNavigator();
  return (
    <NavigationContainer>
      <Navigator initialRouteName={'Home'}>
        <Screen name="Home" options={{headerShown: false}} component={Home} />
      </Navigator>
    </NavigationContainer>
  );
};
