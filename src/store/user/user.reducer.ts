import { createSlice } from '@reduxjs/toolkit';

export type UserState = {
  currentUser: null | {
    accessToken: string;
    email: string;
  };
}

const INITIAL_STATE: UserState = {
  currentUser: null,
};

export const userSlice = createSlice({
  name: 'user',
  initialState: INITIAL_STATE,
  reducers: {
    setCurrentUser(state, action) {
      state.currentUser = action.payload;
    }
  }
});

export const { setCurrentUser } = userSlice.actions;

export const userReducer = userSlice.reducer;
