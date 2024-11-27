//작가가 자신의 예약 프로그램을 조회

import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const fetchReservationPrograms = async () => {
  try {
    const accessToken = await AsyncStorage.getItem('accessToken');
    if (!accessToken) {
      console.error('액세스 토큰이 없습니다.');
      return null;
    } else {
      console.log(accessToken);
    }

    // axios 요청 보내기
    const response = await axios.get(
      'https://api.catsnap.net/reservation/photographer/my/program',
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      },
    );

    console.log('응답 데이터:', response.data); // 응답 데이터 확인
    return response.data;
  } catch (error) {
    console.error('요청 실패:', error.response?.data || error.message);
    if (error.response) {
      console.log('응답 상태:', error.response.status);
      console.log('응답 데이터:', error.response.data);
    }
    return null;
  }
};
