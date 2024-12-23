import AsyncStorage from '@react-native-async-storage/async-storage';
import apiClient from '../getAccessToken';

// 작가의 예약 시간 형식을 등록하는 API (POST)
export const postAuthorTimeFormat = async (
  formatName: string,
  startTimeList: string,
) => {
  try {
    // 액세스 토큰 가져오기
    const accessToken = await AsyncStorage.getItem('accessToken');
    if (!accessToken) {
      console.error('액세스 토큰이 없습니다.');
      return null;
    }

    // 요청 바디 (서버가 기대하는 형식에 맞게 설정)
    const requestBody = {
      formatName: formatName, // 형식 이름
      startTimeList: startTimeList, // 시간 리스트
    };

    // API 요청 (POST)
    const response = await apiClient.post(
      'https://api.catsnap.net/reservation/photographer/my/timeformat',
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
    console.error(
      '예약 시간 형식 등록 실패:',
      error.response?.data || error.message,
    );
    return null; // 실패 시 null 반환
  }
};
