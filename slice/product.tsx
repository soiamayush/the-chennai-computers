import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosInstance from "../utils/axiosinstance";

export const AllProduct = createAsyncThunk(
  "product/AllProduct",
  async (
    {
      maxPrice = 500000,
      minPrice = 500,
      keyword = "",
      currentPage = 1,
      sorting = "",
    }: any,
    { rejectWithValue }
  ) => {
    try {
      const response = await axiosInstance.get(
        `/products?keyword=${keyword}&page=${currentPage}&price[lte]=${maxPrice}&price[gte]=${minPrice}&sort=${sorting}`
      );
      return response.data;
    } catch (error: any) {
      console.error("Error during getting products:", error);
      if (error.response && error.response.data) {
        return rejectWithValue(error.response.data);
      }
      return rejectWithValue(error.message);
    }
  }
);
export const product = createAsyncThunk(
  "product",
  async (id, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.get(`/product/${id}`);
      return response.data;
    } catch (error: any) {
      console.error("Error during getting product:", error);
      if (error.response && error.response.data) {
        return rejectWithValue(error.response.data);
      }
      return rejectWithValue(error.message);
    }
  }
);

export const cartHandler = createAsyncThunk(
  "cart",
  async (formdata, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.post(`/cart`, formdata);
      return response.data;
    } catch (error: any) {
      console.error("Error during cart handler:", error);
      if (error.response && error.response.data) {
        return rejectWithValue(error.response.data);
      }
      return rejectWithValue(error.message);
    }
  }
);
export const getcart = createAsyncThunk(
  "cart/getcart",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.get(`/getcart`);
      return response.data;
    } catch (error: any) {
      console.error("Error during cart get:", error);
      if (error.response && error.response.data) {
        return rejectWithValue(error.response.data);
      }
      return rejectWithValue(error.message);
    }
  }
);

const initialState = {
  loading: false,
  success: false,
  error: null,
  allProduct: null,
  singleProduct: null,
  message: "",
  cartData: null,
};
const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(AllProduct.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.success = false;
      })
      .addCase(AllProduct.fulfilled, (state, action) => {
        state.loading = false;
        state.success = true;
        state.allProduct = action.payload;
        state.error = null;
      })
      .addCase(AllProduct.rejected, (state: any, action) => {
        state.loading = false;
        state.error = action.payload;
        state.success = false;
      });

    builder
      .addCase(product.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.success = false;
      })
      .addCase(product.fulfilled, (state, action) => {
        state.loading = false;
        state.success = true;
        state.singleProduct = action.payload;
        state.error = null;
      })
      .addCase(product.rejected, (state: any, action) => {
        state.loading = false;
        state.error = action.payload;
        state.success = false;
      });
    builder
      .addCase(cartHandler.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.success = false;
      })
      .addCase(cartHandler.fulfilled, (state, action) => {
        state.loading = false;
        state.success = true;
        state.error = null;
        state.message = action.payload;
      })
      .addCase(cartHandler.rejected, (state: any, action) => {
        state.loading = false;
        state.error = action.payload;
        state.success = false;
      });
    builder
      .addCase(getcart.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.success = false;
      })
      .addCase(getcart.fulfilled, (state, action) => {
        state.loading = false;
        state.success = true;
        state.error = null;
        state.cartData = action.payload;
      })
      .addCase(getcart.rejected, (state: any, action) => {
        state.loading = false;
        state.error = action.payload;
        state.success = false;
      });
  },
});

export default productSlice.reducer;
