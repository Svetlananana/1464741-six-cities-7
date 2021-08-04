import {
  createReducer
} from '@reduxjs/toolkit';
import {
  requireAuthorization,
  loadUserData,
  logout,
  loginError
} from '../actions';
import {
  AuthorizationStatus
} from '../../const';

const initialState = {
  userData: {},
  authorizationStatus: AuthorizationStatus.UNKNOWN,
  loginError: null,
};

export const user = createReducer(initialState, (builder) => {
  builder
    .addCase(requireAuthorization, (state, action) => {
      state.authorizationStatus = action.payload;
    })
    .addCase(loadUserData, (state, action) => {
      state.userData = action.payload;
      state.loginError = null;
    })
    .addCase(logout, (state, action) => {
      state.authorizationStatus = AuthorizationStatus.NO_AUTH;
    })
    .addCase(loginError, (state, action) => {
      state.loginError = action.payload;
    });
});

