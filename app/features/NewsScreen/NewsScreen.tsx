import React, {useEffect, useState} from 'react';
import {FlatList, StyleSheet, View} from 'react-native';
import SearchBar from '../../common/SearchBar';
import {categories} from '../../const';
import {getHeadlines} from '../../services/Api';
import {Article} from '../../types';
import ArticleListItem from './ArticleListItem';
import CategoryBtn from './CategoryBtn';
import Header from './Header';

export default () => {
  const [searchInputValue, setSearchInputValue] = useState('');
  const [articlesData, setArticlesData] = useState<Article[] | undefined>(
    undefined,
  );

  const getArticlesAndUpdateState = async (params?: {
    category?: string;
    q?: string;
  }) => {
    const data = await getHeadlines({...params});
    setArticlesData(data);
  };

  const onCategoryFilterPress = async (category: string) => {
    await getArticlesAndUpdateState({category: category});
  };

  useEffect(() => {
    (async () => {
      getArticlesAndUpdateState();
    })();
  }, []);

  useEffect(() => {
    if (searchInputValue.length > 3) {
      getArticlesAndUpdateState({q: searchInputValue});
    }
  }, [searchInputValue]);

  const renderItem = ({item, index}: {item: Article; index: number}) => (
    <ArticleListItem item={item} key={index} />
  );

  const renderCategpories = () => {
    return categories.map((cat, index) => (
      <CategoryBtn text={cat} key={index} onPress={onCategoryFilterPress} />
    ));
  };

  return (
    <View style={styles.container}>
      <Header />
      <View>
        <SearchBar value={searchInputValue} setValue={setSearchInputValue} />
        <View style={styles.categoryContainer}>{renderCategpories()}</View>
      </View>
      {articlesData && (
        <View style={styles.listContaier}>
          <FlatList data={articlesData} renderItem={renderItem} />
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 24,
  },
  categoryContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  listContaier: {marginTop: 24},
});
