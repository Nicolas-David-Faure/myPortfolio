import { createSlice } from '@reduxjs/toolkit';

export const initialState = {
  screenWidth: null,
};

const screenSlice = createSlice({
  name: 'screenSlice',
  initialState,
  reducers: {
    setScreenWidth: (state, action) => {
      state.screenWidth = action.payload;
    },
  },
});

export const { setScreenWidth } = screenSlice.actions;

