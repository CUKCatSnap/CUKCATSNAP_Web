//작가가 자신의 예약 프로그램을 삭제 (delete)
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import apiClient from '../getAccessToken';

export const deleteReservations = async (programid: Number) => {
  try {
    const accessToken = await AsyncStorage.getItem('accessToken');
    if (!accessToken) {
      console.error('액세스 토큰이 없습니다.');
      return null;
    } else {
      console.log(accessToken);
    }

    // 요청 파라미터 설정
    const params = {
      programs: programid,
    };

    // axios 요청 보내기
    const response = await apiClient.delete(
      'https://api.catsnap.net/reservation/photographer/my/program',
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },

        params: {
          programId: params.programs,
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
