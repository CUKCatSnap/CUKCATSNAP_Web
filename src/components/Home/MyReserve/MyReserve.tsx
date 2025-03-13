//홈 화면의 '내 예약' 컴포넌트 입니다.

import React from 'react';
import {SafeAreaView} from 'react-native';
import * as S from './Style';
import {useNavigation} from '@react-navigation/native';

const MyReserve = ({reservation}) => {
  const navigation = useNavigation();
  const handleReserve = () => {
    navigation.navigate('MyReserve');
  };

  const date = new Date(reservation.startTime);
  // 원하는 형식으로 출력 (YYYY-MM-DD HH:mm)
  const formattedDate = `${date.getFullYear()}-${String(
    date.getMonth() + 1,
  ).padStart(2, '0')}-${String(date.getDate()).padStart(2, '0')}, ${String(
    date.getHours(),
  ).padStart(2, '0')}시 ${String(date.getMinutes()).padStart(2, '0')}분`;

  return (
    <SafeAreaView style={{alignItems: 'center'}}>
      <S.MyReserveContainer onPress={handleReserve}>
        <S.Shadow />
        <S.MyReserveBox
          colors={['#232074', '#423CDA']}
          start={{x: 1, y: 1}}
          end={{x: 0, y: 0}}
          style={{borderRadius: 20}}
        />
        <S.DateText>{formattedDate}</S.DateText>

        <S.NameText numberOfLines={1}>
          {reservation.photographerTinyInformationResponse.nickname} 작가
        </S.NameText>
      </S.MyReserveContainer>
    </SafeAreaView>
  );
};

export default MyReserve;
