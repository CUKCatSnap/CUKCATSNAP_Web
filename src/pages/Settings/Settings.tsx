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

  return (
    <SafeAreaView>
      <ContentsHeader text={'환경설정'} />
      {isAuthor ? (
        <View>
          <Text>작가의 환경설정 페이지 입니다.</Text>
          <LoginBtn text="예약 설정" onPress={handleSetting} />
          <LoginBtn text="알림 설정" onPress={handleAlarmSetting} />
          <LoginBtn text="장소 설정" onPress={handlePlaceSetting} />
        </View>
      ) : (
        <View>
          <Text>유저의 설정 페이지 입니다.</Text>
          <LogoutBtn />
        </View>
      )}
    </SafeAreaView>
  );
};

export default Settings;
