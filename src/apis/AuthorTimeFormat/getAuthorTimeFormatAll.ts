//작가가 자신의 요일별 예약 설정을 조회하는 api
//환결설정 => 요일별 예약 설정에서 월요일~일요일, 공휴일의 예약 시간 설정을 가져옵니다.
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import apiClient from '../getAccessToken';

export const fetchTimeFormatAll = async () => {
  try {
    const accessToken = await AsyncStorage.getItem('accessToken');
    if (!accessToken) {
      console.error('액세스 토큰이 없습니다.');
      return null;
    }

    // axios 요청 보내기
    const response = await apiClient.get(
      'https://api.catsnap.net/reservation/photographer/my/weekday/timeformat/all',
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      },
    );

    console.log('요일별 응답 데이터:', response.data); // 응답 데이터 확인
    return response.data;
  } catch (error) {
    console.error(
      '요일별 응답 데이터 요청 실패:',
      error.response?.data || error.message,
    );
    if (error.response) {
      console.log('응답 상태:', error.response.status);
      console.log('응답 데이터:', error.response.data);
    }
    return null;
  }
};
