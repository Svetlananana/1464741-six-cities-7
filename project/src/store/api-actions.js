import {ActionCreator} from './action';
import {AuthorizationStatus, APIRoute, AppRoute} from '../const';
import {adaptOfferToClient, adaptOffersToClient, adaptReviewsToClient, adaptUserToClient} from '../adapter/adapter';

export const fetchOffers = () => (dispatch, getState, api) => (
  api.get(APIRoute.OFFERS)
    .then(({ data }) => adaptOffersToClient(data))
    .then((offers) => dispatch(ActionCreator.loadOffers(offers)))
  // .then((offers) => console.log(offers));
);

export const fetchReviews = (id) => (dispatch, getState, api) => (
  api.get(`${APIRoute.REVIEWS}/${id}`)
    .then(({data}) => adaptReviewsToClient(data))
    .then((reviews) => dispatch(ActionCreator.loadReviews(reviews)))
    .catch(() => {})
    // .catch((err) => console.log(`Error: ${err.message}`))
);

export const fetchNearbyOffers = (id) => (dispatch, getState, api) => (
  api.get(`${APIRoute.OFFERS}/${id}${APIRoute.OFFERS_NEARBY}`)
    .then(({ data }) => adaptOffersToClient(data))
    // .then((data) => console.log(data))
    .then((offers) => dispatch(ActionCreator.loadNearbyOffers(offers)))
);

export const fetchRoom = (id) => (dispatch, getState, api) => {
  dispatch(ActionCreator.setRoomLoadingStatus(false));
  api.get(`${APIRoute.OFFERS}/${id}`)
    .then(({data}) => dispatch(ActionCreator.loadRoom(adaptOfferToClient(data))))
    .then(() => dispatch(ActionCreator.setRoomLoadingStatus(true)))
    .catch(() => dispatch(ActionCreator.redirectToRoute(AppRoute.NOT_FOUND)));
};

export const checkAuth = () => (dispatch, getState, api) => (
  api.get(APIRoute.LOGIN)
    .then(({data}) => dispatch(ActionCreator.loadUserData(adaptUserToClient(data))))
    .then(() => dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.AUTH)))
    .catch(() => {})
);

export const login = ({login: email, password}) => (dispatch, getState, api) => (
  api.post(APIRoute.LOGIN, {email, password})
    .then(({data}) => {
      localStorage.setItem('token', data.token);
      return adaptUserToClient(data);
    })
    .then(() => dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.AUTH)))
    .then(() => dispatch(ActionCreator.redirectToRoute(AppRoute.MAIN)))
);

export const logout = () => (dispatch, getState, api) => (
  api.delete(APIRoute.LOGOUT)
    .then(() => localStorage.removeItem('token'))
    .then(() => dispatch(ActionCreator.logout()))
    .then(() => dispatch(ActionCreator.redirectToRoute(AppRoute.MAIN)))
);

export const postReview = ({id, comment, rating}) => (dispatch, getState, api) => (
  api.post(`${APIRoute.REVIEWS}/${id}`,
    {comment, rating},
    {
      headers: {
        'x-token': localStorage.getItem('token'),
      },
    })
    .then(({data}) => adaptReviewsToClient(data))
    .then((data) => dispatch(ActionCreator.loadReviews(data)))
);
