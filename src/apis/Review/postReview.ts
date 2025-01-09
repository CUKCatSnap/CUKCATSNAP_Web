//리뷰를 작성하는 api 입니다.(POST)
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import apiClient from '../getAccessToken';

//reservationData를 만들어서 여기까지 가져오고
//가져온 데이터를 post요청으로 보내면 된다

export const createReview = async requestBody => {
  try {
    const accessToken = await AsyncStorage.getItem('accessToken');
    if (!accessToken) {
      console.error('액세스 토큰이 없습니다.');
      return null;
    }

    const response = await apiClient.post(
      'https://api.catsnap.net/review',
      requestBody, // 요청 본문에 포함할 데이터
      {
        headers: {
          Authorization: `Bearer ${accessToken}`, // 액세스 토큰 헤더에 추가
        },
      },
    );

    console.log('응답 데이터:', response.data);
    return response.data;
  } catch (error) {
    console.error('예약 생성 실패:', error.response?.data || error.message);
    return null;
  }
};
