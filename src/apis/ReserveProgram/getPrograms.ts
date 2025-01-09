//특정작가의 예약 가능한 프로그램을 조회(사용자->작가)(get)

import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import apiClient from '../getAccessToken';

export const fetchPrograms = async (photographerId: number) => {
  try {
    const accessToken = await AsyncStorage.getItem('accessToken');
    if (!accessToken) {
      console.error('액세스 토큰이 없습니다.');
      return null;
    }

    const params = {
      photographerId: photographerId,
    };
    // axios 요청 보내기
    const response = await apiClient.get(
      'https://api.catsnap.net/reservation/photographer/program',
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
        params: params,
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
