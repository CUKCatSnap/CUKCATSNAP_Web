//내정보 페이지 입니다.
import React from 'react';
import {SafeAreaView, Text, View, ScrollView, StyleSheet} from 'react-native';
import {useSelector} from 'react-redux';
import AuthorProfileComponent from '../../components/Profile/AuthorProfile/AuthorProfileComponent';
import LogoutBtn from '../../components/Logout/LogoutBtn';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import ContentsHeader from '../../components/ContentsHeader/ContentsHeader';
import Icon from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';
import * as S from './Style';

const Mypage = () => {
  // Redux에서 상태 가져오기
  const isAuthor = useSelector(state => state.auth.user?.isAuthor);
  const user = useSelector(state => state.auth.user);
  const navigation = useNavigation(); // 네비게이션 객체 가져오기
  const handleSetting = () => {
    navigation.navigate('Settings');
  };
  //1. 토큰이 있어야 함
  //2. 유저인지? 작가인지?
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <S.TopView>
          <ContentsHeader text={'마이페이지'} />
          <Icon
            name={'settings-outline'}
            size={30}
            color={'black'}
            onPress={handleSetting}
          />
        </S.TopView>

        {isAuthor ? (
          <AuthorProfileComponent />
        ) : (
          <View>
            <Text>유저의 Mypage 입니다.</Text>
            <LogoutBtn />
          </View>
        )}
      </ScrollView>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
});
export default Mypage;
