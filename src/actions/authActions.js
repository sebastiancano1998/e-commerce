import { auth } from "../firebase.config";


import {
  LOGIN_FAIL,
  LOGIN_SUCCESS,
  LOGIN_START,
  REGISTER_FAIL,
  REGISTER_START,
  REGISTER_SUCESS,
  LOGOUT_START,
  LOGOUT_SUCCESS,
  LOGOUT_FAIL,
} from "../types";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from "firebase/auth";


export const registerStart = () => ({
  type: REGISTER_START,
});

export const registerSuccess = (user) => ({
  type: REGISTER_SUCESS,
  payload: user,
});

export const registerFail = (error) => ({
  type: REGISTER_FAIL,
  payload: error,
});

export const loginStart = () => ({
  type: LOGIN_START,
});

export const loginSuccess = (user) => ({
  type: LOGIN_SUCCESS,
  payload: user,
});

export const loginFail = (error) => ({
  type: LOGIN_FAIL,
  payload: error,
});

export const logoutStart = () => ({
  type: LOGOUT_START,
});

export const logoutSuccess = () => ({
  type: LOGOUT_SUCCESS,
});

export const logoutFail = (error) => ({
  type: LOGOUT_FAIL,
  payload: error,
});
