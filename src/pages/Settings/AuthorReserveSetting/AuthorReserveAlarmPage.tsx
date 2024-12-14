//작가 알람설정 페이지 입니다.
import React, {useEffect, useState} from 'react';
import {SafeAreaView, Text} from 'react-native';
import {fetchAuthorReservationAlarm} from '../../../apis/AuthorReserve/getAuthorReservationAlarm';

const AuthorReserveAlarmPage = () => {
  const [alarmSettings, setAlarmSettings] = useState(null); // 설정 데이터를 저장할 상태

  // API 호출로 설정 가져오기
  const loadSettings = async () => {
    try {
      const response = await fetchAuthorReservationAlarm();
      if (response && response.data) {
        setAlarmSettings(response.data);
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

  const {content} = alarmSettings;

  return (
    <SafeAreaView>
      <Text>작가 알람설정 페이지</Text>
      <Text>내용 : {content}</Text>
    </SafeAreaView>
  );
};

export default AuthorReserveAlarmPage;
