//작가가 예약을 받을 장소를 조회하는 페이지 입니다.
import React, {useEffect, useState} from 'react';
import {SafeAreaView, Text, TextInput, Alert} from 'react-native';
import {fetchAuthorReservationPlace} from '../../../apis/AuthorReserve/getAuthorReservationPlace';
import LoginBtn from '../../../components/Login/LoginBtn';
import {useNavigation} from '@react-navigation/native';
import {updatePlaceSettings} from '../../../apis/AuthorReserve/postPlaceSetting';
import ContentsHeader from '../../../components/ContentsHeader/ContentsHeader';

const AuthorReserveAlarmPage = () => {
  const [placeSettings, setPlaceSettings] = useState(null); // 설정 데이터를 저장할 상태
  const [contents, setContents] = useState('');
  const [isEditingPlace, setisEditingPlace] = useState(false); // 알람 수정 여부
  const navigation = useNavigation();

  // API 호출로 설정 가져오기
  const loadSettings = async () => {
    try {
      const response = await fetchAuthorReservationPlace();
      const {content} = response.data;
      if (response && response.data) {
        setPlaceSettings(response.data);
        setContents(content || ''); // content가 빈 문자열일 경우, 기본값을 빈 문자열로 설정
      }
    } catch (error) {
      console.log('예약 알림을 불러오는 중 오류 발생: ' + error.message);
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
      if (!contents) {
        Alert.alert('변경 사항 없음', '설정을 먼저 변경해주세요.');
        return;
      }
      // 요청할 데이터 형식
      const requestData = {
        content: contents, // 알림 내용
      };
      const response = await updatePlaceSettings(requestData); // 변경된 설정을 POST 요청
      if (response) {
        setContents(contents); // 기존 설정을 업데이트
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

  const handlePlaceChange = (text: string) => {
    setContents(text);
  };

  return (
    <SafeAreaView>
      <ContentsHeader text={'예약 장소 설정'} />
      <Text>작가 자신이 예약을 받을 장소를 조회/수정하는 페이지</Text>
      <Text>내용 :</Text>
      {isEditingPlace ? (
        <TextInput
          value={contents}
          onChangeText={handlePlaceChange}
          keyboardType="default"
          autoFocus
          onBlur={() => setisEditingPlace(false)} // 포커스가 벗어나면 편집 모드 종료
        />
      ) : (
        <Text
          onPress={() => setisEditingPlace(true)} // 텍스트 클릭 시 편집 모드로 전환
        >
          {contents}
        </Text>
      )}
      <LoginBtn text="장소 수정하기" onPress={handleSetting} />
    </SafeAreaView>
  );
};

export default AuthorReserveAlarmPage;
