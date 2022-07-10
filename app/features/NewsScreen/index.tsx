import React, {useState} from 'react';
import {Text, View} from 'react-native';
import SearchBar from '../../common/SearchBar';

export default () => {
  const [searchInputValue, setSearchInputValue] = useState('');

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
