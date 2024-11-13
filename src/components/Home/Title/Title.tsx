//홈 화면의 '최근 예약' 컴포넌트 입니다.

import React from 'react';
import {SafeAreaView} from 'react-native';
import * as S from './Style';

interface TitleProps {
  text: string;
}

const RecentReserve: React.FC<TitleProps> = ({text}) => {
  return (
    <SafeAreaView style={{alignItems: 'flex-start'}}>
      <S.TitleContainer
        horizontal={false}
        showsHorizontalScrollIndicator={false}>
        <S.TitleText>{text}</S.TitleText>
        <S.TitleLine />
      </S.TitleContainer>
    </SafeAreaView>
  );
};

export default RecentReserve;
