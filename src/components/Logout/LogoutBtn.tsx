import React from 'react';
import {Text, View} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {SafeAreaView} from 'react-native';
import {useSelector, useDispatch} from 'react-redux'; // Redux 상태 및 액션 디스패치
import {Alert} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {logout} from '../../store/authSlice';

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
        console.log('토큰 삭제 완료.');
        dispatch(logout()); // 로그아웃 액션 디스패치 (isAuthenticated를 false로 설정)
        Alert.alert('로그아웃 되었습니다.');
        navigation.navigate('Home');
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
        <Text
          onPress={handleLogout}
          style={{color: 'blue', textDecorationLine: 'underline'}}>
          로그아웃 버튼입니다.
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default LogoutBtn;
