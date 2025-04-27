//검색 페이지에서 특정 작가의 상세 정보를 조회하는 api (get)
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import apiClient from '../getAccessToken';

export const fetchAuthorProfileDetail = async (photographerId: number) => {
  try {
    // axios 요청 보내기
    const response = await apiClient.get(
      `https://api.catsnap.net/photographer/information/${photographerId}`,
      {
        headers: {
          Authorization: 'Bearer ',
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
