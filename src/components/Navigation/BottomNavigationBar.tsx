// BottomTabNavigator.tsx
import React from 'react';
import Home from '../../pages/Home/Home';
import Chat from '../../pages/Chat/Chat';
import Search from '../../pages/Search/Search';
import Mypage from '../../pages/Mypage/Mypage';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <NavigationContainer>
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
          component={Search}
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
          component={Mypage}
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
    </NavigationContainer>
  );
};

export default BottomTabNavigator;
