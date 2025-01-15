//특정작가의 예약 시 주의사항과 예약 가능한 장소 조회(사용자->작가)(get)

import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import apiClient from '../getAccessToken';

export const fetchReserveGuide = async (photographerId: number) => {
  try {
    const params = {
      photographerId: photographerId,
    };
    // axios 요청 보내기
    const response = await apiClient.get(
      'https://api.catsnap.net/reservation/photographer/guidance',
      {
        headers: {
          Authorization: 'Bearer ',
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
