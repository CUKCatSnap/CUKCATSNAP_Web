//설정 페이지 입니다.
import React from 'react';
import {SafeAreaView, Text, View, ScrollView, StyleSheet} from 'react-native';
import {useSelector} from 'react-redux';
import AuthorProfileComponent from '../../components/Profile/AuthorProfile/AuthorProfileComponent';
import LogoutBtn from '../../components/Logout/LogoutBtn';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import ContentsHeader from '../../components/ContentsHeader/ContentsHeader';
import LoginBtn from '../../components/Login/LoginBtn';
import {useNavigation} from '@react-navigation/native';
import CalendarBtn from '../../components/Calendar/CalendarBtn/CalendarBtn';
import * as S from './Style';
import Icon from 'react-native-vector-icons/Ionicons';
import Arrow from '../../icons/arrow.svg';
const Settings = () => {
  // Redux에서 상태 가져오기
  const isAuthor = useSelector(state => state.auth.user?.isAuthor);
  const user = useSelector(state => state.auth.user);
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

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <ContentsHeader text={'환경설정'} />
        <S.SettingContainer>
          {isAuthor ? (
            <View>
              <S.SettingContents onPress={handleSetting}>
                <S.SettingText>예약 설정</S.SettingText>
                <Icon
                  name={'arrow-down'}
                  size={30}
                  color={'#b1b1b1'}
                  style={styles.rotatedIcon}
                />
              </S.SettingContents>
              <S.SettingContents onPress={handleAlarmSetting}>
                <S.SettingText>알림 설정</S.SettingText>
                <Icon
                  name={'arrow-down'}
                  size={30}
                  color={'#b1b1b1'}
                  style={styles.rotatedIcon}
                />
              </S.SettingContents>
              <S.SettingContents onPress={handlePlaceSetting}>
                <S.SettingText>장소 설정</S.SettingText>
                <Icon
                  name={'arrow-down'}
                  size={30}
                  color={'#b1b1b1'}
                  style={styles.rotatedIcon}
                />
              </S.SettingContents>
              <S.SettingContents onPress={handleWeekFormat}>
                <S.SettingText>요일별 예약 설정</S.SettingText>
                <Icon
                  name={'arrow-down'}
                  size={30}
                  color={'#b1b1b1'}
                  style={styles.rotatedIcon}
                />
              </S.SettingContents>
              <S.SettingContents onPress={handleTimeFormat}>
                <S.SettingText>내 예약 시간 형식</S.SettingText>
                <Icon
                  name={'arrow-down'}
                  size={30}
                  color={'#b1b1b1'}
                  style={styles.rotatedIcon}
                />
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
