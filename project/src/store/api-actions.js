import {
  loadOffers,
  loadReviews,
  loadNearbyOffers,
  loadFavoritesOffers,
  loadOffer,
  loadUserData,
  requireAuthorization,
  redirectToRoute,
  logout as logoutUser,
  loginError,
  setOfferLoadingStatus,
  updateOffer,
  setFavoritesLoadingStatus,
  setServerStatus
} from './actions';
import {
  AuthorizationStatus,
  APIRoute,
  AppRoute
} from '../const';
import {
  adaptOfferToClient,
  adaptOffersToClient,
  adaptReviewsToClient,
  adaptUserToClient
} from '../adapter/adapter';
import {
  NameSpace
} from './root-reducer';

export const fetchOffers = () => (dispatch, _getState, api) => (
  api.get(APIRoute.OFFERS)
    .then(({ data }) => adaptOffersToClient(data))
    .then((offers) => dispatch(loadOffers(offers)))
    .catch(() => {
      dispatch(loadOffers([]));
      dispatch(setServerStatus(false));
    })
);

export const fetchReviews = (id) => (dispatch, _getState, api) => (
  api.get(`${APIRoute.REVIEWS}/${id}`)
    .then(({data}) => adaptReviewsToClient(data))
    .then((reviews) => dispatch(loadReviews(reviews)))
    .catch(() => {})
);

export const fetchNearbyOffers = (id) => (dispatch, _getState, api) => (
  api.get(`${APIRoute.OFFERS}/${id}${APIRoute.OFFERS_NEARBY}`)
    .then(({data}) => adaptOffersToClient(data))
    .then((offers) => dispatch(loadNearbyOffers(offers)))
);

export const fetchOffer = (id) => (dispatch, _getState, api) => {
  dispatch(setOfferLoadingStatus(false));
  api.get(`${APIRoute.OFFERS}/${id}`)
    .then(({data}) => dispatch(loadOffer(adaptOfferToClient(data))))
    .then(() => dispatch(setOfferLoadingStatus(true)))
    .catch(() => dispatch(redirectToRoute(AppRoute.NOT_FOUND)));
};

export const fetchFavoritesOffers = () => (dispatch, _getState, api) => {
  dispatch(setFavoritesLoadingStatus(false));
  api.get(APIRoute.FAVORITES)
    .then(({data}) => adaptOffersToClient(data))
    .then((data) => dispatch(loadFavoritesOffers(data)))
    .then(() => dispatch(setFavoritesLoadingStatus(true)))
    .catch(() => dispatch(loadFavoritesOffers([])));
};

export const setFavorites = ({id, status}) => (dispatch, _getState, api) => {
  const auth = _getState()[NameSpace.USER].authorizationStatus;

  if (auth !== AuthorizationStatus.AUTH) {
    dispatch(redirectToRoute(AppRoute.LOGIN));
  } else {
    api.post(`${APIRoute.FAVORITES}/${id}/${status}`)
      .then(({data}) => dispatch(updateOffer(adaptOfferToClient(data))))
      .catch(() => dispatch(redirectToRoute(AppRoute.LOGIN)));
  }
};

export const checkAuth = () => (dispatch, _getState, api) => (
  api.get(APIRoute.LOGIN)
    .then(({data}) => dispatch(loadUserData(adaptUserToClient(data))))
    .then(() => dispatch(requireAuthorization(AuthorizationStatus.AUTH)))
    .catch(() => {})
);

export const login = ({login: email, password}) => (dispatch, _getState, api) => (
  api.post(APIRoute.LOGIN, {email, password})
    .then(({data}) => {
      localStorage.setItem('token', data.token);
      api.defaults.headers['x-token'] = data.token;
      return adaptUserToClient(data);
    })
    .then((user) => dispatch(loadUserData(user)))
    .then(() => dispatch(requireAuthorization(AuthorizationStatus.AUTH)))
    .then(() => dispatch(redirectToRoute(AppRoute.MAIN)))
    .catch((error) => dispatch(loginError(error.message)))
);

export const logout = () => (dispatch, _getState, api) => (
  api.delete(APIRoute.LOGOUT)
    .then(() => localStorage.removeItem('token'))
    .then(() => dispatch(logoutUser()))
    .then(() => dispatch(redirectToRoute(AppRoute.MAIN)))
);

export const postReview = ({id, comment, rating}) =>
  (dispatch, _getState, api) => (
    api.post(`${APIRoute.REVIEWS}/${id}`,
      {comment, rating},
      {comment, rating})
      .then(({data}) => adaptReviewsToClient(data))
      .then((data) => dispatch(loadReviews(data)))
  );
