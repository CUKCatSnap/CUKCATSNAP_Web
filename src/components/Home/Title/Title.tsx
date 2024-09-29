//홈 화면의 '최근 예약' 컴포넌트 입니다.

import React from 'react';
import {SafeAreaView} from 'react-native';
import * as S from './Style';

const RecentReserve = () => {
  return (
    <SafeAreaView style={{alignItems: 'flex-start'}}>
      <S.TitleContainer
        horizontal={false}
        showsHorizontalScrollIndicator={false}>
        <S.TitleText>내 예약</S.TitleText>
        <S.TitleLine />
      </S.TitleContainer>
    </SafeAreaView>
  );
};

export default RecentReserve;
