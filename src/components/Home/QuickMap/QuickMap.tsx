//홈 화면의 '장소 찾기, 구독 등' 컴포넌트 입니다.

import React from 'react';
import {SafeAreaView} from 'react-native';
import * as S from './Style';
import {useNavigation} from '@react-navigation/native';

const QuickMap = () => {
  const navigation = useNavigation();
  const handleNavigate = () => {
    navigation.navigate('Map');
  };
  return (
    <SafeAreaView style={{alignItems: 'center'}}>
      <S.QuickIconContainer onPress={handleNavigate}>
        <S.QuickMapBox source={require('../../../images/map.png')} />
      </S.QuickIconContainer>
      <S.QuickText>장소 찾기</S.QuickText>
    </SafeAreaView>
  );
};

export default QuickMap;
