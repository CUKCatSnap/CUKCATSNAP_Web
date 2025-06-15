//작가가 자기 소개를 수정하는 api (post);
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import apiClient from '../getAccessToken';

export const postPhotographerIntroduction = async (introduction: string) => {
  try {
    const accessToken = await AsyncStorage.getItem('accessToken');
    if (!accessToken) {
      console.error('액세스 토큰이 없습니다.');
      return null;
    }

    // 요청 파라미터 설정
    const params = {
      introduction: introduction,
    };

    // axios 요청 보내기
    const response = await apiClient.post(
      'https://api.catsnap.net/photographer/introduction/my',
      introduction,
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },

        params: params,
      },
    );

    console.log('자기 소개 응답 데이터:', response.data); // 응답 데이터 확인
    return response.data;
  } catch (error) {
    console.error(
      '자기 소개 전송 실패:',
      error.response?.data || error.message,
    );
    if (error.response) {
      console.log('자기 소개 전송 상태:', error.response.status);
      console.log('자기 소개 전송 데이터:', error.response.data);
    }
    return null;
  }
};
