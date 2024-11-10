/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
//안드로이드에서 보이는 화면입니다.
import React from 'react';
import {SafeAreaView, Text} from 'react-native';
import BottomTabNavigator from './src/Navigation/BottomNavigationBar';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Provider} from 'react-redux';
import store from './src/store/store'; // 위에서 만든 store import

const Stack = createNativeStackNavigator();

function App(): React.JSX.Element {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <BottomTabNavigator />
      </NavigationContainer>
    </Provider>
  );
}

export default App;
