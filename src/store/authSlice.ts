//로그인 상태 관리 슬라이스

import {createSlice} from '@reduxjs/toolkit';

// 초기 상태 정의
const initialState = {
  isAuthenticated: false, // 로그인 여부
  user: null, // 로그인한 사용자 정보, 작가인지 유저인지 여부도 들어감
};

// 슬라이스 생성
const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    // 로그인 성공 시 호출되는 액션
    loginSuccess: (state, action) => {
      state.isAuthenticated = true;
      state.user = action.payload; // 사용자 정보 저장
    },
    // 로그아웃 시 호출되는 액션
    logout: state => {
      state.isAuthenticated = false;
      state.user = null;
    },
  },
});

export const {loginSuccess, logout} = authSlice.actions;
export default authSlice.reducer;
