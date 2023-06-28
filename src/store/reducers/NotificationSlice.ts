import { createSlice } from "@reduxjs/toolkit";

export const notificationSlice = createSlice({
  name: "notifications",
  reducers: {
    addNotification: (state, action) => {
      state.notifications.push(action.payload);
    },
  },
  initialState: {
    notifications: [],
  },
});

export default notificationSlice.reducer;
