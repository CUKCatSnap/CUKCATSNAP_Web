//회원가입 두번째 페이지 입니다.
import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import * as S from './Style';
import ContentsHeader from '../../components/ContentsHeader/ContentsHeader';
import {useNavigation} from '@react-navigation/native';

const LoginNewPageTwo = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
      <ContentsHeader />
      <S.LoginContainer>
        <S.LoginText>이름</S.LoginText>
        <S.LoginInputBox placeholder="이름" />
        <S.LoginText>닉네임</S.LoginText>
        <S.LoginInputBox placeholder="닉네임" />
        <S.LoginText>생년월일 8자리</S.LoginText>
        <S.LoginInputBox placeholder="예)20010101" keyboardType="numeric" />
        <S.LoginText>휴대전화 번호</S.LoginText>
        <S.LoginInputBox placeholder="휴대전화 번호" keyboardType="phone-pad" />
        <S.LoginNewBox>
          <S.LoginNewContent>
            <S.LoginNewText>인증약관 전체 동의</S.LoginNewText>
          </S.LoginNewContent>
          <S.LoginNewContent onPress={() => navigation.navigate('Home')}>
            <S.LoginNewText>회원 가입</S.LoginNewText>
          </S.LoginNewContent>
        </S.LoginNewBox>
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

export default LoginNewPageTwo;
