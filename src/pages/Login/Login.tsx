//로그인 페이지 입니다.
import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  Alert,
  Linking,
} from 'react-native';
import * as S from './Style';
import ContentsHeader from '../../components/ContentsHeader/ContentsHeader';
import LoginBtn from '../../components/Login/LoginBtn';
import Naver from '../../icons/naver.svg';
import {useNavigation} from '@react-navigation/native';
import {LoginUser} from '../../apis/Login/postLogin';
import {LoginAuthor} from '../../apis/Login/postAuthorLogin';
import {getAuthorProfile} from '../../apis/Information/getAuthorProfile';
import apiClient from '../../apis/getAccessToken';

import {useDispatch} from 'react-redux';
// 로그인 성공 시 상태를 업데이트하는 액션
import {loginSuccess} from '../../store/slices/authSlice';

const Login = () => {
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');
  const [idError, setIdError] = useState(false); // 아이디 상태
  const [passwordError, setPasswordError] = useState(false); // 비밀번호 상태
  const [isButtonDisabled, setIsButtonDisabled] = useState(true); // 버튼 활성화 상태
  const [Author, setAuthor] = useState(false);

  const navigation = useNavigation();
  const dispatch = useDispatch();

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

  //로그인
  const handleSubmitUser = async () => {
    try {
      const loginResponse = await LoginUser({identifier: id, password});
      if (loginResponse && loginResponse.body && loginResponse.body.data) {
        const accessToken = loginResponse.body.data.accessToken;

        // accessToken을 apiClient 등에 세팅해주고 (토큰 관리 코드에 따라 다름)
        apiClient.defaults.headers.common.Authorization = `Bearer ${accessToken}`;

        // 작가 상세 정보 조회 시도
        const authorProfile = await getAuthorProfile();

        if (authorProfile) {
          // 작가 정보 있으면 로그인 성공 처리 + isAuthor: true
          dispatch(
            loginSuccess({...authorProfile, isAuthor: true, accessToken}),
          );
        } else {
          // 작가 정보 없으면 일반 유저 로그인 처리 + isAuthor: false
          dispatch(loginSuccess({accessToken, isAuthor: false}));
        }

        Alert.alert('', '로그인 되었습니다.', [
          {
            text: '확인',
            onPress: () =>
              navigation.reset({
                index: 0,
                routes: [{name: 'Home'}],
              }),
          },
        ]);
      }
    } catch (error) {
      Alert.alert(
        '',
        '로그인에 실패했습니다. 아이디와 비밀번호를 확인해주세요.',
      );
    }
  };

  //회원 가입
  const handleUserNewLogin = () => {
    navigation.navigate('LoginNewPageOne', {isAuthor: false});
  };

  //회원 가입
  const handleAuthorNewLogin = () => {
    navigation.navigate('LoginNewPageOne', {isAuthor: true});
  };
  /*setAuthor이 변경된 후에 navigate해야 함 -> promise 사용
  //그러나 반드시 필요한 것은 아님 (setAuthor이)
  const handleAuthorNewLogin = () => {
    new Promise(resolve => {
      setAuthor(true);
      resolve();
    }).then(() => {
      navigation.navigate('LoginNewPageOne', {isAuthor: true});
    });
  };*/

  //네이버 로그인
  const handleNaverLogin = async () => {
    navigation.navigate('NaverLoginWebView');
    /*try {
      const response = await NaverLoginUser();
      if (response) {
        // 로그인 성공 액션을 dispatch하여 상태 업데이트
        // 즉, 이게 전역 상태를 업데이트 함 (redux)
        dispatch(loginSuccess({...response, isAuthor: false}));
        Alert.alert(
          '', // 제목
          '네이버 계정으로 로그인했습니다.', // 메시지
          [
            {text: '확인', onPress: () => navigation.navigate('Home')}, // 확인 버튼 눌렀을 때 홈으로 이동
          ],
        );
      }
    } catch (error) {
      console.log('로그인 실패', error.message || '알 수 없는 오류 발생');
    }*/
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <ContentsHeader text="로그인" />
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
          <S.LoginBtnBox>
            <S.LoginBtn>
              <LoginBtn
                text="로그인"
                onPress={handleSubmitUser}
                disabled={
                  idError || passwordError || id === '' || password === ''
                }
              />
            </S.LoginBtn>
          </S.LoginBtnBox>
          <S.LoginCenterBar>
            <S.LoginUnderbar />
            <S.LoginText2>또는</S.LoginText2>
            <S.LoginUnderbar />
          </S.LoginCenterBar>
          <S.LoginWithNaverContent
            /* onPress={() =>
              Linking.openURL('catsnap://home')
            } */ onPress={handleNaverLogin}>
            <S.NaverIcon>
              <Naver />
            </S.NaverIcon>
            <S.LoginWithNaverText>네이버로 시작하기</S.LoginWithNaverText>
          </S.LoginWithNaverContent>
          <S.LoginNewBox>
            <S.LoginNew onPress={handleUserNewLogin}>
              <S.LoginNewText>회원 가입</S.LoginNewText>
            </S.LoginNew>
            <S.LoginNew onPress={handleAuthorNewLogin}>
              <S.LoginNewText>작가로 회원 가입</S.LoginNewText>
            </S.LoginNew>
          </S.LoginNewBox>
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
