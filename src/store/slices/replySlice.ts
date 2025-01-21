// src/redux/repliesSlice.js
import {createSlice} from '@reduxjs/toolkit';

const repliesSlice = createSlice({
  name: 'replies',
  initialState: {
    items: [
      {
        id: 1737448255399, // 부모 댓글 ID
        text: '댓글 1',
        replies: [], // 대댓글 배열
      },
      {
        id: 1737448258798,
        text: '댓글 2',
        replies: [],
      },
    ],
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
      const {parentId, reply} = action.payload; // 부모 댓글의 ID와 대댓글
      const parentReply = state.items.find(item => item.id === parentId); // 부모 댓글 찾기

      if (parentReply) {
        // 부모 댓글의 replies 배열에 대댓글 추가
        parentReply.replies.push(reply);
      }
    },
  },
});

export const {addReply, addSubReply} = repliesSlice.actions;
export default repliesSlice.reducer;
