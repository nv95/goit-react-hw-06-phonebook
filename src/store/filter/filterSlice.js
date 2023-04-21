import { createSlice } from '@reduxjs/toolkit';
import { filterInitialState } from './initialState';

export const filterSlice = createSlice({
  name: 'filter',
  initialState: filterInitialState,
  reducers: {
    updateFilterValue: (state, action) => ({
      ...state,
      filter: action.payload,
    }),
  },
});

export const filterReducer = filterSlice.reducer;
export const { updateFilterValue } = filterSlice.actions;