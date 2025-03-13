//예약 상태 색 가이드 입니다.
import React from 'react';
import {SafeAreaView, Text, StyleSheet, ScrollView, View} from 'react-native';
import * as S from './Style';

const ReserveColorBox = () => {
  return (
    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
      <S.Container>
        <S.ContainerBox>
          <S.APPROVED>
            <S.StateText>예약 확정</S.StateText>
          </S.APPROVED>
          <S.PENDING>
            <S.StateText>예약 승인 대기중</S.StateText>
          </S.PENDING>
          <S.REJECTED>
            <S.StateText>예약 취소</S.StateText>
          </S.REJECTED>
        </S.ContainerBox>
      </S.Container>
    </ScrollView>
  );
};

export default ReserveColorBox;
