import {generateMockList, generateId} from './utils';

import {
  REVIEWS_COMMENT,
  REVIEWS_NAME
} from './const';

import {
  getRandomNumber,
  getRandomBoolean,
  getRandomArrayItem
} from './utils';

const AVATAR_URL = 'https://i.pravatar.cc/128';

export const getReviewsMok = () => ({
  comment: getRandomArrayItem(REVIEWS_COMMENT),
  date: '2020-07-13T11:22:13.375Z',
  id: generateId(),
  rating: getRandomNumber(1, 5),
  user: {
    avatarUrl: `${AVATAR_URL}?rnd=${Math.random()}`,
    id: generateId(),
    isPro: getRandomBoolean(),
    name: getRandomArrayItem(REVIEWS_NAME),
  },
});

export const reviews = generateMockList(3, getReviewsMok);
