import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import {Article} from '../../types';
import moment from 'moment';
import {useNavigation} from '@react-navigation/native';

// TODO: move out to helpers
export const parseDateToString = (date: Date) => {
  return moment(date).fromNow();
};

const truncDescriptionText = (text: string) => {
  if (text.length < 80) {
    return text;
  } else {
    return `${text.substring(0, 77)}...`;
  }
};

export default ({item}: {item: Article}) => {
  const navigation = useNavigation();

  const onArticleNavigate = () => {
    navigation.navigate(
      //@ts-ignore TODO: navigation typings
      {name: 'Article'},
      {
        title: item.title,
        date: item.publishedAt,
        author: item.author,
        imageUrl: item.urlToImage,
        description: item.description,
        content: item.content,
      },
    );
  };

  return (
    <TouchableOpacity onPress={onArticleNavigate}>
      <View style={{marginVertical: 24}}>
        <View style={{flexDirection: 'row'}}>
          <View>
            <Image
              source={item?.urlToImage}
              resizeMode="contain"
              style={{height: 24, width: 24}}
            />
          </View>
          <View>
            <Text style={{fontSize: 24, fontWeight: 'bold'}}>{item.title}</Text>
            {!!item.publishedAt && (
              <Text>{parseDateToString(item.publishedAt)}</Text>
            )}
            {!!item.description && (
              <Text>{truncDescriptionText(item.description)}</Text>
            )}
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};
