import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
};

export const getMe = createAsyncThunk("auth/me", () =>
  fetch("http://0.0.0.0:1337/auth/users/me", {
    headers: {
      "X-CSRFToken":
        "L5KoPrTvMDM6ihWCZsBfGmpuM4oaxSHkCOSqqjIesPlSW7de9AjcOR8H2hzkqGG1",
    },
  }).then((result) => result.json())
);

export const authSlice = createSlice({
  name: "auth",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(getMe.fulfilled, (state, action) => {
      state.user = action.payload;
    });
  },
  reducers: {},
});

export default authSlice.reducer;
