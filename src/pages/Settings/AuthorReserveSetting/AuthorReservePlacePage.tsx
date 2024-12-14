//작가가 예약을 받을 장소를 조회하는 페이지 입니다.
import React, {useEffect, useState} from 'react';
import {SafeAreaView, Text} from 'react-native';
import {fetchAuthorReservationPlace} from '../../../apis/AuthorReserve/getAuthorReservationPlace';

const AuthorReservePlacePage = () => {
  const [placeSettings, setPlaceSettings] = useState(null); // 설정 데이터를 저장할 상태

  // API 호출로 설정 가져오기
  const loadSettings = async () => {
    try {
      const response = await fetchAuthorReservationPlace();
      if (response && response.data) {
        setPlaceSettings(response.data);
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

  const {content} = placeSettings;
  return (
    <SafeAreaView>
      <Text>작가 예약 장소 조회 페이지</Text>
      <Text>장소 : {content}</Text>
    </SafeAreaView>
  );
};

export default AuthorReservePlacePage;
