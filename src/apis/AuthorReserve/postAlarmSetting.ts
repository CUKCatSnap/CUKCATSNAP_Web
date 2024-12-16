//작가가 자신의 예약 전 알림을 수정하는 api(POST)
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import apiClient from '../getAccessToken';

export const updateAlarmSettings = async contents => {
  try {
    const accessToken = await AsyncStorage.getItem('accessToken');
    if (!accessToken) {
      console.error('액세스 토큰이 없습니다.');
      return null;
    }

    const response = await apiClient.post(
      'https://api.catsnap.net/photographer/my/reservation/notice',
      contents, // 요청 본문에 포함할 데이터
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

export default updateAlarmSettings;
