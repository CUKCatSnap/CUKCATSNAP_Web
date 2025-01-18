import {createSlice, PayloadAction} from '@reduxjs/toolkit';

interface SearchState {
  history: string[];
}

const initialState: SearchState = {
  history: [],
};

const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    addSearch: (state, action: PayloadAction<string>) => {
      const searchText = action.payload;
      // 중복 제거 후 추가
      state.history = [
        searchText,
        ...state.history.filter(text => text !== searchText),
      ].slice(0, 10);
    },
    deleteSearch: (state, action) => {
      state.history = state.history.filter(text => text !== action.payload); // 검색어 삭제
    },
    clearHistory: state => {
      state.history = [];
    },
  },
});

export const {addSearch, clearHistory, deleteSearch} = searchSlice.actions;

export default searchSlice.reducer;
