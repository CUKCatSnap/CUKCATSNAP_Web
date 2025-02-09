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
        <S.DateText>
          {new Date(reservation.startTime).toLocaleString()}
        </S.DateText>
        <S.NameText>
          {reservation.photographerTinyInformationResponse.nickname} 작가
        </S.NameText>
      </S.MyReserveContainer>
    </SafeAreaView>
  );
};

export default MyReserve;
