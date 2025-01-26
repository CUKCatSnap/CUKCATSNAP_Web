import {configureStore} from '@reduxjs/toolkit';
import authReducer from './slices/authSlice'; //authSlice 불러오기
import repliesReducer from './slices/replySlice';
import searchReducer from './slices/searchSlice';
import likeReducer from './slices/likeSlice';

const store = configureStore({
  reducer: {
    auth: authReducer, // authSlice를 reducer에 추가
    replies: repliesReducer,
    search: searchReducer,
    like: likeReducer,
  },
});

export default store;
// RootState 타입 정의
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
