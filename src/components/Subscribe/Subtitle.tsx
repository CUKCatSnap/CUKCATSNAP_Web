//구독 화면의 작가/장소 구분 바 입니다.

import React from 'react';
import {SafeAreaView} from 'react-native';
import * as S from './Style';

const RecentReserve = () => {
  return (
    <SafeAreaView style={{alignItems: 'flex-start'}}>
      <S.TitleContainer
        horizontal={true}
        showsHorizontalScrollIndicator={false}>
        <S.TitleBox>
          <S.TitleText>Photographer</S.TitleText>
          <S.TitleLine />
        </S.TitleBox>
        <S.TitleBox>
          <S.TitleText>place</S.TitleText>
          <S.TitleLine />
        </S.TitleBox>
      </S.TitleContainer>
    </SafeAreaView>
  );
};

export default RecentReserve;
