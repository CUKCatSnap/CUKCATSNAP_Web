//회원가입 API (작가)
import axios from 'axios';

// 회원가입 API 요청을 처리하는 함수
export const registerAuthor = async AuthorData => {
  try {
    const response = await axios.post(
      'https://api.catsnap.net/photographer/signup/catsnap',
      AuthorData,
    );
    return response.data; // 성공 시 서버의 응답 데이터를 반환
  } catch (error) {
    throw new Error(error.response?.data?.message || 'API Error'); // 에러 메시지 반환
  }
};
