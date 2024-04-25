import { createSlice } from '@reduxjs/toolkit';

 const initialState = {
  isDraggin: false,
  cardIsHovered: false,
};

export const projectsSlice = createSlice({
  name: 'projectsSlice',
  initialState,
  reducers: {
    setIsDragging: (state, { payload }) => {
      state.isDraggin = payload;
    },
    setCardIsHovered: (state, { payload }) => {
      state.isModalOpen = payload;
    }
  },
});

export const { setIsDragging  , setCardIsHovered} = projectsSlice.actions;

