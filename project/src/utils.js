import {SortType} from './const';

export const formatRating = (rating) => `${rating * 10}%`;

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

export const updateOffers = (offers, payload) => {
  if (offers.some((offer) => offer.id === payload.id)) {
    offers.find((offer) => offer.id === payload.id)
      .isFavorite = payload.isFavorite;
  }
  return offers;
};

export const updateOfferIsFavorite = (offer, payload) => {
  if (offer.id === payload.id) {
    offer.isFavorite = payload.isFavorite;
  }
  return offer;
};

export const updateFavoritesOffers = (offers, payload) => {
  if (payload.isFavorite) {
    return [...offers, payload];
  }
  return offers.filter((offer) => offer.id !== payload.id);
};
