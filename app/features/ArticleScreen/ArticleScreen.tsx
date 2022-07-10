import {RouteProp} from '@react-navigation/native';
import React from 'react';
import {Text, View} from 'react-native';
import {Article} from '../../types';
import {parseDateToString} from '../NewsScreen/ArticleListItem';

// @ts-ignore FIX NAV TYPES!
export default ({route}: {route: RouteProp<Article>}) => {
  //   const {title, date, author, imageUrl, description, content} =
  //     route.params as any; // TODO: fix typings

  console.log(route);

  return (
    <View>
      {/* <Text>{title}</Text>
      <Text>{parseDateToString(date)}</Text>
      <Text>{author}</Text>
      <Text>{description}</Text>
      <Text>{content}</Text> */}
    </View>
  );
};
