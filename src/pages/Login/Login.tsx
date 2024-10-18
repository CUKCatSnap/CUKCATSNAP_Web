//로그인 페이지 입니다.
import React, {useState, useEffect} from 'react';
import {SafeAreaView, StyleSheet, ScrollView} from 'react-native';
import * as S from './Style';
import ContentsHeader from '../../components/ContentsHeader/ContentsHeader';
import LoginBtn from '../../components/Login/LoginBtn';
import Naver from '../../icons/naver.svg';
import {useNavigation} from '@react-navigation/native';

const Login = () => {
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');
  const [idError, setIdError] = useState(false); // 아이디 상태
  const [passwordError, setPasswordError] = useState(false); // 비밀번호 상태
  const [isButtonDisabled, setIsButtonDisabled] = useState(true); // 버튼 활성화 상태
  const navigation = useNavigation();

  //아이디 칸 상태
  const handleId = () => {
    if (id === '') {
      setIdError(true); // 입력이 없으면 에러를 활성화
    } else {
      setIdError(false); // 입력이 있으면 에러를 비활성화
    }
  };

  //비밀번호 칸 상태
  const handlePassword = () => {
    if (password === '') {
      setPasswordError(true);
    } else {
      setPasswordError(false);
    }
  };

  //로그인 버튼 활성화
  useEffect(() => {
    if (id !== '' && password !== '') {
      setIsButtonDisabled(false); // 입력이 모두 있을 경우 버튼 활성화
    } else {
      setIsButtonDisabled(true); // 하나라도 없으면 버튼 비활성화
    }
  }, [id, password]); // id와 password의 상태를 감시

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <ContentsHeader />
        <S.LoginContainer>
          <S.LoginText isError={idError}>
            {idError ? '아이디를 입력해주세요' : '아이디'}
          </S.LoginText>
          <S.LoginInputBox
            placeholder="아이디"
            keyboardType="default"
            value={id}
            onChangeText={text => setId(text)} // 입력값 변경
            onBlur={handleId} // 포커스가 벗어났을 때 호출
          />
          <S.LoginText isError={passwordError}>
            {passwordError ? '비밀번호를 입력해주세요' : '비밀번호'}
          </S.LoginText>
          <S.LoginInputBox
            placeholder="비밀번호"
            secureTextEntry={true}
            value={password}
            onChangeText={text => setPassword(text)}
            onBlur={handlePassword}
          />
          <LoginBtn
            disabled={idError || passwordError || id === '' || password === ''}
          />
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
      </ScrollView>
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
