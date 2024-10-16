/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
//안드로이드에서 보이는 화면입니다.
import React from 'react';
import {SafeAreaView, Text} from 'react-native';
import BottomTabNavigator from './src/components/Navigation/BottomNavigationBar';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

function App(): React.JSX.Element {
  return (
    <NavigationContainer>
      <BottomTabNavigator />
    </NavigationContainer>
  );
}

export default App;
