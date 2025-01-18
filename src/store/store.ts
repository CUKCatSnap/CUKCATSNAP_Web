import {configureStore} from '@reduxjs/toolkit';
import authReducer from './slices/authSlice'; //authSlice 불러오기
import repliesReducer from './slices/replySlice';
import searchReducer from './slices/searchSlice';

const store = configureStore({
  reducer: {
    auth: authReducer, // authSlice를 reducer에 추가
    replies: repliesReducer,
    search: searchReducer,
  },
});

export default store;
