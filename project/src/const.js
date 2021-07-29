export const AppRoute = {
  MAIN: '/',
  LOGIN: '/login',
  FAVORITES: '/favorites',
  ROOM: '/offer/:id',
  NOT_FOUND: '/not-found',
};

export const APIRoute = {
  OFFERS: '/hotels',
  REVIEWS: '/comments',
  LOGIN: '/login',
  LOGOUT: '/logout',
  OFFERS_NEARBY: '/nearby',
};

export const PageType = {
  MAIN_PAGE: {
    article: 'cities__place-card',
    imgWrapper: 'cities__image-wrapper',
    divCardInfo: '',
    imgWidth: '260',
    imgHeight: '200',
  },

  FAVORITES_PAGE: {
    article: 'favorites__card',
    imgWrapper: 'favorites__image-wrapper',
    divCardInfo: 'favorites__card-info',
    imgWidth: '150',
    imgHeight: '110',
  },

  ROOM_PAGE: {
    article: 'near-places__card',
    imgWrapper: 'near-places__image-wrapper',
    divCardInfo: '',
    imgWidth: '260',
    imgHeight: '200',
  },
};

export const StarsRating = {
  PERFECT: {
    value: 5,
    title: 'perfect',
  },
  GOOD: {
    value: 4,
    title: 'good',
  },
  NOT_BAD: {
    value: 3,
    title: 'not bad',
  },
  BADLY: {
    value: 2,
    title: 'badly',
  },
  TERRIBLY: {
    value: 1,
    title: 'terribly',
  },
};

export const SortType = {
  DEFAULT: 'Popular',
  PRICE_LOW: 'Price: low to high',
  PRICE_HIGH: 'Price: high to low',
  TOP_RATED: 'Top rated first',
};

export const AuthorizationStatus = {
  AUTH: 'AUTH',
  NO_AUTH: 'NO_AUTH',
  UNKNOWN: 'UNKNOWN',
};

export const CITIES_NAMES = ['Paris', 'Cologne', 'Brussels', 'Amsterdam', 'Hamburg', 'Dusseldorf'];
export const DEFAULT_CITY = CITIES_NAMES[0];
