//유저로 로그인시 유저의 마이페이지를 보여주는 컴포넌트
import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import * as S from './Style';
import {useNavigation} from '@react-navigation/native';
import {useSelector} from 'react-redux';
import ReviewTag from '../../Review/ReviewTag';

const UserProfileComponent = () => {
  const isAuthor = useSelector(state => state.auth.isAuthor);
  const isUser = useSelector(state => state.auth.isUser);

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
