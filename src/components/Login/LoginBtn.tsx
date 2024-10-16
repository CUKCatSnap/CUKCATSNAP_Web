//로그인 파란 버튼 입니다.
import React from 'react';
import {SafeAreaView, Text} from 'react-native';
import * as S from './Style';

const LoginBtn = () => {
  return (
    <SafeAreaView>
      <S.LoginBtnContainer>
        <S.BtnText>로그인</S.BtnText>
      </S.LoginBtnContainer>
    </SafeAreaView>
  );
};

export default LoginBtn;
