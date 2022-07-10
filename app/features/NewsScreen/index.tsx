import React, {useEffect, useState} from 'react';
import {Text, View} from 'react-native';
import SearchBar from '../../common/SearchBar';
import {getArticles} from '../../services/Api';
import {Source} from '../../types';

export default () => {
  const [searchInputValue, setSearchInputValue] = useState('');
  const [articlesData, setArticlesData] = useState<Source[] | undefined>(
    undefined,
  );

  useEffect(() => {
    (async () => {
      const data = await getArticles();
      console.log('from coomponent ===>', data);
    })();
  }, []);

  return (
    <View style={{padding: 24}}>
      <View style={{marginTop: 64}}>
        <Text style={{fontSize: 36, fontWeight: 'bold'}}>Discover</Text>
        <Text style={{fontSize: 16, fontWeight: '100'}}>
          Just because we can
        </Text>
      </View>
      <View>
        <SearchBar value={searchInputValue} setValue={setSearchInputValue} />
      </View>
    </View>
  );
};
