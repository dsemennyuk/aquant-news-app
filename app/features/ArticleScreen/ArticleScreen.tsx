import {RouteProp} from '@react-navigation/native';
import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {parseDateToString} from '../../helpers/momentHelpers';
import {Article} from '../../types';

// @ts-ignore FIX NAV TYPES!
export default ({route}: {route: RouteProp<Article>}) => {
  const {title, date, author, imageUrl, description, content} =
    route.params as any; // TODO: fix typings

  return (
    <>
      <View>
        <Image style={styles.img} source={{uri: imageUrl}} />
        <View style={styles.blur} />
        <Text style={styles.title}>{title}</Text>
      </View>
      <View style={{padding: 24}}>
        <Text>{parseDateToString(date)}</Text>
        <Text style={{marginVertical: 8}}>{author}</Text>
        <Text style={styles.text}>{description}</Text>
        <Text style={styles.text}>{content}</Text>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  blur: {
    backgroundColor: 'white',
    opacity: 0.7,
    position: 'absolute',
    height: 250,
    width: '100%',
  },
  img: {
    height: 250,
    width: '100%',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    position: 'absolute',
    padding: 24,
  },
  text: {
    fontSize: 16,
    fontWeight: 'normal',
  },
});
