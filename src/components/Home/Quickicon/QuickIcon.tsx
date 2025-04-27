//홈 화면의 '장소 찾기, 구독 등' 컴포넌트 입니다.

import React from 'react';
import {SafeAreaView} from 'react-native';
import * as S from './Style';
import {useNavigation} from '@react-navigation/native';
import Heart from '../../../icons/heart.svg';
import Icon from 'react-native-vector-icons/Ionicons';

const QuickIcon = () => {
  const navigation = useNavigation();
  const handleNavigate = () => {
    navigation.navigate('SubscribeHome');
  };
  return (
    <SafeAreaView style={{alignItems: 'center'}}>
      <S.QuickIconContainer onPress={handleNavigate}>
        <Icon name={'heart-outline'} size={30} color={'white'} />
      </S.QuickIconContainer>

      <S.QuickText>구독</S.QuickText>
    </SafeAreaView>
  );
};

export default QuickIcon;
