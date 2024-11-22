//내정보 페이지 입니다.
import React from 'react';
import {SafeAreaView, Text, View, ScrollView} from 'react-native';
import {useSelector} from 'react-redux';
import AuthorProfileComponent from '../../components/Profile/AuthorProfile/AuthorProfileComponent';
import LogoutBtn from '../../components/Logout/LogoutBtn';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';

const Mypage = () => {
  // Redux에서 상태 가져오기
  const isAuthor = useSelector(state => state.auth.user?.isAuthor);
  const user = useSelector(state => state.auth.user);

  //1. 토큰이 있어야 함
  //2. 유저인지? 작가인지?
  return (
    <SafeAreaView>
      <ScrollView>
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

export default Mypage;
