//작가의 예약 시간 형식을 요일에 등록하는 API (POST)
//쿼리 파라미터로 보내는 법
import AsyncStorage from '@react-native-async-storage/async-storage';
import apiClient from '../getAccessToken';

export const postAuthorWeekFormat = async (
  weekday: string,
  timeFormatId: string,
) => {
  try {
    // 액세스 토큰 가져오기
    const accessToken = await AsyncStorage.getItem('accessToken');
    if (!accessToken) {
      console.error('액세스 토큰이 없습니다.');
      return null;
    }

    // 요청 파라미터 설정
    const params = {
      weekday: weekday,
      timeFormatId: timeFormatId,
    };

    // API 요청 (POST)
    const response = await apiClient.post(
      'https://api.catsnap.net/reservation/photographer/my/weekday/timeformat',
      {}, // 요청 본문이 필요 없으므로 빈 객체를 보냄
      {
        headers: {
          Authorization: `Bearer ${accessToken}`, // 인증 토큰 설정
        },
        params: params, // 쿼리 파라미터로 전달
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
