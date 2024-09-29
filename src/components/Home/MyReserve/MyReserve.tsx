//홈 화면의 '내 예약' 컴포넌트 입니다.

import React from 'react';
import {SafeAreaView} from 'react-native';
import * as S from './Style';

const MyReserve = () => {
  return (
    <SafeAreaView style={{alignItems: 'center'}}>
      <S.Shadow />
      <S.MyReserveBox
        colors={['#232074', '#423CDA']}
        start={{x: 1, y: 1}}
        end={{x: 0, y: 0}}
        style={{borderRadius: 20}}
      />
      <S.DateText>9/4 18:00~19:00</S.DateText>
      <S.NameText>나 똘똘 작가</S.NameText>
    </SafeAreaView>
  );
};

export default MyReserve;
