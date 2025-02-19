//작가의 예약 프로그램 목록을 보여주는 페이지 입니다.
//Mypage -> 예약 프로그램 (이름/가격 써진 그것) 누르면 나오는 페이지
import React, {useState} from 'react';
import {SafeAreaView, Text, ScrollView, StyleSheet, Alert} from 'react-native';
import * as S from './Style';
import ReserveProgram from '../../components/Program/ReserveProgram';
import ContentsHeader from '../../components/ContentsHeader/ContentsHeader';
import LoginBtn from '../../components/Login/LoginBtn';
import {deleteReservations} from '../../apis/ReserveProgram/deleteReserveProgram';
import {useNavigation} from '@react-navigation/native';
import {useSelector} from 'react-redux';

const ReserveProgramPage = ({route}) => {
  //유저정보 가져오기
  const isAuthor = useSelector(state => state.auth.user?.isAuthor);
  const user = useSelector(state => state.auth.user);

  const navigation = useNavigation();
  const {programId, title, content, price, photographerId} = route.params; // photographerId 추가

  console.log('Program Details:', {programId, title, content, price});

  const handleDeleteProgram = async () => {
    await deleteReservations(programId);
    navigation.goBack();
  };

  const handleReserve = () => {
    navigation.navigate('UserReservePage', {programId, photographerId});
  };
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <ContentsHeader text={'프로그램 세부내용'} />
        <S.Container>
          <ReserveProgram title={title} content={content} price={price} />
          {isAuthor ? (
            <LoginBtn text={'삭제하기'} onPress={handleDeleteProgram} />
          ) : (
            <LoginBtn text={'예약하기'} onPress={handleReserve} />
          )}
        </S.Container>
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
export default ReserveProgramPage;
