import {ActionCreator} from './action';
import {AuthorizationStatus, APIRoutes} from '../const';
import {adaptOffersToClient, adaptReviewsToClient} from '../adapter/adapter';

export const fetchOffers = () => (dispatch, getState, api) => (
  api.get(APIRoutes.OFFERS)
    .then(({ data }) => adaptOffersToClient(data))
    .then((offers) => dispatch(ActionCreator.loadOffers(offers)))
  // .then((offers) => console.log(offers));
);

export const fetchReviews = (id) => (dispatch, getState, api) => (
  api.get(`${APIRoutes.REVIEWS}/${id}`)
    .then(({data}) => adaptReviewsToClient(data))
    .then((reviews) => dispatch(ActionCreator.loadReviews(reviews)))
    .catch(() => {})
);

export const checkAuth = () => (dispatch, getState, api) => (
  api.get(APIRoutes.LOGIN)
    .then(() => dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.AUTH)))
    .catch(() => {})
);

export const login = ({login: email, password}) => (dispatch, getState, api) => (
  api.post(APIRoutes.LOGIN, {email, password})
    .then(({data}) => localStorage.setItem('token', data.token))
    .then(() => dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.AUTH)))
);

export const logout = () => (dispatch, getState, api) => (
  api.delete(APIRoutes.LOGOUT)
    .then(() => localStorage.removeItem('token'))
    .then(() => dispatch(ActionCreator.logout()))
);
