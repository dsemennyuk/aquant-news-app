import React from 'react';
import {View, Text, Image, TouchableOpacity, Dimensions} from 'react-native';
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
      'Article',
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

  const renderImage = () => {
    if (item.urlToImage) {
      return (
        <Image
          source={{uri: item.urlToImage}}
          resizeMode="contain"
          style={{height: 60, width: 100}}
        />
      );
    }

    return (
      <View style={{height: 60, width: 100, backgroundColor: '#ececec'}} />
    );
  };

  return (
    <TouchableOpacity onPress={onArticleNavigate}>
      <View style={{marginVertical: 24}}>
        <View style={{flexDirection: 'row'}}>
          {renderImage()}
          <View style={{flex: 1, marginLeft: 8}}>
            <Text
              textBreakStrategy="simple"
              style={{fontSize: 16, fontWeight: 'bold', textAlign: 'left'}}>
              {item.title}
            </Text>
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
