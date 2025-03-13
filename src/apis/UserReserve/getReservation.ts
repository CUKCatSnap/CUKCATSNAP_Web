//유저의 예약 목록을 불러오는 api입니다.(post)
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import apiClient from '../getAccessToken';

export const fetchReservations = async (type = 'All', page, size) => {
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
        page: page,
        size: size,
        sort: 'string', //이걸 파라미터로 같이 보내면 오류가 생김
      },
    };

    // axios 요청 보내기
    const response = await apiClient.get(
      'https://api.catsnap.net/reservation/member/my',
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },

        params: {
          type: params.type,
          page: params.pageable.page,
          size: params.pageable.size,
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
