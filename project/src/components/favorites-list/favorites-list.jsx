import React from 'react';
import FavoritesItem from '../favorite-item/favorites-item';
import PropTypes from 'prop-types';
import {propOffersTypes} from '../../type-props';

export default function FavoritesList({favoritesOffers, favoritesCities}) {

  return (
    <ul className="favorites__list">
      {favoritesCities.map((city) => (
        <FavoritesItem
          key={city}
          favoritesOffers={favoritesOffers}
          favoritesCity={city}
        />
      ))}
    </ul>
  );
}

FavoritesList.propTypes = {
  favoritesOffers: PropTypes.arrayOf(
    PropTypes.shape(propOffersTypes).isRequired,
  ).isRequired,
  favoritesCities: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
};
