import {createSlice, PayloadAction} from '@reduxjs/toolkit';

interface LikeState {
  likedPosts: Record<number, boolean>; // 리뷰 ID를 key로 하고, 좋아요 상태를 value로 저장
}

const initialState: LikeState = {
  likedPosts: {},
};

const likeSlice = createSlice({
  name: 'like',
  initialState,
  reducers: {
    toggleLike: (state, action: PayloadAction<number>) => {
      const reviewId = action.payload;
      state.likedPosts[reviewId] = !state.likedPosts[reviewId]; // 상태 반전
    },
  },
});

export const {toggleLike} = likeSlice.actions;
export default likeSlice.reducer;
