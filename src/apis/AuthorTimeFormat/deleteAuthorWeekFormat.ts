//작가가 자신의 요일별 예약 시간을 삭제 (delete)
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import apiClient from '../getAccessToken';

export const deleteAuthorWeekFormat = async (weekday: string) => {
  try {
    const accessToken = await AsyncStorage.getItem('accessToken');
    if (!accessToken) {
      console.error('액세스 토큰이 없습니다.');
      return null;
    }

    // 요청 파라미터 설정
    const params = {
      timeFormat: weekday,
    };

    // axios 요청 보내기
    const response = await apiClient.delete(
      'https://api.catsnap.net/reservation/photographer/my/weekday/timeformat',
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },

        params: {
          weekday: params.timeFormat,
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
