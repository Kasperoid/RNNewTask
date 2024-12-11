import React from 'react';
import {Text, useWindowDimensions, View} from 'react-native';
import {styles} from '../../../styles/styles';
import RenderHTML from 'react-native-render-html';

export const NewCard = ({newTitle, newDesc}) => {
  const {width} = useWindowDimensions();
  return (
    <View
      style={[
        styles.cardConatiner,
        {
          padding: 12,
        },
      ]}>
      <Text
        style={[
          styles.h2,
          {
            color: 'black',
            textAlign: 'center',
            borderBottomWidth: 1,
            borderBottomColor: '#E27D60',
            paddingBottom: 8,
          },
        ]}>
        {newTitle}
      </Text>
      <RenderHTML source={{html: newDesc}} contentWidth={width} />
    </View>
  );
};
