//다른 화면에 쓰이는 헤더 컴포넌트 입니다.

import React from 'react';
import {SafeAreaView, Text} from 'react-native';
import * as S from './Style';
import Arrow from '../../icons/arrow.svg';
import {useNavigation} from '@react-navigation/native';

const ContentsHeader = () => {
  const navigation = useNavigation();
  const handleGoBack = () => {
    navigation.goBack();
    return true;
  };

  return (
    <SafeAreaView>
      <S.ContextHeaderContainer>
        <S.BackArrow onPress={handleGoBack}>
          <Arrow />
        </S.BackArrow>
        <S.HeaderText>알림</S.HeaderText>
      </S.ContextHeaderContainer>
    </SafeAreaView>
  );
};

export default ContentsHeader;
