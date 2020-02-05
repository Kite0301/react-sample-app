import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type LoginState = {
  email: string;
}

const loginInitialState: LoginState = {
  email: ''
}

const loginModule = createSlice({
    name: "login",
    initialState: loginInitialState,
    reducers: {
      submit: (state, action: PayloadAction<string>) => {
        state.email = action.payload;
      }
    }
});

export default loginModule;
