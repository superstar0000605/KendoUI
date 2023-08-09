import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { IGridsState } from './types';

const initialState: IGridsState = {
  currentPage: 1,
  selectedGrids: [],
  // selectedGridRow: {},
  cid_var: '11201',
  ak_var: 'H43qw5hhBHS6652fGqS',
};

export const gridsSlice = createSlice({
  name: 'grids',
  initialState,
  reducers: {
    selectGrid: (state: IGridsState, action: PayloadAction<string>) => {
      state.selectedGrids.push(action.payload);
      state.currentPage = Math.ceil(state.selectedGrids.length / 4);
    },
    closeGrid: (state: IGridsState, action: PayloadAction<string>) => {
      const filteredSelectedGrids = state.selectedGrids.filter(
        (item) => item !== action.payload
      );
      if (state.currentPage > Math.ceil(filteredSelectedGrids.length / 4)) {
        state.currentPage = Math.ceil(filteredSelectedGrids.length / 4);
      }
      state.selectedGrids = filteredSelectedGrids;
    },
    setCurrentPage: (state, action) => {
      state.currentPage = action.payload;
    },
    // selectGridRow: (state: IGridsState, action) => {
    //   state.selectedGridRow = action.payload;
    // },
  },
});

export const { selectGrid, closeGrid, setCurrentPage } = gridsSlice.actions;

export default gridsSlice.reducer;
