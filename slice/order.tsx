import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosInstance from "../utils/axiosinstance";

export const payment = createAsyncThunk(
  "payment",
  async (data, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.post(`/payment`, data);
      return response.data;
    } catch (error: any) {
      console.error("Error payment :", error);
      if (error.response && error.response.data) {
        return rejectWithValue(error.response.data);
      }
      return rejectWithValue(error.message);
    }
  }
);
export const orderSave = createAsyncThunk(
  "order",
  async (data, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.post(`/order/new`, data);
      return response.data;
    } catch (error: any) {
      console.error("Error in order details :", error);
      if (error.response && error.response.data) {
        return rejectWithValue(error.response.data);
      }
      return rejectWithValue(error.message);
    }
  }
);
const initialState: any = {
  loading: false,
  success: false,
  error: null,
  orderData: null,
  orderDetails: null,
};
const orderSlice = createSlice({
  name: "payment",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(payment.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.success = false;
      })
      .addCase(payment.fulfilled, (state, action) => {
        state.loading = false;
        state.success = true;
        state.orderData = action.payload;
        state.error = null;
      })
      .addCase(payment.rejected, (state: any, action) => {
        state.loading = false;
        state.error = action.payload;
        state.success = false;
      });
    builder
      .addCase(orderSave.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.success = false;
      })
      .addCase(orderSave.fulfilled, (state, action) => {
        state.loading = false;
        state.success = true;
        state.orderDetails = action.payload;
        state.error = null;
      })
      .addCase(orderSave.rejected, (state: any, action) => {
        state.loading = false;
        state.error = action.payload;
        state.success = false;
      });
  },
});

export default orderSlice.reducer;
