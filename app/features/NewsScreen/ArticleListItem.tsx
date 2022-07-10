import React from 'react';
import {View, Text, Image} from 'react-native';
import {Article} from '../../types';
import moment from 'moment';

const parseDateToString = (date: Date) => {
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
  return (
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
  );
};
