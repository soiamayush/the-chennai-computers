import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosInstance from "../utils/axiosinstance";

export const RegisterUser = createAsyncThunk(
  "user/register",
  async (data: FormData, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.post("/register", data);
      return response.data;
    } catch (error: any) {
      console.error("Error during registration:", error);
      if (error.response && error.response.data) {
        return rejectWithValue(error.response.data);
      }
      return rejectWithValue(error.message);
    }
  }
);
export const loginUser = createAsyncThunk(
  "user/login",
  async (data: FormData, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.post("/login", data);
      return response.data;
    } catch (error: any) {
      console.error("Error during Login:", error);
      if (error.response && error.response.data) {
        return rejectWithValue(error.response.data);
      }
      return rejectWithValue(error.message);
    }
  }
);
export const forgetPassword = createAsyncThunk(
  "user/forgetpass",
  async (data: FormData, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.post(`/password/forgot`, data);
      return response.data;
    } catch (error: any) {
      console.error("Error during forget password :", error);
      if (error.response && error.response.data) {
        return rejectWithValue(error.response.data);
      }
      return rejectWithValue(error.message);
    }
  }
);
export const resetpassword = createAsyncThunk(
  "user/resetpass",
  async (token: any, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.put(`/password/reset/${token}`);
      return response.data;
    } catch (error: any) {
      console.error("Error during reset password :", error);
      if (error.response && error.response.data) {
        return rejectWithValue(error.response.data);
      }
      return rejectWithValue(error.message);
    }
  }
);
export const changePassword = createAsyncThunk(
  "user/changepass",
  async (data: any, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.put(`/password/update`, data);
      return response.data;
    } catch (error: any) {
      console.error("Error during change password :", error);
      if (error.response && error.response.data) {
        return rejectWithValue(error.response.data);
      }
      return rejectWithValue(error.message);
    }
  }
);

export const updateUser = createAsyncThunk(
  "user/updateuser",
  async (data: any, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.put(`/me/update`, data);
      return response.data;
    } catch (error: any) {
      console.error("Error during update user :", error);
      if (error.response && error.response.data) {
        return rejectWithValue(error.response.data);
      }
      return rejectWithValue(error.message);
    }
  }
);
export const loaduser = createAsyncThunk(
  "user/me",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.get(`/me`);
      return response.data;
    } catch (error: any) {
      console.error("Error during load user :", error);
      if (error.response && error.response.data) {
        return rejectWithValue(error.response.data);
      }
      return rejectWithValue(error.message);
    }
  }
);

const initialState = {
  userData: null,
  loading: false,
  error: null,
  success: false,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(RegisterUser.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.success = false;
      })
      .addCase(RegisterUser.fulfilled, (state, action) => {
        state.loading = false;
        state.success = true;
        state.userData = action.payload;
        state.error = null;
      })
      .addCase(RegisterUser.rejected, (state: any, action) => {
        state.loading = false;
        state.error = action.payload;
        state.success = false;
      });
    builder
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.success = false;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.loading = false;
        state.success = true;
        state.userData = action.payload;
        state.error = null;
      })
      .addCase(loginUser.rejected, (state: any, action) => {
        state.loading = false;
        state.error = action.payload;
        state.success = false;
      });
    builder
      .addCase(forgetPassword.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.success = false;
      })
      .addCase(forgetPassword.fulfilled, (state, action) => {
        state.loading = false;
        state.success = true;
        state.error = null;
      })
      .addCase(forgetPassword.rejected, (state: any, action) => {
        state.loading = false;
        state.error = action.payload;
        state.success = false;
      });
    builder
      .addCase(resetpassword.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.success = false;
      })
      .addCase(resetpassword.fulfilled, (state, action) => {
        state.loading = false;
        state.success = true;
        state.error = null;
      })
      .addCase(resetpassword.rejected, (state: any, action) => {
        state.loading = false;
        state.error = action.payload;
        state.success = false;
      });
    builder
      .addCase(changePassword.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.success = false;
      })
      .addCase(changePassword.fulfilled, (state, action) => {
        state.loading = false;
        state.success = true;
        state.error = null;
      })
      .addCase(changePassword.rejected, (state: any, action) => {
        state.loading = false;
        state.error = action.payload;
        state.success = false;
      });
    builder
      .addCase(loaduser.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.success = false;
      })
      .addCase(loaduser.fulfilled, (state, action) => {
        state.loading = false;
        state.success = true;
        state.error = null;
        state.userData = action.payload.user;
      })
      .addCase(loaduser.rejected, (state: any, action) => {
        state.loading = false;
        state.error = action.payload;
        state.success = false;
      });
    builder
      .addCase(updateUser.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.success = false;
      })
      .addCase(updateUser.fulfilled, (state, action) => {
        state.loading = false;
        state.success = true;
        state.error = null;
        state.userData = action.payload.user;
      })
      .addCase(updateUser.rejected, (state: any, action) => {
        state.loading = false;
        state.error = action.payload;
        state.success = false;
        state.userData = null;
      });
  },
});

export default userSlice.reducer;
