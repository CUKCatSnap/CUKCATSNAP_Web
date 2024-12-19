//시간 컴포넌트(예: 11:00) 입니다.
import React from 'react';
import {SafeAreaView, Text, View} from 'react-native';
import * as S from './Style';

interface TimeProps {
  text: string;
  onPress?: (time: string) => void; // 선택적 속성으로 변경
}

const ReserveTime: React.FC<TimeProps> = ({text, onPress}) => {
  return (
    <SafeAreaView>
      <S.Time onPress={() => onPress?.(text)}>
        <S.TimeText>{text}</S.TimeText>
      </S.Time>
    </SafeAreaView>
  );
};

export default ReserveTime;
