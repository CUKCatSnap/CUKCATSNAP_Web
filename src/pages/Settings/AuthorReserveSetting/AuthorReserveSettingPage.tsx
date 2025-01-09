//작가 예약 설정 페이지 입니다.
import React, {useEffect, useState} from 'react';
import {
  SafeAreaView,
  Text,
  View,
  Switch,
  Alert,
  TextInput,
  ScrollView,
  StyleSheet,
} from 'react-native';
import {fetchSettings} from '../../../apis/AuthorReserve/getSetting';
import LoginBtn from '../../../components/Login/LoginBtn';
import {updateSettings} from '../../../apis/AuthorReserve/postSetting';
import {useNavigation} from '@react-navigation/native';
import ContentsHeader from '../../../components/ContentsHeader/ContentsHeader';
import * as S from './Style';

const AuthorReserveSettingPage = () => {
  const [settings, setSettings] = useState(null); // 설정 데이터를 저장할 상태
  const [editedSettings, setEditedSettings] = useState(null); // 설정 데이터를 저장할 상태
  const [isEnabledOne, setIsEnabledOne] = useState(false);
  const [isEnabledTwo, setIsEnabledTwo] = useState(false);
  const [reserveDate, setReserveDate] = useState('');
  const [isEditingReserveDate, setIsEditingReserveDate] = useState(false); // 예약 가능 일수 수정 여부
  const navigation = useNavigation();
  // API 호출로 설정 가져오기
  const loadSettings = async () => {
    try {
      const response = await fetchSettings();
      if (response && response.data) {
        //get 요청으로 가져온 데이터를 상태에 저장하기
        const {autoReservationAccept, enableOverBooking, preReservationDays} =
          response.data;
        setSettings(response.data);
        setEditedSettings(response.data);
        setIsEnabledOne(autoReservationAccept);
        setIsEnabledTwo(enableOverBooking);
        setReserveDate(preReservationDays);
      } else {
        console.log('설정을 불러오지 못했습니다.');
      }
    } catch (error) {
      console.log('설정을 불러오는 중 오류 발생: ' + error.message);
    }
  };

  useEffect(() => {
    loadSettings();
  }, []);

  //Settings가 초깃값은 null이므로 이걸 넣어줘야 함
  if (!settings) {
    return (
      <SafeAreaView>
        <Text>로딩 중...</Text>
      </SafeAreaView>
    );
  }

  const handleSetting = async () => {
    try {
      if (!editedSettings) {
        Alert.alert('변경 사항 없음', '설정을 먼저 변경해주세요.');
        return;
      }
      const response = await updateSettings(editedSettings); // 변경된 설정을 POST 요청
      if (response) {
        setSettings(editedSettings); // 기존 설정을 업데이트
        Alert.alert(
          '설정 변경 성공',
          '설정이 성공적으로 변경되었습니다.',
          [
            {
              text: '확인',
              onPress: () => {
                navigation.goBack(); // 이전 화면으로 돌아가기
              },
            },
          ],
          {cancelable: false},
        );
      } else {
        Alert.alert('설정 변경 실패', '다시 시도해주세요.');
      }
    } catch (error) {
      console.log('설정 변경 중 오류 발생: ' + error.message);
      Alert.alert('오류', '설정 변경에 실패했습니다.');
    }
  };

  const switchAutoReserve = () => {
    setIsEnabledOne(previousState => !previousState);
    setEditedSettings(prev => ({
      ...prev,
      autoReservationAccept: !isEnabledOne,
    }));
  };

  const switchOverBooking = () => {
    setIsEnabledTwo(previousState => !previousState);
    setEditedSettings(prev => ({
      ...prev,
      enableOverBooking: !isEnabledTwo,
    }));
  };

  const handleReserveDateChange = (text: string) => {
    setReserveDate(text);
    setEditedSettings(prev => ({
      ...prev,
      preReservationDays: parseInt(text, 10), // 숫자로 변환하여 저장
    }));
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <ContentsHeader text={'예약 환경 설정'} />
        <S.SettingContainer>
          <S.SettingBox>
            <S.SettingText>예약 자동 확정</S.SettingText>
            <Switch value={isEnabledOne} onValueChange={switchAutoReserve} />
          </S.SettingBox>

          <S.SettingBox>
            <S.SettingText>예약시 자동 시간 계산</S.SettingText>
            <Switch value={isEnabledTwo} onValueChange={switchOverBooking} />
          </S.SettingBox>
          <S.SettingBox>
            <S.SettingText>미리 받을 예약 일수:</S.SettingText>
            {isEditingReserveDate ? (
              <S.SettingTextInput
                value={reserveDate}
                onChangeText={handleReserveDateChange}
                keyboardType="numeric"
                autoFocus
                onBlur={() => setIsEditingReserveDate(false)} // 포커스가 벗어나면 편집 모드 종료
              />
            ) : (
              <S.SettingText
                onPress={() => setIsEditingReserveDate(true)} // 텍스트 클릭 시 편집 모드로 전환
              >
                {reserveDate}일
              </S.SettingText>
            )}
          </S.SettingBox>
          <S.SettingView>
            <LoginBtn text={'설정 변경하기'} onPress={handleSetting} />
          </S.SettingView>
        </S.SettingContainer>
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
export default AuthorReserveSettingPage;
