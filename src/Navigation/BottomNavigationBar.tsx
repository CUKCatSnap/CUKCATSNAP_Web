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
import AuthorProfileDetailPage from '../pages/ProfileDetail/AuthorProfileDetailPage/AuthorProfileDetailPage';
import Map from '../pages/Map/Map';
import ReplyPage from '../pages/Reply/ReplyPage';
import MyReservePage from '../pages/MyReserve/MyReservePage';
import RecentReservePage from '../pages/RecentReserve/RecentReservePage';
import ReserveProgramPage from '../pages/ReserveProgramPage/ReserveProgramPage';
import CreateProgramPage from '../pages/CreateProgram/CreateProgramPage';
import AuthorReserveSettingPage from '../pages/Settings/AuthorReserveSetting/AuthorReserveSettingPage';
import AuthorReserveAlarmPage from '../pages/Settings/AuthorReserveAlarm/AuthorReserveAlarmPage';
import AuthorReservePlacePage from '../pages/Settings/AuthorReservePlace/AuthorReservePlacePage';
import Settings from '../pages/Settings/Settings';
import AuthorTimeFormatPage from '../pages/Settings/AuthorTimeFormatPage/AuthorTimeFormat';
import CreateAuthorTimeFormatPage from '../pages/Settings/CreateTimeFormat/CreateAuthorTimeFormat';
import AuthorWeekFormatPage from '../pages/Settings/AuthorWeekFormat/AuthorWeekFormatPage';
import UserReservePage from '../pages/Reserve/UserReservePage';
import CreateReviewPage from '../pages/Review/CreateReviewPage/CreateReviewPage';
import ReplyAgainPage from '../pages/Reply/ReplyAgainPage/ReplyAgainPage';
import ReserveState from '../pages/ReserveState/ReserveState';
import NaverLoginWebView from '../pages/Login/NaverLoginWebView/NaverLoginWebView';
import CreateSubscribePlacePage from '../pages/Subscribe/CreateSubscribePlacePage/CreateSubscribePlacePage';

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
        name="MypageStack"
        component={isAuthenticated ? MypageStack : AuthStack}
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
        name="MyReserve"
        component={MyReservePage}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="ReserveState"
        component={ReserveState}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="CreateReviewPage"
        component={CreateReviewPage}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Login"
        component={Login}
        options={{headerShown: false}} // 로그인 화면이 처음에 나타나는 경우
      />
      <Stack.Screen name="Map" component={Map} options={{headerShown: false}} />
      <Stack.Screen
        name="SubscribeHome"
        component={SubscribeStack}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Calendar"
        component={CalendarStack}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="RecentReserve"
        component={RecentReservePage}
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
        component={AuthorProfileDetailPage}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="ReserveProgramPage"
        component={ReserveProgramPage}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="UserReservePage"
        component={UserReservePage}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="CreateReviewPage"
        component={CreateReviewPage}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="ReplyPage"
        component={ReplyPage}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="ReplyAgainPage"
        component={ReplyAgainPage}
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
        name="NaverLoginWebView"
        component={NaverLoginWebView}
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

// 마이페이지 -> 작가일 경우 프로그램 목록 조회
const MypageStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Mypage"
        component={Mypage}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="ReserveProgramPage"
        component={ReserveProgramPage}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="CreateProgramPage"
        component={CreateProgramPage}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Settings"
        component={SettingStack}
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
      component={ReplyPage}
      options={{headerShown: false}}
    />
  );
};

//구독 페이지
const SubscribeStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Subscribe"
        component={Subscribe}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="CreateSubscribePlacePage"
        component={CreateSubscribePlacePage}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

//캘린더 페이지
const CalendarStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="MyCalendar"
        component={MyCalendar}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="ReserveState"
        component={ReserveState}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="CreateReviewPage"
        component={CreateReviewPage}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

//설정 페이지
const SettingStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="SettingHome"
        component={Settings}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="AuthorReserveSettingPage"
        component={AuthorReserveSettingPage}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="AuthorReserveAlarmPage"
        component={AuthorReserveAlarmPage}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="AuthorReservePlacePage"
        component={AuthorReservePlacePage}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="AuthorWeekFormatPage"
        component={AuthorWeekFormatPage}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="AuthorTimeFormatPage"
        component={AuthorTimeFormatPage}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="CreateAuthorTimeFormatPage"
        component={CreateAuthorTimeFormatPage}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};
export default BottomTabNavigator;
