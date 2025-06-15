//사용자가 작가의 자기소개를 조회하는 api (get);
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import apiClient from '../getAccessToken';

export const getPhotographerIntroduction = async (photographerId: number) => {
  try {
    // axios 요청 보내기
    const response = await apiClient.get(
      `https://api.catsnap.net/photographer/introduction/${photographerId}`,

      {
        headers: {
          Authorization: 'Bearer ',
        },
      },
    );

    console.log('자기 소개 응답 데이터:', response.data); // 응답 데이터 확인
    return response.data;
  } catch (error) {
    console.error(
      '자기 소개 요청 실패:',
      error.response?.data || error.message,
    );
    if (error.response) {
      console.log('자기 소개 응답 상태:', error.response.status);
      console.log('자기 소개 응답 데이터:', error.response.data);
    }
    return null;
  }
};
