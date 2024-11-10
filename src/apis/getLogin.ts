//자체 로그인 API
import axios from 'axios';

// 자체 로그인 API 요청을 처리하는 함수
export const LoginUser = async userLogin => {
  try {
    const response = await axios.post(
      'https://api.catsnap.net/member/signin/catsnap',
      userLogin,
    );
    console.log('로그인 성공');
    return response.data; // 성공 시 서버의 응답 데이터를 반환
  } catch (error) {
    throw new Error(error.response?.data?.message || 'API Error'); // 에러 메시지 반환
  }
};
