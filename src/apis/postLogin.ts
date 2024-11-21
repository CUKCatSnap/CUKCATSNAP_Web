import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import EncryptedStorage from 'react-native-encrypted-storage';
import CookieManager from '@react-native-cookies/cookies';

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

    const refreshTokenFromHeaders = response.headers.refreshToken; // 리프레시 토큰을 헤더에서 확인
    if (refreshTokenFromHeaders) {
      console.log('헤더에서 리프레시 토큰 확인:', refreshTokenFromHeaders);
      // 리프레시 토큰을 암호화하여 EncryptedStorage에 저장
      await EncryptedStorage.setItem('refreshToken', refreshTokenFromHeaders);
      console.log('리프레시 토큰 헤더에서 암호화 저장 성공');
    } else {
      console.log('리프레시 토큰이 응답 헤더에 없음');
    }

    // 응답 본문에서 리프레시 토큰 확인
    const refreshTokenFromResponse = response.data.refreshToken;
    if (refreshTokenFromResponse) {
      console.log(
        '응답 본문에서 리프레시 토큰 확인:',
        refreshTokenFromResponse,
      );
      // 리프레시 토큰을 암호화하여 EncryptedStorage에 저장
      await EncryptedStorage.setItem('refreshToken', refreshTokenFromResponse);
      console.log('리프레시 토큰 응답 본문에서 암호화 저장 성공');
    } else {
      console.log('응답 본문에서 리프레시 토큰이 없음');
    }

    // 쿠키에서 리프레시 토큰 추출
    await CookieManager.get('https://api.catsnap.net')
      .then(cookies => {
        console.log('쿠키:', cookies); // 쿠키 내용 확인
        const refreshTokenFromCookies = cookies.refreshToken; // 'refreshToken' 쿠키 추출
        if (refreshTokenFromCookies) {
          console.log('쿠키에서 리프레시 토큰 확인:', refreshTokenFromCookies);
          // 리프레시 토큰을 암호화하여 EncryptedStorage에 저장
          EncryptedStorage.setItem('refreshToken', refreshTokenFromCookies);
          console.log('리프레시 토큰 쿠키에서 암호화 저장 성공');
        } else {
          console.log('리프레시 토큰이 쿠키에 없음');
        }
      })
      .catch(error => {
        console.error('쿠키 가져오기 실패:', error);
      });

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
