import {ActionType} from './action';
import {DEFAULT_CITY, SortType, AuthorizationStatus} from '../const';

const initialState = {
  activeCity: DEFAULT_CITY,
  offers: [],
  reviews: [],
  nearbyOffers: [],
  userData: {},
  room: {},
  roomDetails: {},
  loadOffersNearby: {
    isLoading: true,
    isSuccess: false,
    isError: false,
  },
  loadRoomDetails: {
    isLoading: true,
    isSuccess: false,
    isError: false,
  },
  loadReviews: {
    isLoading: true,
    isSuccess: false,
    isError: false,
  },

  sortType: SortType.DEFAULT,
  authorizationStatus: AuthorizationStatus.UNKNOWN,

  isDataLoaded: false,
  loginError: null,
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
        loadReviews: {
          isLoading: false,
          isSuccess: true,
          isError: false,
        },
      };
    case ActionType.LOAD_NEARBY_OFFERS:
      return {
        ...state,
        nearbyOffers: action.payload,
        loadOffersNearby: {
          isLoading: false,
          isSuccess: true,
          isError: false,
        },
      };
    case ActionType.LOAD_ROOM:
      return {
        ...state,
        offer: action.payload,
        loadRoomDetails: {
          isLoading: false,
          isSuccess: true,
          isError: false,
        },
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
    case ActionType.LOGIN_ERROR:
      return {
        ...state,
        loginError: action.payload,
      };
    case ActionType.LOAD_USER:
      return {
        ...state,
        userData: action.payload,
        loginError: null,
      };

    default:
      return state;
  }
};
