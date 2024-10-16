//로그인 페이지 입니다.
import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import * as S from './Style';
import ContentsHeader from '../../components/ContentsHeader/ContentsHeader';
import LoginBtn from '../../components/Login/LoginBtn';
import Naver from '../../icons/naver.svg';
import {useNavigation} from '@react-navigation/native';

const Login = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
      <ContentsHeader />
      <S.LoginContainer>
        <S.LoginText>아이디</S.LoginText>
        <S.LoginInputBox placeholder="아이디" keyboardType="default" />
        <S.LoginText>비밀번호</S.LoginText>
        <S.LoginInputBox placeholder="비밀번호" secureTextEntry={true} />
        <LoginBtn />
        <S.LoginCenterBar
          horizontal={true}
          showsHorizontalScrollIndicator={false}>
          <S.LoginUnderbar />
          <S.LoginText2>또는</S.LoginText2>
          <S.LoginUnderbar />
        </S.LoginCenterBar>
        <S.LoginWithNaverContent>
          <S.NaverIcon>
            <Naver />
          </S.NaverIcon>
          <S.LoginWithNaverText>네이버로 시작하기</S.LoginWithNaverText>
        </S.LoginWithNaverContent>
        <S.LoginNew onPress={() => navigation.navigate('LoginNewPageOne')}>
          <S.LoginNewText>회원 가입</S.LoginNewText>
        </S.LoginNew>
      </S.LoginContainer>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
});

export default Login;
