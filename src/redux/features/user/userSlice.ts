import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { IUser } from "../../../types/user.d";
import { signUp, login } from "../../../services/authServices";

const initialState = {
  isLoading: false,
  isAuthenticated: false,
  userInfo: {} as IUser,
  userToken: null,
  error: null as null | string, //TODO: have to change type depend on error handling bellow
  success: false,
};

export const registerUser = createAsyncThunk(
  "user/register",
  async (
    { email, username, accountName, password }: IUser,
    { rejectWithValue }
  ) => {
    try {
      const { data, resultType } = await signUp({
        email,
        username,
        accountName,
        password,
      });
      if (resultType === "error") {
        throw new Error(data.message);
      }

      return data;
    } catch (err) {
      //TODO: more detailed error handling
      return rejectWithValue("Unexpected Error Occurred");
    }
  }
);

export const userLogin = createAsyncThunk(
  "user/login",
  async ({ email, password }: IUser, { rejectWithValue }) => {
    try {
      const { data, resultType } = await login({ email, password } as IUser);
      console.log("login data: ", data);
      if (resultType === "error") {
        throw new Error(data.message);
      }
      return data;
    } catch (err) {
      //TODO: more detailed error handling
      return rejectWithValue("Unexpected Error Occurred");
    }
  }
);

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(registerUser.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    });
    builder.addCase(registerUser.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.success = true;
      console.log("payload", payload);
      state.userInfo = payload.user;
      state.isAuthenticated = true;
      state.userToken = payload.token;
    });
    builder.addCase(registerUser.rejected, (state, { payload }) => {
      state.isLoading = false;
      state.error = payload as string; //TODO: have to change type depend on error handling above
    });

    builder.addCase(userLogin.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    });
    builder.addCase(userLogin.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.success = true;
      console.log("payload", payload);
      state.userInfo = payload.user;
      state.isAuthenticated = true;
      state.userToken = payload.token;
    });
    builder.addCase(userLogin.rejected, (state, { payload }) => {
      state.isLoading = false;
      state.error = payload as string; //TODO: have to change type depend on error handling above
    });
  },
});

// export const { } = userSlice.actions;

export default userSlice.reducer;
