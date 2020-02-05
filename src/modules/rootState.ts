import { combineReducers } from "@reduxjs/toolkit";
import loginModule, { LoginState } from "./loginModule";

export interface RootState {
  login: LoginState;
}

export const rootReducer = combineReducers({
  login: loginModule.reducer
});
