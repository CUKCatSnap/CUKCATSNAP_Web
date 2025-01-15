//특정 달의 공휴일 정보를 가져오는 api
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import apiClient from '../getAccessToken';

export const fetchHoliday = async yearMonth => {
  try {
    const params = {
      yearMonth: yearMonth,
    };
    // axios 요청 보내기
    const response = await apiClient.get('https://api.catsnap.net/holiday', {
      params: params,
    });

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
