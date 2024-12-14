//작가 알람설정 페이지 입니다.
import React, {useEffect, useState} from 'react';
import {SafeAreaView, Text} from 'react-native';
import {fetchAuthorReservationAlarm} from '../../../apis/AuthorReserve/getAuthorReservationAlarm';

const AuthorReserveAlarmPage = () => {
  const [settings, setSettings] = useState(null); // 설정 데이터를 저장할 상태

  // API 호출로 설정 가져오기
  const loadSettings = async () => {
    try {
      const response = await fetchAuthorReservationAlarm();
      if (response?.data?.data) {
        setSettings(response.data.data); // 데이터를 상태에 저장
      } else {
        console.log('예약 알림을 불러오지 못했습니다.');
      }
    } catch (error) {
      console.log('예약 알림을 불러오는 중 오류 발생: ' + error.message);
    }
  };
  useEffect(() => {
    loadSettings();
  }, []);

  return (
    <SafeAreaView>
      <Text>작가 알람설정 페이지</Text>
    </SafeAreaView>
  );
};

export default AuthorReserveAlarmPage;
