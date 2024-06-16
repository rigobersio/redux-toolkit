import { configureStore } from '@reduxjs/toolkit';
import userReducer from './userSlice';   // de donde sale userReducer ... de userSlice.reducer???

export const store = configureStore({
  reducer: {
    user: userReducer
  },
})