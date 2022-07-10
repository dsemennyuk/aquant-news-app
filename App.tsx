/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {SafeAreaView} from 'react-native';
import NewsScreen from './app/features/NewsScreen/NewsScreen';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ArticleScreen from './app/features/ArticleScreen/ArticleScreen';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            options={{
              headerShown: false,
              contentStyle: {backgroundColor: 'white'},
            }}
            name="Home"
            component={NewsScreen}
          />
          <Stack.Screen
            options={{
              contentStyle: {backgroundColor: 'white'},
            }}
            name="Article"
            component={ArticleScreen}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
};

export default App;
