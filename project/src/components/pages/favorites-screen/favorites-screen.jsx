import React from 'react';
import {Link} from 'react-router-dom';
import Header from '../header/header';
import FavoriteList from '../favorite-list/favorite-list';
import FavoriteListEmpty from '../favorites-list-empty/favorites-list-empty';
import PropTypes from 'prop-types';
import {propOffersTypes} from '../../type-props';

export default function FavoritesScreen(props) {
  const {offers} = props;

  const favoriteDate = offers.length ? <FavoriteList offers={offers} /> : <FavoriteListEmpty />;

  return (
    <div className="page">
      <Header/>

      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          {favoriteDate}
        </div>
      </main>
      <footer className="footer container">
        <Link className="footer__logo-link" to="/">
          <img className="footer__logo" src="img/logo.svg" alt="6 cities logo" width="64" height="33"/>
        </Link>
      </footer>
    </div>
  );
}

FavoritesScreen.propTypes = {
  offers: PropTypes.arrayOf(
    PropTypes.shape(propOffersTypes),
  ),
};
