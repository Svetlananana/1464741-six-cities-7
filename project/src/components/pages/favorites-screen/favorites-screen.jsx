import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {propOffersTypes} from '../../../type-props';
import Header from '../../header/header';
import FavoritesList from '../../favorite-list/favorite-list';
import FavoriteListEmpty from '../../favorites-list-empty/favorites-list-empty';

export function FavoritesScreen({offers}) {

  const favoritesOffers = offers.filter((offer) => offer.isFavorite);

  const isFavoritesEmpty = favoritesOffers.length === 0;
  // const isFavoritesEmpty = offers.length === 0;

  return (
    <div className="page">
      <Header/>

      <main className={`page__main page__main--favorites ${isFavoritesEmpty && ('page__main--favorites-empty')}`}>
        <div className="page__favorites-container container">
          <section className={`favorites ${isFavoritesEmpty && ('favorites--empty')}`}>
            {isFavoritesEmpty ? (<FavoriteListEmpty />) :
              (<FavoritesList offers={offers}/>)}
          </section>
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

const mapStateToProps = ({offers}) => ({
  offers: offers,
});

export default connect(mapStateToProps, null)(FavoritesScreen);
