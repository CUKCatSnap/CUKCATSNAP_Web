/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
//안드로이드에서 보이는 화면입니다.
import React, {useState, useEffect} from 'react';
import {SafeAreaView, Text} from 'react-native';
import BottomTabNavigator from './src/Navigation/BottomNavigationBar';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Provider} from 'react-redux';
import store from './src/store/store'; // 위에서 만든 store import
import SplashScreenPage from './src/pages/SplashScreen/SplashScreen';
const Stack = createNativeStackNavigator();

function App(): React.JSX.Element {
  const [isSplashVisible, setIsSplashVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsSplashVisible(false); // 3초 후 스플래시 화면 숨기기
    }, 3000); // 3초 동안 스플래시 화면 유지

    return () => clearTimeout(timer);
  }, []);
  return (
    <Provider store={store}>
      <NavigationContainer>
        {/* 스플래시 화면이 표시되는 동안 */}
        {isSplashVisible ? (
          <SplashScreenPage /> // 스플래시 화면 컴포넌트
        ) : (
          <BottomTabNavigator /> // 스플래시 화면 후 BottomTabNavigator로 이동
        )}
      </NavigationContainer>
    </Provider>
  );
}

export default App;
