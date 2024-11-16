import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

// 예약 정보를 가져오는 함수
export const fetchReservations = async () => {
  try {
    // AsyncStorage에서 액세스 토큰을 가져오기
    const accessToken = await AsyncStorage.getItem('accessToken');

    if (!accessToken) {
      console.error('액세스 토큰이 없습니다');
      return;
    }

    // 토큰을 Authorization 헤더에 포함시켜 GET 요청을 보냅니다
    const response = await axios.get(
      'https://api.catsnap.net/reservation/member/my',
      {
        headers: {
          Authorization: `Bearer ${accessToken}`, // Authorization 헤더에 토큰 포함
        },
      },
    );

    console.log('API 응답 데이터:', response.data);

    // 응답 데이터를 처리하고 필요한 부분을 반환
    return response.data;
  } catch (error) {
    console.error(
      'API 요청 실패:',
      error.response?.data?.message || error.message,
    );
  }
};
