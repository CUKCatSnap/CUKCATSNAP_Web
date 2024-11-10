// BottomTabNavigator.tsx
import React from 'react';
import {useSelector} from 'react-redux'; // 로그인 상태 가져오기
import Home from '../pages/Home/Home';
import Chat from '../pages/Chat/Chat';
import Search from '../pages/Search/SearchPage/SearchPage';
import Mypage from '../pages/Mypage/Mypage';
import MyCalendar from '../pages/MyCalendar/MyCalendar';
import Alarm from '../pages/Alarm/Alarm';
import LoginNewPageOne from '../pages/Login/LoginNewPageOne/LoginNewPageOne';
import LoginNewPageTwo from '../pages/Login/LoginNewPageTwo/LoginNewPageTwo';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Icon from 'react-native-vector-icons/Ionicons';
import Subscribe from '../pages/Subscribe/Subscribe';
import Login from '../pages/Login/Login';
import SearchPage from '../pages/Search/SearchPage/SearchPage';
import SearchResultPage from '../pages/Search/SearchResultPage/SearchResultPage';
import AuthorProfile from '../pages/AuthorProfile/AuthorProfile';
import Map from '../pages/Map/Map';
import ReplyPage from '../pages/Reply/ReplyPage';

export type RootStackParam = {
  Home: undefined;
  Test: undefined;
};
const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const BottomTabNavigator = () => {
  // 로그인 상태 가져오기
  const isAuthenticated = useSelector(state => state.auth.isAuthenticated);
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
        component={Chat}
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
        component={HomeStack}
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
        component={isAuthenticated ? Mypage : AuthStack}
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

//홈 창에서 이동할 수 있는 곳
const HomeStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="HomePage"
        component={Home}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Alarm"
        component={Alarm}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Login"
        component={Login}
        options={{headerShown: false}} // 로그인 화면이 처음에 나타나는 경우
      />
      <Stack.Screen name="Map" component={Map} options={{headerShown: false}} />
      <Stack.Screen
        name="Subscribe"
        component={Subscribe}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="MyCalendar"
        component={MyCalendar}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

//서치 창에서 이동할 수 있는 곳
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
      <Stack.Screen
        name="ReplyPage"
        component={ReplyPage}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

// 마이페이지 -> 로그인 창으로
const AuthStack = () => {
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

//피드 컴포넌트
const FeedStack = () => {
  return (
    <Stack.Screen
      name="Reply"
      component={Reply}
      options={{headerShown: false}}
    />
  );
};
export default BottomTabNavigator;
