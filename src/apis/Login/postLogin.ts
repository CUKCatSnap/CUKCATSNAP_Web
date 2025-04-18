import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

// 자체 로그인 API 요청을 처리하는 함수 (사용자)
export const LoginUser = async userLogin => {
  try {
    // 로그인 요청
    const response = await axios.post(
      'https://api.catsnap.net/member/signin/catsnap',
      userLogin,
    );

    console.log('로그인 응답 데이터:', response.data); // 응답 데이터 확인

    // 서버가 응답 헤더에 액세스 토큰을 포함하여 반환
    //const accessToken = response.headers.authorization;
    const accessToken = response.data.body.data.accessToken;

    if (accessToken) {
      // 액세스 토큰을 "Bearer "를 제거하고 AsyncStorage에 저장
      await AsyncStorage.setItem('accessToken', accessToken);
      console.log('액세스 토큰 저장 성공');
    } else {
      console.log('액세스 토큰이 응답 헤더에 없음');
    }

    return response.data; // 성공 시 서버의 응답 데이터를 반환
  } catch (error) {
    // 에러 처리
    console.error(
      '로그인 실패:',
      error.response?.data?.message || error.message,
    );
    throw new Error(error.response?.data?.message || 'API Error'); // 에러 메시지 반환
  }
};
