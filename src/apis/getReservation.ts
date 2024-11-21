import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const fetchReservations = async (type = 'UPCOMING') => {
  try {
    const accessToken = await AsyncStorage.getItem('accessToken');
    if (!accessToken) {
      console.error('액세스 토큰이 없습니다.');
      return null;
    }

    // 요청 파라미터 설정
    const params = {
      type: type, // 'UPCOMING' 또는 'ALL' 선택
      pageable: {
        page: 0,
        size: 1,
        sort: 'string',
      },
    };

    // axios 요청 보내기
    const response = await axios.get(
      'https://api.catsnap.net/reservation/member/my',
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
        params: {
          type: params.type,
          page: params.pageable.page,
          size: params.pageable.size,
          sort: params.pageable.sort,
        }, // URL 파라미터로 추가
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
