//회원가입 첫번째 페이지 입니다.
import React, {useState, useEffect} from 'react';
import {SafeAreaView, StyleSheet, ScrollView} from 'react-native';
import * as S from './Style';
import ContentsHeader from '../../../components/ContentsHeader/ContentsHeader';
import {useNavigation} from '@react-navigation/native';
import Check from '../../../icons/check.svg';

const LoginNewPageOne = () => {
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');
  const [passwordRepeat, setPasswordRepeat] = useState('');
  const [idError, setIdError] = useState(false); // 아이디 상태
  const [passwordError, setPasswordError] = useState(false); // 비밀번호 상태
  const [passwordRepeatError, setPasswordRepeatError] = useState(false); // 비밀번호 재입력 상태
  const [isButtonDisabled, setIsButtonDisabled] = useState(true); // 버튼 활성화 상태

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

  //비밀번호 재입력 칸 상태
  const handlePasswordRepeat = () => {
    if (password !== passwordRepeat || passwordRepeat === '') {
      setPasswordRepeatError(true);
    } else {
      setPasswordRepeatError(false);
    }
  };

  //다음 버튼 활성화
  useEffect(() => {
    if (
      id !== '' &&
      password !== '' &&
      passwordRepeat !== '' &&
      password === passwordRepeat
    ) {
      setIsButtonDisabled(false); // 입력이 모두 있을 경우 버튼 활성화
    } else {
      setIsButtonDisabled(true); // 하나라도 없으면 버튼 비활성화
    }
  }, [id, password, passwordRepeat]); // id와 password의 상태를 감시

  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <ContentsHeader />
        <S.LoginContainer>
          <S.LoginText isError={idError}>
            {idError ? '아이디를 입력하세요' : '아이디'}
          </S.LoginText>

          <S.IconBox>
            <S.LoginInputBox
              placeholder="아이디"
              keyboardType="default"
              value={id}
              onChangeText={text => {
                setId(text);
                setIdError(text === '');
              }} // 입력값 변경
              onBlur={handleId}
            />
            {id !== '' && (
              <S.IconCheck>
                <Check />
              </S.IconCheck>
            )}
          </S.IconBox>

          <S.LoginText isError={passwordError}>
            {passwordError
              ? '비밀번호를 입력해주세요.'
              : password !== ''
              ? '비밀번호'
              : '비밀번호'}
          </S.LoginText>
          <S.IconBox>
            <S.LoginInputBox
              placeholder="비밀번호"
              secureTextEntry={true}
              value={password}
              onChangeText={text => {
                setPassword(text);
                setPasswordError(text === ''); // 입력이 없을 때 바로 에러 상태 업데이트
                // 비밀번호와 재입력 비교, 이렇게 하면 비밀번호 창에서 비번이 바뀌면
                //아래 있는 비밀번호 재확인 문구도 변함
                setPasswordRepeatError(passwordRepeat !== text);
              }}
              onBlur={handlePassword}
            />
            {password !== '' && (
              <S.IconCheck>
                <Check />
              </S.IconCheck>
            )}
          </S.IconBox>
          <S.LoginText isError={passwordRepeatError}>
            {passwordRepeatError
              ? '비밀번호가 다릅니다.'
              : passwordRepeat !== '' && password === passwordRepeat
              ? '비밀번호 재입력'
              : '비밀번호 재입력'}
          </S.LoginText>
          <S.IconBox>
            <S.LoginInputBox
              placeholder="비밀번호 재입력"
              secureTextEntry={true}
              value={passwordRepeat}
              onChangeText={text => {
                setPasswordRepeat(text);
                setPasswordRepeatError(text === '' || password !== text);
              }}
              onBlur={handlePasswordRepeat}
            />
            {passwordRepeat !== '' && password === passwordRepeat && (
              <S.IconCheck>
                <Check />
              </S.IconCheck>
            )}
          </S.IconBox>
          <S.LoginNewContent
            //이 조건을 추가해야 버튼 이벤트(클릭시 음영변경)가 발생 안함
            disabled={isButtonDisabled}
            //스타일 변경
            style={{
              backgroundColor: isButtonDisabled ? '#f3f3f3' : '#423cd2',
            }}
            onPress={() =>
              !isButtonDisabled && navigation.navigate('LoginNewPageTwo')
            }>
            <S.LoginNewText
              style={{
                color: isButtonDisabled ? '#bebebe' : '#ffffff',
              }}>
              다음
            </S.LoginNewText>
          </S.LoginNewContent>
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

export default LoginNewPageOne;
