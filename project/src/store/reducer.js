import {ActionType} from './action';
import {DEFAULT_CITY, SortTypes} from '../const';
import {offers} from '../moks/offers';
import {reviews} from '../moks/reviews';
import {getActiveCity} from '../utils';

const initialState = {
  activeCity: DEFAULT_CITY,
  offers: getActiveCity(offers, DEFAULT_CITY),
  reviews,
  sortType: SortTypes.DEFAULT,
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_CITY:
      return {
        ...state,
        activeCity: action.payload,
        offers: getActiveCity(offers, action.payload),
      };
    case ActionType.CHANGE_SORT_TYPE:
      return {
        ...state,
        sortType: action.payload,
      };
    default:
      return state;
  }
};


// Создайте новый файл для описания редьюсера (например, reducer.js). Опишите в нём:

// Объект начального состояния:
// город (используется для отбора списка предложений в определённом городе) и список предложений по аренде.

// Функцию-редьюсер. Она принимает в качестве параметров текущий state и действие (action).
// Результатом выполнения редьюсера станет новое состояние.
