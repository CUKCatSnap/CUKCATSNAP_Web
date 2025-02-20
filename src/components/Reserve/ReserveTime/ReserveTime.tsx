//시간 컴포넌트(예: 11:00) 입니다.
import React from 'react';
import {SafeAreaView, Text, View} from 'react-native';
import * as S from './Style';

interface TimeProps {
  text: string;
  onPress?: (time: string) => void; // 선택적 속성으로 변경
  disabled: boolean;
  isSelected: boolean; // 추가: 선택 여부
}

const ReserveTime: React.FC<TimeProps> = ({
  text,
  onPress,
  disabled,
  isSelected,
}) => {
  return (
    <SafeAreaView>
      <S.Time
        style={{
          borderColor: isSelected ? '#503bc7' : 'rgb(209, 219, 231)', // 선택된 상태일 때 색상 변경
        }}
        onPress={() => onPress?.(text)}
        disabled={disabled}>
        <S.TimeBox>
          <S.TimeText>{text}</S.TimeText>
        </S.TimeBox>
      </S.Time>
    </SafeAreaView>
  );
};

export default ReserveTime;
