import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import axios from 'axios';

export const getNews = createAsyncThunk('getNews/fetch', async function () {
  const resp = await axios.get(`https://test.unisab.ru/public/news.json`);
  return resp.data;
});

const initialState = {
  news: null,
  isLoading: true,
};

const newsSlice = createSlice({
  name: 'newsSlice',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(
      getNews.pending,
      state => {
        state.isLoading = true;
      },
      builder.addCase(getNews.fulfilled, (state, action) => {
        state.news = action.payload;
        state.isLoading = false;
      }),
    );
  },
});

export default newsSlice.reducer;
