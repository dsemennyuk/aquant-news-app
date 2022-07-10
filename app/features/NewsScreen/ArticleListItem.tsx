import React from 'react';
import {View, Text, Image, TouchableOpacity, StyleSheet} from 'react-native';
import {Article} from '../../types';
import {useNavigation} from '@react-navigation/native';
import {parseDateToString} from '../../helpers/momentHelpers';
import {truncDescriptionText} from '../../helpers/textHelpers';

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
          style={styles.img}
        />
      );
    }

    return <View style={styles.mockImg} />;
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

const styles = StyleSheet.create({
  mockImg: {
    height: 60,
    width: 100,
    backgroundColor: '#ececec',
  },
  img: {
    height: 60,
    width: 100,
  },
});
