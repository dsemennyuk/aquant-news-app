import React from 'react';
import {StyleSheet, TextInput, View} from 'react-native';

interface Props {
  value: string;
  setValue: (value: string) => void;
}

const SearchBar = ({value, setValue}: Props) => {
  return (
    <View style={styles.container}>
      <View style={styles.searchBar}>
        {/* search Icon */}
        <TextInput
          style={styles.input}
          placeholder="Search"
          value={value}
          onChangeText={setValue}
        />
      </View>
    </View>
  );
};
export default SearchBar;

const styles = StyleSheet.create({
  container: {
    margin: 15,
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexDirection: 'row',
    width: '90%',
  },
  searchBar: {
    padding: 10,
    flexDirection: 'row',
    width: '95%',
    backgroundColor: '#d9dbda',
    borderRadius: 15,
    alignItems: 'center',
  },
  input: {
    fontSize: 20,
    marginLeft: 10,
    width: '90%',
  },
});
