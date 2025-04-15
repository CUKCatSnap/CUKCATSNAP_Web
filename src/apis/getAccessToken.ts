//액세스 토큰 만료 시 리프레시 토큰에서 액세스 토큰 받아옴
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

// 리프레시 토큰으로 액세스 토큰 갱신하기 (GET 요청)
const refreshAccessToken = async () => {
  try {
    // GET 요청을 보내면서 쿼리 파라미터로 refreshToken 포함
    const response = await axios.get(
      'https://api.catsnap.net/refresh/access-token',
      {
        params: {refreshToken: 'string'},
        withCredentials: true, // 쿠키 사용 신호 보내기 (이러면 따로 저장 안해도 사용할수있음)
      },
    );

    // 서버가 새로운 액세스 토큰을 반환하면
    const newAccessToken = response.data.body.data.accessToken;
    if (newAccessToken) {
      await AsyncStorage.setItem('accessToken', newAccessToken);
      console.log('새로운 액세스 토큰 저장 완료');
      return;
    } else {
      throw new Error('새로운 액세스 토큰을 받지 못했습니다.');
    }
  } catch (error) {
    console.error('토큰 갱신 실패:', error.response?.data || error.message);
    throw error;
  }
};

// Axios 인스턴스 생성
const createApiClient = () => {
  const apiClient = axios.create({
    baseURL: 'https://api.catsnap.net',
    withCredentials: true, // 쿠키 사용
  });

  // 요청 인터셉터: 액세스 토큰 자동 추가
  apiClient.interceptors.request.use(
    async config => {
      const accessToken = await AsyncStorage.getItem('accessToken');
      if (accessToken) {
        config.headers.Authorization = `Bearer ${accessToken}`;
      }
      return config;
    },
    error => Promise.reject(error),
  );

  // 응답 인터셉터: 401 오류 발생 시 토큰 갱신 및 재요청
  apiClient.interceptors.response.use(
    response => response,
    async error => {
      const originalRequest = error.config;

      // 401 오류 발생 시 토큰 갱신
      if (error.response?.status === 401 && !originalRequest._retry) {
        originalRequest._retry = true;
        try {
          const newAccessToken = await refreshAccessToken(); // GET 요청으로 액세스 토큰 갱신
          originalRequest.headers.Authorization = `Bearer ${newAccessToken}`;
          return apiClient(originalRequest); // 재요청
        } catch (refreshError) {
          return Promise.reject(refreshError);
        }
      }

      return Promise.reject(error);
    },
  );

  return apiClient;
};

const apiClient = createApiClient();
export default apiClient;
