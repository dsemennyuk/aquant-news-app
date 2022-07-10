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

  const [searchParams, setSearchParams] = useState<{
    q?: string;
    category?: string;
  } | null>(null);

  const getArticlesAndUpdateState = async () => {
    const data = await getHeadlines({...searchParams});
    setArticlesData(data);
  };

  const onCategoryFilterPress = async (category: string) => {
    setSearchParams({...searchParams, category: category});
  };

  useEffect(() => {
    getArticlesAndUpdateState();
  }, []);

  useEffect(() => {
    getArticlesAndUpdateState();
  }, [searchParams]);

  useEffect(() => {
    if (searchInputValue.length > 3) {
      setSearchParams({...searchParams, q: searchInputValue});
    }
  }, [searchInputValue]);

  const renderItem = ({item, index}: {item: Article; index: number}) => (
    <ArticleListItem item={item} key={index} />
  );

  const renderCategpories = () => {
    return categories.map((category, index) => (
      <CategoryBtn
        text={category}
        key={index}
        onPress={onCategoryFilterPress}
      />
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
        <FlatList
          style={{marginBottom: 400}}
          data={articlesData}
          renderItem={renderItem}
        />
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
  listContaier: {
    marginTop: 24,
    flex: 1,
  },
});
