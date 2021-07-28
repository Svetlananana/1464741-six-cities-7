import {SortType} from './const';

export const formatRating = (rating) => `${rating * 10}%`;

export const getActiveCity = (array, activeCity) =>
  array.filter(({city}) => city.name  === activeCity);

export const getFilteredOffers = (sortType, array) => {
  switch (sortType) {
    case SortType.PRICE_LOW:
      return array.slice().sort((a, b) => a.price - b.price);
    case SortType.PRICE_HIGH:
      return array.slice().sort((a, b) => b.price - a.price);
    case SortType.TOP_RATED:
      return array.slice().sort((a, b) => b.rating - a.rating);
    case SortType.DEFAULT:
    default:
      return array;
  }
};

/* eslint-disable no-console */
console.log('%c 🦄', 'padding: 0.3rem 1.5rem; font-family: Roboto; font-size: 1.2em; line-height: 1.4em; color: white; background-color: #4158D0; background-image: linear-gradient(43deg, #4158D0 0%, #C850C0 46%, #FFCC70 100%);');
