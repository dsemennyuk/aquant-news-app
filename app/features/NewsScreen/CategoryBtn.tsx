import React from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';

export default ({
  onPress,
  text,
  isActive,
}: {
  onPress: (category: string) => void;
  text: string;
  isActive: boolean;
}) => {
  return (
    <TouchableOpacity
      onPress={() => onPress(text)}
      style={[{backgroundColor: isActive ? '#ececec' : 'white'}, styles.btn]}>
      <Text>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  btn: {
    margin: 12,
    padding: 12,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#ececec',
  },
});
