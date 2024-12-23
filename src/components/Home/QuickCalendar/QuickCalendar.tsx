//홈 화면의 '장소 찾기, 구독 등' 컴포넌트 입니다.

import React from 'react';
import {SafeAreaView} from 'react-native';
import * as S from './Style';
import {useNavigation} from '@react-navigation/native';
import Calendar from '../../../icons/calendar.svg';

const QuickCalendar = () => {
  const navigation = useNavigation();
  const handleNavigate = () => {
    navigation.navigate('Calendar');
  };
  return (
    <SafeAreaView style={{alignItems: 'center'}}>
      <S.QuickIconContainer onPress={handleNavigate}>
        <Calendar />
      </S.QuickIconContainer>

      <S.QuickText>캘린더</S.QuickText>
    </SafeAreaView>
  );
};

export default QuickCalendar;
