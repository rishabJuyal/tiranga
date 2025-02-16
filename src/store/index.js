import { configureStore } from "@reduxjs/toolkit";
import alertSlice from "./alert";
import userDataSlice from "./userData";
import { alertActions } from "./alert";
import { userDataActions } from "./userData";

export const store = configureStore({
  reducer: {
    showAlert: alertSlice.reducer,
    userData: userDataSlice.reducer,
  },
});

export { alertActions, userDataActions };
