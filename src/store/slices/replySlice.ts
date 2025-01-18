// src/redux/repliesSlice.js
import {createSlice} from '@reduxjs/toolkit';

const repliesSlice = createSlice({
  name: 'replies',
  initialState: {
    items: [], // 댓글 목록 초기 상태
  },
  reducers: {
    // 일반 댓글 추가
    addReply: (state, action) => {
      state.items.push({
        id: action.payload.id, // 댓글 ID
        text: action.payload.text, // 댓글 내용
        replies: [], // 대댓글 저장을 위한 배열
      });
    },

    // 대댓글 추가
    addSubReply: (state, action) => {
      const {parentId, reply} = action.payload;

      // parentId에 해당하는 댓글을 찾음
      const parentComment = state.items.find(item => item.id === parentId);

      if (parentComment) {
        // 대댓글 추가
        parentComment.replies.push(reply);
      }
    },
  },
});

export const {addReply, addSubReply} = repliesSlice.actions;
export default repliesSlice.reducer;
