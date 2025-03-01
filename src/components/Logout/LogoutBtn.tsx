import React from 'react';
import {Text, View} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {SafeAreaView} from 'react-native';
import {useSelector, useDispatch} from 'react-redux'; // Redux 상태 및 액션 디스패치
import {Alert} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {logout} from '../../store/slices/authSlice';
import LoginBtn from '../Login/LoginBtn';

const LogoutBtn = () => {
  const dispatch = useDispatch(); // Redux 액션 디스패치
  // 로그인 상태 가져오기
  const isAuthenticated = useSelector(state => state.auth.isAuthenticated);
  const navigation = useNavigation();
  const handleLogout = async () => {
    const token = await AsyncStorage.getItem('accessToken');
    try {
      if (token) {
        console.log('액세스 토큰: ', token);
        // 로컬 스토리지에서 토큰 삭제
        await AsyncStorage.removeItem('accessToken');
        // 추가적으로 로컬 스토리지나 세션 스토리지 초기화
        await AsyncStorage.clear();
        console.log('토큰 삭제 완료.');
        dispatch(logout()); // 로그아웃 액션 디스패치 (isAuthenticated를 false로 설정)
        Alert.alert('로그아웃 되었습니다.');
        // 상태 업데이트 이후, 화면이 이동될 수 있도록 추가적인 처리
        // 네비게이션 스택 리셋 후 Home으로 이동
        navigation.reset({
          index: 0, // 새로 스택을 하나만 추가하도록 설정
          routes: [{name: 'Home'}], // 새로운 Home 화면으로 이동
        });
      } else {
        console.log('로그인 상태가 아닙니다.');
        console.log('액세스 토큰: ', token);
      }
    } catch (error) {
      console.error('로그아웃 중 오류 발생:', error);
    }
  };

  return (
    <SafeAreaView>
      <View>
        <LoginBtn onPress={handleLogout} disabled={false} text={'로그아웃'} />
      </View>
    </SafeAreaView>
  );
};

export default LogoutBtn;
