import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React, {useCallback} from 'react';
import {LogInPage} from './LogInPage';
import {NewsPage} from './newspage/NewsPage';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {Text} from 'react-native';
import {useFocusEffect} from '@react-navigation/native';
import {useDispatch} from 'react-redux';
import {getConfigFile} from '../../redux/slices/configSlice';

export const AuthSection = () => {
  const renderTabIcon = (name, color, size) => {
    return <AntDesign name={name} color={color} size={size} />;
  };
  const renderTabText = (title, color) => {
    return (
      <Text
        style={[
          {
            fontWeight: 600,
            color: color,
          },
        ]}>
        {title}
      </Text>
    );
  };
  const TabArr = [
    {
      title: 'Вход',
      name: 'LogInPage',
      component: LogInPage,
      iconName: 'login',
      iconSize: 22,
    },
    {
      title: 'Новости',
      name: 'NewsPage',
      component: NewsPage,
      iconName: 'exception1',
      iconSize: 22,
    },
  ];

  const Tab = createBottomTabNavigator();
  const dispatcher = useDispatch();

  useFocusEffect(
    useCallback(() => {
      dispatcher(
        getConfigFile(['settingsFrontSys.json', 'settingsFrontUsr.json']),
      );
    }, [dispatcher]),
  );
  return (
    <Tab.Navigator initialRouteName="LogInPage">
      {TabArr.map((item, index) => (
        <Tab.Screen
          key={index}
          options={{
            headerShown: false,
            title: item.title,
            tabBarIcon: ({focused}) =>
              renderTabIcon(
                item.iconName,
                focused ? '#41B3A3' : '#000',
                item.iconSize,
              ),
            tabBarLabel: ({focused}) =>
              renderTabText(item.title, focused ? '#41B3A3' : '#000'),
          }}
          name={item.name}
          component={item.component}
        />
      ))}
    </Tab.Navigator>
  );
};
