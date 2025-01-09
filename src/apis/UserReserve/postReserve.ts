import AsyncStorage from '@react-native-async-storage/async-storage';
import apiClient from '../getAccessToken';

// 유저가 새로운 예약을 만드는 api(POST)
export const postReserve = async requestBody => {
  try {
    // 액세스 토큰 가져오기
    const accessToken = await AsyncStorage.getItem('accessToken');
    if (!accessToken) {
      console.error('액세스 토큰이 없습니다.');
      return null;
    }

    // API 요청 (POST)
    const response = await apiClient.post(
      'https://api.catsnap.net/reservation/member/book',
      requestBody, // 요청 본문 (body)
      {
        headers: {
          Authorization: `Bearer ${accessToken}`, // 인증 토큰 설정
        },
      },
    );

    console.log('응답 데이터:', response.data);
    return response.data; // 서버 응답 반환
  } catch (error) {
    console.error('예약 등록 실패:', error.response?.data || error.message);
    return null; // 실패 시 null 반환
  }
};
