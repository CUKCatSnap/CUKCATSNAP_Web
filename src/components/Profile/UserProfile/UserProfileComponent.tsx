//유저로 로그인시 유저의 마이페이지를 보여주는 컴포넌트
import React, {useState, useEffect, useCallback} from 'react';
import {SafeAreaView, ScrollView, StyleSheet} from 'react-native';
import * as S from './Style';
import {useNavigation, useFocusEffect} from '@react-navigation/native';
import {useSelector} from 'react-redux';
import {fetchReviewAll} from '../../../apis/Review/getReviewAll';
import ReviewTag from '../../Review/ReviewTag';
import LogoutBtn from '../../Logout/LogoutBtn';

const UserProfileComponent = () => {
  const navigation = useNavigation(); // 네비게이션 객체 가져오기

  const isAuthor = useSelector(state => state.auth.user?.isAuthor);
  const user = useSelector(state => state.auth.user);

  return (
    <SafeAreaView style={styles.container}>
      <S.Container>
        <ReviewTag />
      </S.Container>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
});

export default UserProfileComponent;
