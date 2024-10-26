// BottomTabNavigator.tsx
import React from 'react';

import Home from '../../pages/Home/Home';
import Chat from '../../pages/Chat/Chat';
import Mypage from '../../pages/Mypage/Mypage';
import MyCalendar from '../../pages/MyCalendar/MyCalendar';
import Alarm from '../../pages/Alarm/Alarm';
import LoginNewPageOne from '../../pages/Login/LoginNewPageOne/LoginNewPageOne';
import LoginNewPageTwo from '../../pages/Login/LoginNewPageTwo/LoginNewPageTwo';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Icon from 'react-native-vector-icons/Ionicons';
import Subscribe from '../../pages/Subscribe/Subscribe';
import Login from '../../pages/Login/Login';
import SearchPage from '../../pages/Search/SearchPage/SearchPage';
import SearchResultPage from '../../pages/Search/SearchResultPage/SearchResultPage';
import AuthorProfile from '../../pages/AuthorProfile/AuthorProfile';

// 네비게이션 타입 정의
type RootStackParamList = {
  LoginNewPageOne: undefined; // 첫 번째 페이지는 파라미터가 없음
  LoginNewPageTwo: {
    identifier: string;
    password: string;
    nickname: string;
  }; // 두 번째 페이지는 파라미터가 있음
};

// Navigator 생성

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home" // 기본으로 보여줄 화면 설정
      screenOptions={{
        tabBarStyle: {
          height: 70,
        },
        headerShown: false, // 상단 바를 없애는 옵션
      }}>
      <Tab.Screen
        name="Chat"
        component={Subscribe}
        options={{
          tabBarIcon: ({focused}) => (
            <Icon
              name={'chatbubbles-outline'}
              size={30}
              color={focused ? '#242da1' : 'black'}
            />
          ),
          tabBarLabel: () => null,
        }}
      />
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({focused}) => (
            <Icon
              name={'home'}
              size={30}
              color={focused ? '#242da1' : 'black'}
            />
          ),
          tabBarLabel: () => null,
        }}
      />
      <Tab.Screen
        name="Search"
        component={SearchStack}
        options={{
          tabBarIcon: ({focused}) => (
            <Icon
              name={'search'}
              size={30}
              color={focused ? '#242da1' : 'black'}
            />
          ),
          tabBarLabel: () => null,
        }}
      />
      <Tab.Screen
        name="Mypage"
        component={MypageStack}
        options={{
          tabBarIcon: ({focused}) => (
            <Icon
              name={'person-sharp'}
              size={30}
              color={focused ? '#242da1' : 'black'}
            />
          ),
          tabBarLabel: () => null,
        }}
      />
    </Tab.Navigator>
  );
};

//검색창 스택
const SearchStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="SearchPage"
        component={SearchPage}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="SearchResultPage"
        component={SearchResultPage}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="AuthorProfile"
        component={AuthorProfile}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

//로그인창 스택
const MypageStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Login"
        component={Login}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="LoginNewPageOne"
        component={LoginNewPageOne}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="LoginNewPageTwo"
        component={LoginNewPageTwo}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};
export default BottomTabNavigator;
