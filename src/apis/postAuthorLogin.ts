//자체 로그인 API (작가)
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

// 자체 로그인 API 요청을 처리하는 함수 (작가)
export const LoginAuthor = async AuthorLogin => {
  try {
    const response = await axios.post(
      'https://api.catsnap.net/photographer/signin/catsnap',
      AuthorLogin,
    );

    // 서버가 응답 헤더에 액세스 토큰을 포함하여 반환
    // 헤더에서 액세스 토큰 추출
    const accessToken = response.headers.authorization;
    if (accessToken) {
      // 액세스 토큰을 "Bearer "를 제거하고 AsyncStorage에 저장
      await AsyncStorage.setItem(
        'accessToken',
        accessToken.replace('Bearer ', ''),
      );
      console.log('액세스 토큰 저장 성공');
    } else {
      console.log('액세스 토큰이 응답 헤더에 없음');
    }
    console.log('로그인 응답 데이터:', response.data);

    console.log('작가로 로그인 성공');
    return response.data; // 성공 시 서버의 응답 데이터를 반환
  } catch (error) {
    throw new Error(error.response?.data?.message || 'API Error'); // 에러 메시지 반환
  }
};
