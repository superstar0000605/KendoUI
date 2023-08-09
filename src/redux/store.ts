import { configureStore } from '@reduxjs/toolkit';
import gridsReducer from './reducers/gridsSlice';

export const store = configureStore({
  reducer: {
    grids: gridsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
