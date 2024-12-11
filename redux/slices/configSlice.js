import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import axios from 'axios';

export const getConfigFile = createAsyncThunk(
  'getConfig/fetch',
  async function (fileNameArr) {
    const promiseArr = fileNameArr.map(fileName =>
      axios
        .get(`https://test.unisab.ru/public/${fileName}`)
        .then(data => data.data),
    );
    const resp = await Promise.all(promiseArr);
    const data = resp.reduce((acc, cur) => {
      return {...acc, ...cur};
    }, {});
    return data;
  },
);

const initialState = {
  configFront: null,
};

const configSlice = createSlice({
  name: 'configSlice',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(getConfigFile.fulfilled, (state, action) => {
      state.configFront = action.payload;
    });
  },
});

export default configSlice.reducer;
