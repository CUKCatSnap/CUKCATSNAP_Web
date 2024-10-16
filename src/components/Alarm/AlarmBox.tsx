//알림 개개의 박스입니다.

import React from 'react';
import {SafeAreaView, Text} from 'react-native';
import * as S from './Style';

const AlarmBox = () => {
  return (
    <SafeAreaView>
      <S.AlarmBoxContainer>
        <S.TitleText>나 똘똘 작가</S.TitleText>
        <S.ContentText>예약이 완료되었습니다.</S.ContentText>
        <S.ContentText>예약 확정 시 알림 보내드리겠습니다.</S.ContentText>
        <S.ContentDate>9/14 (목) 18:00</S.ContentDate>
      </S.AlarmBoxContainer>
    </SafeAreaView>
  );
};

export default AlarmBox;
