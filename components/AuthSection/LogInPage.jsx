import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';
import {styles} from '../../styles/styles';

export const LogInPage = () => {
  return (
    <View
      style={[
        styles.container,
        {
          justifyContent: 'center',
          alignItems: 'center',
        },
      ]}>
      <View
        style={[
          styles.cardConatiner,
          {
            width: 250,
            height: 250,
            padding: 15,
          },
        ]}>
        <Text
          style={[
            styles.h1,
            {
              color: 'black',
              textAlign: 'center',
            },
          ]}>
          Вход
        </Text>
        <View style={{justifyContent: 'space-between', flex: 1}}>
          <View style={{gap: 10}}>
            <TextInput
              style={styles.inputContainer}
              placeholder="Логин"
              keyboardType="default"
            />
            <TextInput
              style={styles.inputContainer}
              placeholder="Пароль"
              keyboardType="visible-password"
            />
          </View>
          <TouchableOpacity activeOpacity={0.6} style={styles.primaryButton}>
            <Text
              style={[
                styles.textButton,
                {
                  textAlign: 'center',
                  color: '#FFF',
                },
              ]}>
              Войти
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};
