//작가 예약 설정 페이지 입니다.
import React, {useEffect, useState} from 'react';
import {SafeAreaView, Text, View} from 'react-native';
import {fetchSettings} from '../../../apis/AuthorReserve/getSetting';
const AuthorReserveSettingPage = () => {
  const [settings, setSettings] = useState(null); // 설정 데이터를 저장할 상태

  // API 호출로 설정 가져오기
  const loadSettings = async () => {
    try {
      const response = await fetchSettings();
      if (response && response.data) {
        setSettings(response.data);
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
  const {
    autoReservationAccept,
    enableOverBooking,
    preReservtionAccept,
    enableationDays,
  } = settings;

  return (
    <SafeAreaView>
      <Text>작가 예약 설정 페이지</Text>
      <View>
        <Text>
          자동 예약 수락: {autoReservationAccept ? '활성화' : '비활성화'}
        </Text>
        <Text>오버북킹 허용: {enableOverBooking ? '활성화' : '비활성화'}</Text>
        <Text>
          사전 예약 수락: {preReservtionAccept ? '활성화' : '비활성화'}
        </Text>
        <Text>예약 가능 일수: {enableationDays}일</Text>
      </View>
    </SafeAreaView>
  );
};

export default AuthorReserveSettingPage;
