import {configureStore} from '@reduxjs/toolkit';
import authReducer from './authSlice'; // 위에서 만든 authSlice 불러오기

const store = configureStore({
  reducer: {
    auth: authReducer, // authSlice를 reducer에 추가
  },
});

export default store;
