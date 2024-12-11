import {useFocusEffect} from '@react-navigation/native';
import React, {useCallback} from 'react';
import {ScrollView, Text, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {getNews} from '../../../redux/slices/newsSlice';
import {styles} from '../../../styles/styles';
import {NewCard} from './NewCard';

export const NewsPage = () => {
  const dispatcher = useDispatch();
  const {news, isLoading} = useSelector(store => store.newsSlice);

  useFocusEffect(
    useCallback(() => {
      dispatcher(getNews());
    }, [dispatcher]),
  );

  return (
    <View style={styles.container}>
      <ScrollView>
        <Text
          style={[
            styles.h1,
            {
              color: 'black',
              textAlign: 'center',
            },
          ]}>
          Новости
        </Text>
        {isLoading ? (
          <Text>Загрузка...</Text>
        ) : (
          <View style={{gap: 15}}>
            {news.map((item, index) => (
              <NewCard
                key={index}
                newTitle={item.title}
                newDesc={item.description}
              />
            ))}
          </View>
        )}
      </ScrollView>
    </View>
  );
};
