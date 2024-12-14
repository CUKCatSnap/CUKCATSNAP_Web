//작가 예약 설정 페이지 입니다.
import React, {useEffect, useState} from 'react';
import {SafeAreaView, Text} from 'react-native';
import {fetchSettings} from '../../../apis/AuthorReserve/getSetting';
const AuthorReserveSettingPage = () => {
  const [settings, setSettings] = useState(null); // 설정 데이터를 저장할 상태

  // API 호출로 설정 가져오기
  const loadSettings = async () => {
    try {
      const response = await fetchSettings();
      if (response?.data?.data) {
        setSettings(response.data.data); // 데이터를 상태에 저장
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

  return (
    <SafeAreaView>
      <Text>작가 예약 설정 페이지</Text>
    </SafeAreaView>
  );
};

export default AuthorReserveSettingPage;
