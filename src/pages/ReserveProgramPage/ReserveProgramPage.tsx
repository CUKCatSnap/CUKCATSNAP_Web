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

const ReserveProgramPage = ({route}) => {
  const navigation = useNavigation();
  const {programId} = route.params;

  const handleDeleteProgram = async () => {
    await deleteReservations(programId);
    navigation.goBack();
  };
  return (
    <SafeAreaView>
      <ScrollView>
        <ContentsHeader text={'프로그램 세부내용'} />
        <ReserveProgram />
        <Text>{programId}</Text>
        <LoginBtn text={'삭제하기'} onPress={handleDeleteProgram} />
      </ScrollView>
    </SafeAreaView>
  );
};

export default ReserveProgramPage;
