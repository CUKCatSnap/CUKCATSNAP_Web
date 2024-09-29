//홈 화면의 '장소 찾기, 구독 등' 컴포넌트 입니다.

import React from 'react';
import {SafeAreaView} from 'react-native';
import * as S from './Style';

const QuickIcon = () => {
  return (
    <SafeAreaView style={{alignItems: 'center'}}>
      <S.QuickIconContainer />
      <S.QuickText>장소 찾기</S.QuickText>
    </SafeAreaView>
  );
};

export default QuickIcon;
