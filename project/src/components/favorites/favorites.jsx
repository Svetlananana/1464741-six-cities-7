import React from 'react';
import FavoritesList from '../favorites-list/favorites-list';
import PropTypes from 'prop-types';
import {propOffersTypes} from '../../type-props';


export default function Favorites({favoritesOffers, favoritesCities}) {
  return (
    <main className="page__main page__main--favorites">
      <div className="page__favorites-container container">
        <section className="favorites">
          <h1 className="favorites__title">Saved listing</h1>
          <FavoritesList
            favoritesOffers={favoritesOffers}
            favoritesCities={favoritesCities}
          />
        </section>
      </div>
    </main>
  );
}

Favorites.propTypes = {
  favoritesOffers: PropTypes.arrayOf(
    PropTypes.shape(propOffersTypes).isRequired,
  ).isRequired,
  favoritesCities: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
};
