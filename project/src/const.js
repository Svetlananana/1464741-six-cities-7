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
  FAVORITES: '/favorite',
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

export const PageSubtype = {
  MAIN_PAGE: 'MAIN_PAGE',
  FAVORITES_PAGE: 'FAVORITES_PAGE',
  ROOM_PAGE: 'ROOM_PAGE',
  PAGE: 'PAGE',
};

export const FavoritesButtonType = {
  PAGE: {
    buttonClassName: 'place-card',
    imgWidth: '18',
    imgHeight: '19',
  },
  ROOM_PAGE: {
    buttonClassName: 'property',
    imgWidth: '31',
    imgHeight: '33',
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

export const MAX_REVIEWS_COUNT = 10;

export const ErroreMessage = {
  DEFAULT: 'Что-то пошло не так..',
  REVIEW_ERROR: 'Сообщение не отправилось. Попробуйте ещё раз!',
  LOGIN_ERROR: 'Проверьте корректность ввода',
};

