//달력에서 보이는 예약 목록 컴포넌트 박스 입니다.(회원용)
import React from 'react';
import {SafeAreaView, Text, StyleSheet, ScrollView, View} from 'react-native';
import * as S from './Style';
import {useNavigation} from '@react-navigation/native';

const ReserveUserBox = ({item}) => {
  const navigation = useNavigation(); // 네비게이션 객체 가져오기

  const handleReserve = () => {
    navigation.navigate('ReserveState', {item});
  };

  const time = item.startTime.split(' ')[1]; // 날짜를 분리하고 시간만 추출

  return (
    <SafeAreaView>
      <S.ReserveContainer onPress={handleReserve}>
        <S.ReserveBox>
          <S.TextContainer>
            <S.ReserveText>{time}</S.ReserveText>
            <S.Line />
            <S.ReserveTitleText numberOfLines={1}>
              {item.reservedProgramResponse.title}
            </S.ReserveTitleText>
            <S.Box>
              <S.ReserveText2 numberOfLines={1}>
                {item.photographerTinyInformationResponse.nickname} 작가
              </S.ReserveText2>
              <S.ReserveText2 numberOfLines={1}>
                위치 : {item.reservationLocation.locationName}
              </S.ReserveText2>
            </S.Box>
          </S.TextContainer>
          <S.ContainerBox state={item.state} />
        </S.ReserveBox>
      </S.ReserveContainer>
    </SafeAreaView>
  );
};

export default ReserveUserBox;
