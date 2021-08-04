import {
  createReducer
} from '@reduxjs/toolkit';
import {
  DEFAULT_CITY,
  SortType
} from '../../const';
import {
  changeCity,
  changeSortType,
  setServerStatus
} from '../actions';

const initialState = {
  activeCity: DEFAULT_CITY,
  isDataLoaded: false,
  sortType: SortType.DEFAULT,
  isServerStatus: true,
};

export const main = createReducer(initialState, (builder) => {
  builder
    .addCase(changeCity, (state, action) => {
      state.activeCity = action.payload;
      state.isDataLoaded = true;
    })
    .addCase(changeSortType, (state, action) => {
      state.sortType = action.payload;
    })
    .addCase(setServerStatus, (state, action) => {
      state.isServerStatus = action.payload;
    });
});


