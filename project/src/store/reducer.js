import {ActionType} from './action';
import {DEFAULT_CITY, SortType, AuthorizationStatus} from '../const';

const initialState = {
  activeCity: DEFAULT_CITY,
  offers: [],
  reviews: [],
  nearbyOffers: [],
  userData: {},
  room: {},
  sortType: SortType.DEFAULT,
  authorizationStatus: AuthorizationStatus.UNKNOWN,
  isDataLoaded: false,
  isReviewLoaded: false,
  isRoomDataLoaded: false,
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.LOAD_OFFERS:
      return {
        ...state,
        offers: action.payload,
        isDataLoaded: true,
      };
    case ActionType.LOAD_REVIEWS:
      return {
        ...state,
        reviews: action.payload,
        // isDataLoaded: true,
        isReviewLoaded: true,
      };
    case ActionType.LOAD_NEARBY_OFFERS:
      return {
        ...state,
        nearbyOffers: action.payload,
      };
    case ActionType.LOAD_ROOM:
      return {
        ...state,
        offer: action.payload,
        isRoomDataLoaded: true,
      };
    case ActionType.REQUIRED_AUTHORIZATION:
      return {
        ...state,
        authorizationStatus: action.payload,
      };
    case ActionType.LOAD_USER_DATA:
      return {
        ...state,
        userData: action.payload,
      };
    case ActionType.LOGOUT:
      return {
        ...state,
        authorizationStatus: AuthorizationStatus.NO_AUTH,
      };
    case ActionType.CHANGE_CITY:
      return {
        ...state,
        activeCity: action.payload,
        isDataLoaded: true,
      };
    case ActionType.CHANGE_SORT_TYPE:
      return {
        ...state,
        sortType: action.payload,
      };
    case ActionType.SET_ROOM_LOADING_STATUS:
      return {
        ...state,
        isRoomLoaded: action.payload,
      };
    default:
      return state;
  }
};
