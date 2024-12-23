//캘린더 버튼 입니다.
import React from 'react';
import {SafeAreaView, Text} from 'react-native';
import * as S from './Style';

interface CalendarBtnProps {
  disabled?: boolean; // disabled prop 추가
  onPress?: () => void; // onPress prop 추가
  text: string; // 버튼 텍스트를 위한 prop 추가
}

const CalendarBtn: React.FC<CalendarBtnProps> = ({disabled, onPress, text}) => {
  return (
    <SafeAreaView>
      <S.CalendarBtnContainer
        onPress={onPress}
        disabled={disabled}
        style={{
          backgroundColor: disabled
            ? 'rgb(240, 238, 238)'
            : 'rgb(226, 226, 226)',
        }}>
        <S.BtnText>{disabled ? text : text}</S.BtnText>
      </S.CalendarBtnContainer>
    </SafeAreaView>
  );
};

export default CalendarBtn;
