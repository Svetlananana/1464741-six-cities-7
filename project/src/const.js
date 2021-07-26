export const AppRoutes = {
  MAIN: '/',
  LOGIN: '/login',
  FAVORITES: '/favorites',
  ROOM: '/offer/:id',
};

export const APIRoutes = {
  OFFERS: '/hotels',
  REVIEWS: '/comments',
  LOGIN: '/login',
  LOGOUT: '/logout',
};

export const PageTypes = {
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

export const SortTypes = {
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
