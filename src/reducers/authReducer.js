import {LOGIN_FAIL, LOGIN_START, LOGIN_SUCCESS, LOGOUT_FAIL, LOGOUT_START, LOGOUT_SUCCESS, REGISTER_FAIL, REGISTER_START, REGISTER_SUCESS } from "../types";

  
  export const initialState = {
    loading: false,
    currentUser: null,
    error: null,
  };
  
  export default function authReducer(state = initialState, action) {
    switch (action.type) {
      case REGISTER_START: 
      case LOGIN_START:
      case LOGOUT_START:
        return {
            ...state,
            loading: true,
        }
      case LOGOUT_SUCCESS:{
        return {
          ...state,
          currentUser: null,
        }
      }
      case REGISTER_SUCESS: 
      case LOGIN_SUCCESS:
        return {
            ...state,
            loading: false,
            currentUser: action.payload,
        }
      
      case REGISTER_FAIL:
      case LOGIN_FAIL: 
      case LOGOUT_FAIL:
        return {
          ...state,
          loading: true,
          error: action.payload,
        }
      default:
        return state;
    }
  }
  