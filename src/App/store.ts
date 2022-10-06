/* eslint-disable import/no-cycle */
import { configureStore } from '@reduxjs/toolkit';
import productListReducer from '../features/ProductListSlice';

export const store = configureStore({
  reducer: {
    productsListState: productListReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
