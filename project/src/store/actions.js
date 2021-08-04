import {createAction} from '@reduxjs/toolkit';

export const ActionType = {
  CHANGE_CITY: 'main/changeCity',
  CHANGE_SORT_TYPE: 'main/changeSortType',
  REDIRECT_TO_ROUTE: 'main/redirectToRoute',
  SET_SERVER_STATUS: 'main/setServerStatus',

  LOAD_OFFERS: 'offers/loadOffers',
  LOAD_REVIEWS: 'offers/loadReviews',
  LOAD_NEARBY_OFFERS: 'offers/loadNearbyOffers',
  LOAD_OFFER: 'offers/loadRoom',

  LOAD_FAVORITES_OFFERS: 'offers/loadFavoritesOffers',
  SET_ARE_FAVORITES_LOADED: 'offers/setAreFavoritesLoaded',

  UPDATE_OFFER: 'offers/updateOffer',
  SET_IS_OFFER_DATA_LOADED: 'offers/setIsOfferDataLoaded',

  REQUIRED_AUTHORIZATION: 'user/requiredAuthorization',
  LOAD_USER_DATA: 'user/loadUserData',
  LOGOUT: 'user/logout',
  LOGIN_ERROR: 'user/error',
};

export const loadOffers = createAction(ActionType.LOAD_OFFERS, (offers) => ({
  payload: offers,
}));

export const loadReviews = createAction(ActionType.LOAD_REVIEWS, (reviews) => ({
  payload: reviews,
}));

export const loadNearbyOffers = createAction(ActionType.LOAD_NEARBY_OFFERS, (offers) => ({
  payload: offers,
}));

export const loadFavoritesOffers = createAction(ActionType.LOAD_FAVORITES_OFFERS, (favoritesOffers) => ({
  payload: favoritesOffers,
}));

export const loadOffer = createAction(ActionType.LOAD_OFFER, (offer) => ({
  payload: offer,
}));

export const loadUserData = createAction(ActionType.LOAD_USER_DATA, (user) => ({
  payload: user,
}));

export const changeCity = createAction(ActionType.CHANGE_CITY, (city) => ({
  payload: city,
}));

export const changeSortType = createAction(ActionType.CHANGE_SORT_TYPE, (sortType) => ({
  payload: sortType,
}));

export const requireAuthorization = createAction(ActionType.REQUIRED_AUTHORIZATION, (status) => ({
  payload: status,
}));

export const redirectToRoute = createAction(ActionType.REDIRECT_TO_ROUTE, (url) => ({
  payload: url,
}));

export const logout = createAction(ActionType.LOGOUT);

export const loginError = createAction(ActionType.LOGIN_ERROR, (message) => ({
  payload: message,
}));

export const setFavoritesLoadingStatus = createAction(ActionType.SET_ARE_FAVORITES_LOADED, (status) => ({
  payload: status,
}));

export const setOfferLoadingStatus = createAction(ActionType.SET_IS_OFFER_DATA_LOADED, (status) => ({
  payload: status,
}));

export const updateOffer = createAction(ActionType.UPDATE_OFFER, (offer) => ({
  payload: offer,
}));

export const setRoomLoadingStatus = createAction(ActionType.SET_ROOM_LOADING_STATUS, (isLoaded) => ({
  payload: isLoaded,
}));

export const setServerStatus = createAction(ActionType.SET_SERVER_STATUS, (status) => ({
  payload: status,
}));

