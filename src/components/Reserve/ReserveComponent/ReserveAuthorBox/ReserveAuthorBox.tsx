//달력에서 보이는 예약 목록 컴포넌트 박스 입니다.(작가용)
import React from 'react';
import {SafeAreaView, Text, StyleSheet, ScrollView, View} from 'react-native';
import * as S from './Style';
import {useNavigation} from '@react-navigation/native';

const ReserveAuthorBox = ({item}) => {
  const navigation = useNavigation(); // 네비게이션 객체 가져오기

  const handleReserve = () => {
    navigation.navigate('ReserveState');
  };

  return (
    <SafeAreaView>
      <S.ReserveContainer state={item.state} onPress={handleReserve}>
        <S.ReserveText>
          {item.startTime[3]}:
          {item.startTime[4] === 0 ? '00' : item.startTime[4]}
        </S.ReserveText>
        <S.Line />
        <S.ReserveTitleText>
          {item.reservedProgramResponse.title}
        </S.ReserveTitleText>
        <S.Box>
          <S.ReserveText>
            {item.memberTinyInformationResponse.nickname} 유저
          </S.ReserveText>
          <Text>장소 : {item.reservationLocation.locationName}</Text>
        </S.Box>
      </S.ReserveContainer>
    </SafeAreaView>
  );
};

export default ReserveAuthorBox;
