import { createSlice } from "@reduxjs/toolkit";

const userDataSlice = createSlice({
  name: "userData",
  initialState: {
    isAuthenticated: false,
  },
  reducers: {
    updateUser: (state, action) =>
      (state = action.payload
        ? {
            isAuthenticated: true,
            id: 1,
            name: "Sample User",
            email: "sampleuser@gmail.com",
          }
        : { isAuthenticated: false }),
  },
});

export const userDataActions = userDataSlice.actions;
export default userDataSlice;
