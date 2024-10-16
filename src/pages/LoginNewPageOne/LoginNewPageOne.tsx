//회원가입 첫번째 페이지 입니다.
import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import * as S from './Style';
import ContentsHeader from '../../components/ContentsHeader/ContentsHeader';
import {useNavigation} from '@react-navigation/native';

const LoginNewPageOne = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
      <ContentsHeader />
      <S.LoginContainer>
        <S.LoginText>아이디</S.LoginText>
        <S.LoginInputBox placeholder="아이디" />
        <S.LoginText>비밀번호</S.LoginText>
        <S.LoginInputBox placeholder="비밀번호" secureTextEntry={true} />
        <S.LoginText>비밀번호 재입력</S.LoginText>
        <S.LoginInputBox placeholder="비밀번호 재입력" secureTextEntry={true} />
        <S.LoginNewContent
          onPress={() => navigation.navigate('LoginNewPageTwo')}>
          <S.LoginNewText>다음</S.LoginNewText>
        </S.LoginNewContent>
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

export default LoginNewPageOne;
