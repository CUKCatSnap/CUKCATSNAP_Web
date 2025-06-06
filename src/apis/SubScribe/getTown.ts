//3. 동을 조회하는 api입니다.(get)
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import apiClient from '../getAccessToken';

export const fetchAddressTown = async (
  districtId: number,
  page: number,
  size: number,
) => {
  try {
    const accessToken = await AsyncStorage.getItem('accessToken');
    if (!accessToken) {
      console.error('액세스 토큰이 없습니다.');
      return null;
    }

    // 요청 파라미터 설정
    const params = {
      pageable: {
        page: page,
        size: size,
        sort: 'string', //이걸 파라미터로 같이 보내면 오류가 생김
      },
      districtId,
    };

    // axios 요청 보내기
    const response = await apiClient.get(
      'https://api.catsnap.net/address/town',
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },

        params: {
          districtId: params.districtId,
          page: params.pageable.page,
          size: params.pageable.size,
        },
      },
    );
    console.log('전체 응답:', response);
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
