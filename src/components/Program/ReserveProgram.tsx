//작가의 예약 프로그램 컴포넌트
import React, {useState} from 'react';
import {
  SafeAreaView,
  Text,
  ScrollView,
  StyleSheet,
  Alert,
  View,
} from 'react-native';
import * as S from './Style';

const ReserveProgram = ({title, content, price}) => {
  return (
    <SafeAreaView>
      <S.ContainerBox>
        <S.Container>
          <S.ContainerText>{title}</S.ContainerText>
          <S.BoxText>{price}원</S.BoxText>
        </S.Container>
        <S.ContentText>{content}</S.ContentText>
      </S.ContainerBox>
    </SafeAreaView>
  );
};

export default ReserveProgram;
