import { createSlice } from '@reduxjs/toolkit';

 const initialState = {
  menuDropdown: false,
  isHeaderVisible: true,
};

export const activityBarSlice = createSlice({
  name: 'activityBarSlice',
  initialState,
  reducers: {
    setToggleMenuDropdown: (state, action) => {
      state.menuDropdown = action.payload;
    },
    setHeaderVisibility: (state, action) => {
      state.isHeaderVisible = action.payload;
    },
  },
});

export const { setToggleMenuDropdown, setHeaderVisibility } = activityBarSlice.actions;

