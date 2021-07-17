import {ActionType} from './action';
import {DEFAULT_CITY, SortTypes} from '../const';
import {reviews} from '../moks/reviews';

const initialState = {
  activeCity: DEFAULT_CITY,
  offers: [],
  reviews,
  sortType: SortTypes.DEFAULT,
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_CITY:
      return {
        ...state,
        activeCity: action.payload,
      };
    case ActionType.CHANGE_SORT_TYPE:
      return {
        ...state,
        sortType: action.payload,
      };
    case ActionType.LOAD_OFFERS:
      return {
        ...state,
        offers: action.payload,
      };
    default:
      return state;
  }
};
