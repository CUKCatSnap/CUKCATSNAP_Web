//루트 상태, 디스패치 타입 명명

import {configureStore} from '@reduxjs/toolkit';

const store = configureStore({
  reducer: {},
});

// 스토어의 루트 상태와 디스패치 타입을 내보냄
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
