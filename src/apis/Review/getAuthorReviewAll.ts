//특정 작가의 리뷰를 조회하는 api (get)
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import apiClient from '../getAccessToken';

export const fetchAuthorReviewAll = async (
  photographerId: number,
  type: 'All',
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
      photographerId: photographerId,
      // type: type, // 'UPCOMING' 또는 'ALL' 선택
      pageable: {
        page: page,
        size: size,
        sort: 'string', //이걸 파라미터로 같이 보내면 오류가 생김
      },
    };

    // axios 요청 보내기
    const response = await apiClient.get('https://api.catsnap.net/review', {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },

      params: {
        photographerId,
        'pageable.page': page,
        'pageable.size': size,
      },
    });
    console.log('Request Params:', {photographerId, type, page, size});
    console.log(
      '작가 리뷰 응답 데이터:',
      response.data.data.slicedData.reviewSearchResponseList,
    );

    //console.log('응답 전체 구조:', JSON.stringify(response, null, 2));

    return response.data;
  } catch (error) {
    console.error(
      '작가 리뷰 요청 실패:',
      error.response?.data || error.message,
    );
    console.log('Request URL:', 'https://api.catsnap.net/review');
    console.log('Request Params:', {photographerId, type, page, size});

    if (error.response) {
      console.log('작가 리뷰 응답 상태:', error.response.status);
      console.log('작가 리뷰 응답 데이터:', error.response.data);
    }
    return null;
  }
};
