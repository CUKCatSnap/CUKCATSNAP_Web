//작가 자기 소개 설정 페이지 입니다.
import React, {useEffect, useState} from 'react';
import {
  SafeAreaView,
  View,
  Text,
  TextInput,
  Alert,
  StyleSheet,
  ScrollView,
} from 'react-native';
import LoginBtn from '../../../components/Login/LoginBtn';
import {useNavigation} from '@react-navigation/native';
import ContentsHeader from '../../../components/ContentsHeader/ContentsHeader';
import * as S from './Style';
import {getPhotographerIntroductionAuthor} from '../../../apis/Information/getPhotographerIntroductionAuthor';
import {postPhotographerIntroduction} from '../../../apis/Information/postPhotographerIntroduction';

const AuthorIntroductionPage = () => {
  const [placeSettings, setPlaceSettings] = useState(null); // 설정 데이터를 저장할 상태
  const [introduction, setIntroduction] = useState('');
  const [isEditingPlace, setisEditingPlace] = useState(false); // 알람 수정 여부
  const navigation = useNavigation();

  // API 호출로 설정 가져오기
  const loadSettings = async () => {
    try {
      const response = await getPhotographerIntroductionAuthor();
      const {introduction} = response.data;
      if (response && response.data) {
        setPlaceSettings(response.data);
        setIntroduction(introduction || ''); // introduction이 빈 문자열일 경우, 기본값을 빈 문자열로 설정
      }
    } catch (error) {
      console.log('자기 소개를 불러오는 중 오류 발생: ' + error.message);
    }
  };
  useEffect(() => {
    loadSettings();
  }, []);

  if (!placeSettings) {
    return (
      <SafeAreaView>
        <Text>로딩 중...</Text>
      </SafeAreaView>
    );
  }

  const handleSetting = async () => {
    try {
      if (!introduction) {
        Alert.alert('변경 사항 없음', '텍스트가 비어 있습니다.');
        return;
      }

      const response = await postPhotographerIntroduction(introduction); // 변경된 설정을 POST 요청
      if (response) {
        setIntroduction(introduction); // 기존 설정을 업데이트
        Alert.alert(
          '자기 소개 변경 성공',
          '자기 소개가 성공적으로 변경되었습니다.',
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
        Alert.alert('자기 소개 변경 실패', '다시 시도해주세요.');
      }
    } catch (error) {
      console.log('자기 소개 변경 중 오류 발생: ' + error.message);
      Alert.alert('오류', '설정 변경에 실패했습니다.');
    }
  };

  const handlePlaceChange = (text: string) => {
    setIntroduction(text);
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <ContentsHeader text={'자기 소개 설정'} />

        <S.SettingContainer>
          {isEditingPlace ? (
            <S.SettingTextInput
              value={introduction}
              onChangeText={handlePlaceChange}
              numberOfLines={5}
              keyboardType="default"
              placeholder=""
              multiline={true}
              textAlignVertical="top" // 텍스트 위쪽 정렬
              autoFocus
              onBlur={() => setisEditingPlace(false)} // 포커스가 벗어나면 편집 모드 종료
            />
          ) : (
            <S.SettingBoxText
              onPress={() => setisEditingPlace(true)} // 텍스트 클릭 시 편집 모드로 전환
            >
              {introduction}
            </S.SettingBoxText>
          )}
          <LoginBtn text="자기 소개 수정하기" onPress={handleSetting} />
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
export default AuthorIntroductionPage;
