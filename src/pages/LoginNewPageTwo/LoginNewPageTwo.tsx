//회원가입 두번째 페이지 입니다.
import React, {useState, useEffect} from 'react';
import {SafeAreaView, StyleSheet, ScrollView} from 'react-native';
import * as S from './Style';
import ContentsHeader from '../../components/ContentsHeader/ContentsHeader';
import {useNavigation} from '@react-navigation/native';
import Check from '../../icons/check.svg';

const LoginNewPageTwo = () => {
  const [name, setName] = useState('');
  const [nameError, setNameError] = useState(false);

  const [nickName, setNickName] = useState('');
  const [nickNameError, setNickNameError] = useState(false);

  const [birthday, setBirthday] = useState('');
  const [birthdayError, setBirthdayError] = useState(false);

  const [phoneNumber, setPhoneNumber] = useState(''); // 비밀번호 상태
  const [phoneNumberError, setPhoneNumberError] = useState(false); // 비밀번호 상태

  const [isButtonDisabled, setIsButtonDisabled] = useState(true); // 버튼 활성화 상태
  const navigation = useNavigation();
  //이름 칸 상태
  const handleName = () => {
    if (name === '') {
      setNameError(true); // 입력이 없으면 에러를 활성화
    } else {
      setNameError(false); // 입력이 있으면 에러를 비활성화
    }
  };

  //닉네임 칸 상태
  const handleNickname = () => {
    if (nickName === '') {
      setNickNameError(true);
    } else {
      setNickNameError(false);
    }
  };

  //생년월일 8자리 칸 상태
  const handleBirthday = () => {
    if (birthday === '' || birthday.length < 8) {
      setBirthdayError(true);
    } else {
      setBirthdayError(false);
    }
  };

  //휴대전화 번호 칸 상태
  const handlePhoneNumber = () => {
    if (phoneNumber === '') {
      setPhoneNumberError(true);
    } else {
      setPhoneNumberError(false);
    }
  };

  //다음 버튼 활성화
  useEffect(() => {
    if (
      name !== '' &&
      nickName !== '' &&
      birthday !== '' &&
      phoneNumber !== ''
    ) {
      setIsButtonDisabled(false); // 입력이 모두 있을 경우 버튼 활성화
    } else {
      setIsButtonDisabled(true); // 하나라도 없으면 버튼 비활성화
    }
  }, [name, nickName, birthday, phoneNumber]);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <ContentsHeader />
        <S.LoginContainer>
          <S.LoginText isError={nameError}>
            {nameError ? '이름을 입력해주세요.' : '이름'}
          </S.LoginText>
          <S.IconBox>
            <S.LoginInputBox
              placeholder="이름"
              keyboardType="default"
              value={name}
              onChangeText={text => {
                setName(text);
                setNameError(text === '');
              }}
              onBlur={handleName}
            />
            {name !== '' && (
              <S.IconCheck>
                <Check />
              </S.IconCheck>
            )}
          </S.IconBox>
          <S.LoginText isError={nickNameError}>
            {nickNameError ? '닉네임을 입력해주세요.' : '닉네임'}
          </S.LoginText>
          <S.IconBox>
            <S.LoginInputBox
              placeholder="닉네임"
              keyboardType="default"
              value={nickName}
              onChangeText={text => {
                setNickName(text);
                setNickNameError(text === '');
              }}
              onBlur={handleNickname}
            />
            {nickName !== '' && (
              <S.IconCheck>
                <Check />
              </S.IconCheck>
            )}
          </S.IconBox>
          <S.LoginText isError={birthdayError}>
            {birthdayError
              ? '생년월일 8자리를 입력해주세요.'
              : birthday.length < 8
              ? '생년월일 8자리를 입력해주세요.'
              : '생년월일'}
          </S.LoginText>
          <S.IconBox>
            <S.LoginInputBox
              placeholder="예)20010101"
              keyboardType="numeric"
              value={birthday}
              onChangeText={text => {
                setBirthday(text);
                setBirthdayError(
                  text === '' || text.length < 8 || text.length > 8,
                );
              }}
              onBlur={handleBirthday}
            />
            {birthday !== '' && birthday.length === 8 && (
              <S.IconCheck>
                <Check />
              </S.IconCheck>
            )}
          </S.IconBox>
          <S.LoginText isError={phoneNumberError}>
            {phoneNumberError ? '휴대전화 번호를 입력하세요.' : '휴대전화 번호'}
          </S.LoginText>
          <S.IconBox>
            <S.LoginInputBox
              placeholder="휴대전화 번호"
              keyboardType="phone-pad"
              value={phoneNumber}
              onChangeText={text => {
                setPhoneNumber(text);
                setPhoneNumberError(text === '');
              }}
              onBlur={handlePhoneNumber}
            />
            {phoneNumber !== '' && (
              <S.IconCheck>
                <Check />
              </S.IconCheck>
            )}
          </S.IconBox>
          <S.LoginNewBox>
            <S.LoginNewContent>
              <S.LoginNewText>인증약관 전체 동의</S.LoginNewText>
            </S.LoginNewContent>
            <S.LoginNewContent
              //이 조건을 추가해야 버튼 이벤트(클릭시 음영변경)가 발생 안함
              disabled={isButtonDisabled}
              //스타일 변경
              style={{
                backgroundColor: isButtonDisabled ? '#f3f3f3' : '#423cd2',
              }}
              onPress={() => !isButtonDisabled && navigation.navigate('Home')}>
              <S.LoginNewText
                style={{
                  color: isButtonDisabled ? '#bebebe' : '#ffffff',
                }}>
                회원 가입
              </S.LoginNewText>
            </S.LoginNewContent>
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

export default LoginNewPageTwo;
