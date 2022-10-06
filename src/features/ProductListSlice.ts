/* eslint-disable no-param-reassign */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getProducts } from '../api/api';
// eslint-disable-next-line import/no-cycle
import { RootState } from '../App/store';
import { Product } from '../types/Product';

// Define a type for the slice state
interface ProductsListState {
  products: Product[]
  loaded: boolean,
  error: null | string,
}

const initialState: ProductsListState = {
  products: [],
  loaded: false,
  error: null,
};

export const fetchProducts = createAsyncThunk<Product[]>(
  'productsListState/fetchProducts',
  getProducts,
);

export const ProductsListSlice = createSlice({
  name: 'productsListState',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.loaded = false;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.products = action.payload;
        state.loaded = true;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.error = action.error?.message || null;
        state.loaded = true;
      });
  },
});

export const productsList = (state: RootState) => state.productsListState;

export default ProductsListSlice.reducer;
