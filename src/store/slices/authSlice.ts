//로그인 상태 관리 슬라이스

import {createSlice} from '@reduxjs/toolkit';

// 초기 상태 정의
const initialState = {
  isAuthenticated: false, // 로그인 여부
  isUser: false, // 유저 여부
  isAuthor: false, // 작가 여부
  customer: null, // 로그인한 사용자 정보 (= 작가, 유저 상관없이 현재 로그인한 사람의 데이터)
};

// 슬라이스 생성
//여기에 액션을 정의해주면 된다.
const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    // 로그인 성공 시 호출되는 액션
    loginSuccess: (state, action) => {
      state.isAuthenticated = true;
      state.customer = action.payload; // 사용자 정보 저장
      state.isUser = action.payload.isAuthor ? false : true;
      state.isAuthor = action.payload.isAuthor ?? false;
    },
    // 로그아웃 시 호출되는 액션
    logout: state => {
      state.isAuthenticated = false;
      state.isUser = false;
      state.isAuthor = false;
      state.customer = null;
    },
  },
});

export const {loginSuccess, logout} = authSlice.actions;
export default authSlice.reducer;
