import {NameSpace} from '../root-reducer';

export const getUserData = (state) => state[NameSpace.USER].userData;
export const getUserEmail = (state) => state[NameSpace.USER].userData.email;
export const getUserAvatarUrl = (state) => state[NameSpace.USER].userData.avatarUrl;
export const getAuthorizationStatus = (state) => state[NameSpace.USER].authorizationStatus;
export const getLoginError = (state) => state[NameSpace.USER].loginError;

