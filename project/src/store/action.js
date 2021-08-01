export const ActionType = {
  CHANGE_CITY: 'main/changeCity',
  CHANGE_SORT_TYPE: 'main/changeSortType',
  LOAD_OFFERS: 'main/loadOffers',
  LOAD_REVIEWS: 'reviews/loadReviews',
  LOAD_NEARBY_OFFERS: 'reviews/loadNearbyOffers',
  LOAD_USER_DATA: 'user/loadUserData',
  LOAD_ROOM: 'data/loadRoom',
  REQUIRED_AUTHORIZATION: 'user/requiredAuthorization',
  REDIRECT_TO_ROUTE: 'city/redirectToRoute',
  LOGOUT: 'user/logout',
  LOGIN_ERROR: 'user/error',
  LOAD_USER: 'user/load',

  SET_ROOM_LOADING_STATUS: 'data/setRoomLoadingStatus',
};

export const ActionCreator = {
  loadOffers: (offers) => ({
    type: ActionType.LOAD_OFFERS,
    payload: offers,
  }),
  loadReviews: (reviews) => ({
    type: ActionType.LOAD_REVIEWS,
    payload: reviews,
  }),
  loadUserData: (userData) => ({
    type: ActionType.LOAD_USER_DATA,
    payload: userData,
  }),
  loadNearbyOffers: (offers) => ({
    type: ActionType.LOAD_NEARBY_OFFERS,
    payload: offers,
  }),
  loadRoom: (offer) => ({
    type: ActionType.LOAD_ROOM,
    payload: offer,
  }),
  changeCity: (city) => ({
    type: ActionType.CHANGE_CITY,
    payload: city,
  }),
  changeSortType: (sortType) => ({
    type: ActionType.CHANGE_SORT_TYPE,
    payload: sortType,
  }),
  requireAuthorization: (status) => ({
    type: ActionType.REQUIRED_AUTHORIZATION,
    payload: status,
  }),
  redirectToRoute: (url) => ({
    type: ActionType.REDIRECT_TO_ROUTE,
    payload: url,
  }),
  logout: () => ({
    type: ActionType.LOGOUT,
  }),
  loginError: (message) => ({
    type: ActionType.LOGIN_ERROR,
    payload: message,
  }),
  loadUser: (user) => ({
    type: ActionType.LOAD_USER,
    payload: user,
  }),
  setRoomLoadingStatus: (isLoaded) => ({
    type: ActionType.SET_ROOM_LOADING_STATUS,
    payload: isLoaded,
  }),
};

