//작가가 자신의 상세 정보를 조회하는 api(get)

import apiClient from '../getAccessToken';

export const getAuthorProfile = async () => {
  try {
    // axios 요청 보내기
    const response = await apiClient.get(
      'https://api.catsnap.net/photographer/information/my',
      {
        headers: {
          Authorization: 'Bearer ',
        },
      },
    );

    console.log('작가 상세 정보 응답 데이터:', response.data); // 응답 데이터 확인
    return response.data;
  } catch (error) {
    const status = error.response?.status;

    // ⚠️ 401이면 "유저이기 때문에 당연한 실패" → 로그 남기지 않음
    if (status === 401) {
      return null;
    }
    console.error('요청 실패:', error.response?.data || error.message);
    if (error.response) {
      console.log('응답 상태:', error.response.status);
      console.log('응답 데이터:', error.response.data);
    }
    return null;
  }
};
