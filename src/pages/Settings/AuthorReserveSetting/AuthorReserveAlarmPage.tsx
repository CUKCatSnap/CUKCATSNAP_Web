//작가 알람설정 페이지 입니다.
import React, {useEffect, useState} from 'react';
import {SafeAreaView, Text, TextInput, Alert} from 'react-native';
import {fetchAuthorReservationAlarm} from '../../../apis/AuthorReserve/getAuthorReservationAlarm';
import LoginBtn from '../../../components/Login/LoginBtn';
import {useNavigation} from '@react-navigation/native';
import {updateAlarmSettings} from '../../../apis/AuthorReserve/postAlarmSetting';

const AuthorReserveAlarmPage = () => {
  const [alarmSettings, setAlarmSettings] = useState(null); // 설정 데이터를 저장할 상태
  const [contents, setContents] = useState('');
  const [isEditingAlarm, setisEditingAlarm] = useState(false); // 알람 수정 여부
  const navigation = useNavigation();
  // API 호출로 설정 가져오기
  const loadSettings = async () => {
    try {
      const response = await fetchAuthorReservationAlarm();
      const {content} = response.data;
      if (response && response.data) {
        setAlarmSettings(response.data);
        setContents(content || ''); // content가 빈 문자열일 경우, 기본값을 빈 문자열로 설정
      }
    } catch (error) {
      console.log('예약 알림을 불러오는 중 오류 발생: ' + error.message);
    }
  };
  useEffect(() => {
    loadSettings();
  }, []);

  if (!alarmSettings) {
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
      const response = await updateAlarmSettings(requestData); // 변경된 설정을 POST 요청
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

  const handleAlarmChange = (text: string) => {
    setContents(text);
  };

  return (
    <SafeAreaView>
      <Text>작가 예약 전 알림 페이지</Text>
      <Text>내용 :</Text>
      {isEditingAlarm ? (
        <TextInput
          value={contents}
          onChangeText={handleAlarmChange}
          keyboardType="default"
          autoFocus
          onBlur={() => setisEditingAlarm(false)} // 포커스가 벗어나면 편집 모드 종료
        />
      ) : (
        <Text
          onPress={() => setisEditingAlarm(true)} // 텍스트 클릭 시 편집 모드로 전환
        >
          {contents}
        </Text>
      )}
      <LoginBtn text="예약 전 알림 수정하기" onPress={handleSetting} />
    </SafeAreaView>
  );
};

export default AuthorReserveAlarmPage;
