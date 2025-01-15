//설정 페이지 입니다.
import React from 'react';
import {
  SafeAreaView,
  Text,
  View,
  ScrollView,
  StyleSheet,
  Alert,
} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import AuthorProfileComponent from '../../components/Profile/AuthorProfile/AuthorProfileComponent';
import LogoutBtn from '../../components/Logout/LogoutBtn';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import ContentsHeader from '../../components/ContentsHeader/ContentsHeader';
import {useNavigation} from '@react-navigation/native';
import CalendarBtn from '../../components/Calendar/CalendarBtn/CalendarBtn';
import * as S from './Style';
import Icon from 'react-native-vector-icons/Ionicons';
import {logout} from '../../store/slices/authSlice';
const Settings = () => {
  // Redux에서 상태 가져오기
  const isAuthor = useSelector(state => state.auth.user?.isAuthor);
  const user = useSelector(state => state.auth.user);

  const dispatch = useDispatch();
  const navigation = useNavigation();
  const handleSetting = () => {
    navigation.navigate('AuthorReserveSettingPage');
  };

  const handleAlarmSetting = () => {
    navigation.navigate('AuthorReserveAlarmPage');
  };

  const handlePlaceSetting = () => {
    navigation.navigate('AuthorReservePlacePage');
  };
  const handleTimeFormat = () => {
    navigation.navigate('AuthorTimeFormatPage');
  };
  const handleWeekFormat = () => {
    navigation.navigate('AuthorWeekFormatPage');
  };

  const handleLogout = async () => {
    const token = await AsyncStorage.getItem('accessToken');
    try {
      if (token) {
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

  const handleLogOutFormat = () => {
    Alert.alert('로그아웃', '로그아웃 하시겠습니까?', [
      {text: '예', onPress: handleLogout},
      {text: '아니오'},
    ]);
  };
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <ContentsHeader text={'환경설정'} />
        <S.SettingContainer>
          {isAuthor ? (
            <View>
              <S.SettingContents onPress={handleSetting}>
                <S.SettingText>예약 설정</S.SettingText>
              </S.SettingContents>
              <S.SettingContents onPress={handleAlarmSetting}>
                <S.SettingText>알림 설정</S.SettingText>
              </S.SettingContents>
              <S.SettingContents onPress={handlePlaceSetting}>
                <S.SettingText>장소 설정</S.SettingText>
              </S.SettingContents>
              <S.SettingContents onPress={handleWeekFormat}>
                <S.SettingText>요일별 예약 설정</S.SettingText>
              </S.SettingContents>
              <S.SettingContents onPress={handleTimeFormat}>
                <S.SettingText>내 예약 시간 형식</S.SettingText>
              </S.SettingContents>
              <S.SettingContents onPress={handleLogOutFormat}>
                <S.SettingText>로그아웃</S.SettingText>
              </S.SettingContents>
            </View>
          ) : (
            <View>
              <Text>유저의 설정 페이지 입니다.</Text>
              <LogoutBtn />
            </View>
          )}
        </S.SettingContainer>
      </ScrollView>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  rotatedIcon: {
    transform: [{rotate: '270deg'}], // 90도 회전
  },
});
export default Settings;
