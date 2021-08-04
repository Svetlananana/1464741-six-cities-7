import {NameSpace} from '../root-reducer';
import {createSelector} from 'reselect';
import {getActiveCity} from '../main/selectors';
import {MAX_REVIEWS_COUNT} from '../../const';

export const getOffers = (state) => state[NameSpace.DATA].offers;
export const getOffer = (state) => state[NameSpace.DATA].offer;
export const getReviews = (state) => state[NameSpace.DATA].reviews;
export const getNearbyOffers = (state) => state[NameSpace.DATA].nearbyOffers;

export const getDataLoadedStatus = (state) => state[NameSpace.DATA].isDataLoaded;
export const getLoadReviewsStatus = (state) => state[NameSpace.DATA].loadReviews;
export const getLoadOffersNearbyStatus = (state) => state[NameSpace.DATA].loadOffersNearby;
export const getLoadOfferDetailsStatus = (state) => state[NameSpace.DATA].loadOfferDetails;

export const getFavoritesOffers = (state) => state[NameSpace.DATA].favoritesOffers;
export const getFavoritesLoadingStatus = (state) => state[NameSpace.DATA].isFavoritesLoaded;
export const getOfferLoadingStatus = (state) => state[NameSpace.DATA].isOfferDataLoaded;

export const getCurrentOffers = createSelector(
  [getOffers, getActiveCity],
  (offers, activeCity) => offers.filter(({city}) => city.name  === activeCity),
);

export const getSortedReviews = createSelector(
  getReviews,
  (reviews) => reviews
    .slice(0, MAX_REVIEWS_COUNT)
    .sort((firstReview, secondReview) =>
      (new Date(secondReview.date) - new Date(firstReview.date))));
