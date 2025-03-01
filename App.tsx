/**
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
import {createStackNavigator} from '@react-navigation/stack';

const linking = {
  prefixes: ['catsnap://'], // URL 스키마 설정
  config: {
    screens: {
      Home: 'home', // catsnap://home -> Home 화면으로 이동
    },
  },
};

function App(): React.JSX.Element {
  const [isSplashVisible, setIsSplashVisible] = useState(true);

  //스플래시 화면 시간 조절
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsSplashVisible(false); // 1.5초 후 스플래시 화면 숨기기
    }, 1500); // 1.5초 동안 스플래시 화면 유지

    return () => clearTimeout(timer);
  }, []);
  return (
    <Provider store={store}>
      <NavigationContainer linking={linking}>
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
