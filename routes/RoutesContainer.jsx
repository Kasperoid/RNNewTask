import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {AuthSection} from '../components/AuthSection/AuthSection';

export const RoutesContainer = () => {
  const {Navigator, Screen} = createStackNavigator();
  return (
    <NavigationContainer>
      <Navigator initialRouteName={'LogIn'}>
        <Screen
          name="LogIn"
          options={{headerShown: false}}
          component={AuthSection}
        />
      </Navigator>
    </NavigationContainer>
  );
};
