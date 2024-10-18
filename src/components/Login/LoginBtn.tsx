//로그인 파란 버튼 입니다.
import React from 'react';
import {SafeAreaView, Text} from 'react-native';
import * as S from './Style';

//로그인 disabled를 받아옴
interface LoginBtnProps {
  disabled?: boolean; // disabled prop 추가
  onPress?: () => void; // onPress prop 추가
}

const LoginBtn: React.FC<LoginBtnProps> = ({disabled, onPress}) => {
  return (
    <SafeAreaView>
      <S.LoginBtnContainer
        disabled={disabled}
        style={{backgroundColor: disabled ? '#cccccc' : '#423cd2'}}
        onPress={onPress}>
        <S.BtnText>{disabled ? '로그인' : '로그인'}</S.BtnText>
      </S.LoginBtnContainer>
    </SafeAreaView>
  );
};

export default LoginBtn;
