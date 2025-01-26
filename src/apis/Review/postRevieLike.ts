//리뷰를 작성하는 api 입니다.(POST)
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import apiClient from '../getAccessToken';

export const postReviewLike = async (reviewId: number) => {
  try {
    const accessToken = await AsyncStorage.getItem('accessToken');
    if (!accessToken) {
      console.error('액세스 토큰이 없습니다.');
      return null;
    }
    const params = {
      reviewId: reviewId,
    };
    const response = await apiClient.post(
      `https://api.catsnap.net/review/like/${reviewId}`,
      reviewId,
      {
        headers: {
          Authorization: `Bearer ${accessToken}`, // 액세스 토큰 헤더에 추가
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
