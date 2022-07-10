import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

export default () => {
  return (
    <View style={styles.container}>
      <Text style={styles.titleTxt}>Discover</Text>
      <Text style={styles.descriptionTxt}>Just because we can</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 64,
  },
  titleTxt: {
    fontSize: 36,
    fontWeight: 'bold',
  },
  descriptionTxt: {
    fontSize: 16,
    fontWeight: '100',
  },
});
