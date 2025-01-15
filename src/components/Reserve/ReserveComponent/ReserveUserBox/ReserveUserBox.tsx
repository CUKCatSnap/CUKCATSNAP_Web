//달력에서 보이는 예약 목록 컴포넌트 박스 입니다.(작가용)
import React from 'react';
import {SafeAreaView, Text, StyleSheet, ScrollView, View} from 'react-native';
import * as S from './Style';

const ReserveUserBox = ({item}) => {
  const time = item.startTime.split(' ')[1]; // 날짜를 분리하고 시간만 추출
  return (
    <SafeAreaView>
      <S.ReserveContainer state={item.state}>
        <S.ReserveText>{time}</S.ReserveText>
        <S.Line />
        <S.ReserveTitleText>
          {item.reservedProgramResponse.title}
        </S.ReserveTitleText>
        <S.Box>
          <S.ReserveText>
            {item.photographerTinyInformationResponse.nickname} 작가
          </S.ReserveText>
          <Text>장소 : {item.reservationLocation.locationName}</Text>
        </S.Box>
      </S.ReserveContainer>
    </SafeAreaView>
  );
};

export default ReserveUserBox;
