//홈 화면의 '최근 예약' 컴포넌트 입니다.

import React from 'react';
import {SafeAreaView} from 'react-native';
import * as S from './Style';
import {useNavigation} from '@react-navigation/native';

const RecentReserve = () => {
  const navigation = useNavigation();
  const handleRecentReserve = () => {
    navigation.navigate('RecentReserve');
  };

  return (
    <SafeAreaView style={{alignItems: 'center'}}>
      <S.RecentReserve onPress={handleRecentReserve}>
        <S.Shadow />
        <S.RecentReserveContainer />
        <S.PosBox />
        <S.PosText>
          <S.Point fill="gray" />
          올림픽 공원
        </S.PosText>
        <S.RecentReserveBox>
          <S.NameText>나 똘똘 작가</S.NameText>
          <S.Score>평점 4.8★</S.Score>
        </S.RecentReserveBox>
      </S.RecentReserve>
    </SafeAreaView>
  );
};

export default RecentReserve;
