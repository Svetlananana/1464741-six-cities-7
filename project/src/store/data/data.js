import {
  createReducer
} from '@reduxjs/toolkit';
import {
  updateFavoritesOffers,
  updateOfferIsFavorite,
  updateOffers
} from '../../utils';
import {
  loadOffers,
  loadReviews,
  loadNearbyOffers,
  loadOffer,
  loadFavoritesOffers,
  setFavoritesLoadingStatus,
  setOfferLoadingStatus,
  updateOffer
} from '../actions';

const initialState = {
  offers: [],
  offer: {},
  reviews: [],
  nearbyOffers: [],
  favoritesOffers: [],
  isDataLoaded: false,
  loadReviews: {
    isLoading: true,
    isSuccess: false,
    isError: false,
  },
  loadOffersNearby: {
    isLoading: true,
    isSuccess: false,
    isError: false,
  },
  loadOfferDetails: {
    isLoading: true,
    isSuccess: false,
    isError: false,
  },
  loadFavoritesOffers: {
    isLoading: true,
    isSuccess: false,
    isError: false,
  },

  isOfferDataLoaded: false,
  isFavoritesLoaded: false,
};

export const data = createReducer(initialState, (builder) => {
  builder
    .addCase(loadOffers, (state, action) => {
      state.offers = action.payload;
      state.isDataLoaded = true;
    })
    .addCase(loadReviews, (state, action) => {
      state.reviews = action.payload;
      state.loadReviews = {
        isLoading: false,
        isSuccess: true,
        isError: false,
      };
    })
    .addCase(loadNearbyOffers, (state, action) => {
      state.nearbyOffers = action.payload;
      state.loadOffersNearby = {
        isLoading: false,
        isSuccess: true,
        isError: false,
      };
    })
    .addCase(loadOffer, (state, action) => {
      state.offer = action.payload;
      state.loadOfferDetails = {
        isLoading: false,
        isSuccess: true,
        isError: false,
      };
    })
    .addCase(loadFavoritesOffers, (state, action) => {
      state.favoritesOffers = action.payload;
      state.isFavoritesLoaded = true;
    })
    .addCase(updateOffer, (state, action) => {
      state.offer = updateOfferIsFavorite(state.offer, action.payload);
      state.offers = updateOffers(state.offers, action.payload);
      state.favoritesOffers = updateFavoritesOffers(state.favoritesOffers, action.payload);
      state.nearbyOffers = updateOffers(state.nearbyOffers, action.payload);
    })
    .addCase(setFavoritesLoadingStatus, (state, action) => {
      state.isFavoritesLoaded = action.payload;
    })
    .addCase(setOfferLoadingStatus, (state, action) => {
      state.isOfferDataLoaded = action.payload;
    });
});
