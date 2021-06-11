export const getRandomFloat = (min, max) => Math.random() * (max - min) + min;

export const getRandomFixedFloat = (min, max, range = 1) => {
  const value = getRandomFloat(min, max);
  return Number(value.toFixed(range));
};

export const getRandomNumber = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return getRandomFixedFloat(min, max, 0);
};

export const getRandomBoolean = () => Boolean(getRandomNumber(0, 1));

export const getRandomArrayItem = (array) => array[getRandomNumber(0, array.length -1)];

export const getRandomArrayItems = (array) => new Array(getRandomNumber(0, array.length - 1)).fill().map(() => array[getRandomNumber(0, array.length - 1)]);
