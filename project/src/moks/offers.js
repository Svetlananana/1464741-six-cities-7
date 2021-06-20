import {nanoid} from 'nanoid';
import {generateMockOffersList, generateId} from './utils';

import {
  HOTEL_CITIES,
  HOTEL_DESCRIPTIONS,
  HOTEL_GOODS,
  HOTEL_HOST_AVATAR,
  HOTEL_HOST_NAMES,
  HOTEL_IMAGES,
  HOTEL_PREVIEW_IMAGES,
  HOTEL_TITLE,
  HOTEL_TYPE
} from './const';

import {
  getRandomFixedFloat,
  getRandomNumber,
  getRandomBoolean,
  getRandomArrayItem,
  getRandomArrayItems
} from './utils';

export const getOfferMock = () => ({
  bedrooms: getRandomNumber(1, 6),
  city: {
    location: {
      latitude: getRandomFixedFloat(0, 60, 6),
      longitude: getRandomFixedFloat(0, 60, 6),
      zoom: getRandomNumber(8, 13),
    },
    name: getRandomArrayItem(HOTEL_CITIES),
  },
  description: getRandomArrayItem(HOTEL_DESCRIPTIONS),
  goods: getRandomArrayItems(HOTEL_GOODS),
  host: {
    avatarUrl: getRandomArrayItem(HOTEL_HOST_AVATAR),
    id: nanoid(),
    isPro: getRandomBoolean(),
    name: getRandomArrayItem(HOTEL_HOST_NAMES),
  },
  id: generateId(),
  images: getRandomArrayItems(HOTEL_IMAGES),
  isFavorite: getRandomBoolean(),
  isPremium: getRandomBoolean(),
  location: {
    latitude: getRandomFixedFloat(0, 60, 14),
    longitude: getRandomFixedFloat(0, 60, 14),
    zoom: getRandomNumber(8, 13),
  },
  maxAdults: getRandomNumber(0, 10),
  previewImage: getRandomArrayItem(HOTEL_PREVIEW_IMAGES),
  price: getRandomNumber(50, 1000),
  rating: getRandomFixedFloat(0, 5),
  title: getRandomArrayItem(HOTEL_TITLE),
  type: getRandomArrayItem(HOTEL_TYPE),
});

export const offers = generateMockOffersList(5, getOfferMock);
