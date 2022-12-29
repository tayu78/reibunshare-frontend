import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { IUser } from "../../../types/user.d";
import { signUp, login } from "../../../services/authServices";
import { getUserInfo } from "../../../services/userServices";
import { IBook } from "../../../types/book";

const initialState = {
  isLoading: false,
  isAuthenticated: false,
  userInfo: {} as IUser & { userBooks: IBook[] },
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

export const getUserInformation = createAsyncThunk(
  "user/getUserInfo",
  async (_, { rejectWithValue }) => {
    try {
      const { data, resultType } = await getUserInfo();
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
      state.userInfo = payload.user;
      state.isAuthenticated = true;
      state.userToken = payload.token;
    });
    builder.addCase(userLogin.rejected, (state, { payload }) => {
      state.isLoading = false;
      state.error = payload as string; //TODO: have to change type depend on error handling above
    });
    builder.addCase(getUserInformation.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.success = true;
      state.userInfo = payload.user;
    });
    builder.addCase(getUserInformation.pending, (state, { payload }) => {
      state.isLoading = true;
      state.error = null;
    });

    builder.addCase(getUserInformation.rejected, (state, { payload }) => {
      state.isLoading = false;
      state.error = payload as string; //TODO: have to change type depend on error handling above
    });
  },
});

// export const { } = userSlice.actions;

export default userSlice.reducer;
