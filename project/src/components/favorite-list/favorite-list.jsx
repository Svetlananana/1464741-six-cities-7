import React from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import {propOffersTypes} from '../../type-props';
import {PageType} from '../../const';
import Offer from '../offer/offer';

const createFavoritesList = (array) => array.reduce((acc, elem) => {
  if (elem.city.name in acc) {
    acc[elem.city.name].push(elem);
    return acc;
  }
  acc[elem.city.name] = [elem];
  return acc;
}, {});

export default function FavoritesList({offers}) {

  const favoritesList = createFavoritesList(offers.filter((elem) => elem.isFavorite));

  return (
    <section className="favorites">
      <h1 className="favorites__title">Saved listing</h1>
      <ul className="favorites__list">
        {
          Object.entries(favoritesList).map(([city, cityOffers]) => (
            <li key={city} className="favorites__locations-items">
              <div className="favorites__locations locations locations--current">
                <div className="locations__item">
                  <Link className="locations__item-link" to="/">
                    <span>{city}</span>
                  </Link>
                </div>
              </div>
              <div className="favorites__places">
                {cityOffers.map((offer) => (
                  <Offer
                    key={offer.id}
                    offer={offer}
                    pageTypes={PageType['FAVORITES_PAGE']}
                  />))}
              </div>
            </li>
          ))
        }
      </ul>
    </section>
  );
}

FavoritesList.propTypes = {
  offers: PropTypes.arrayOf(
    PropTypes.shape(propOffersTypes).isRequired,
  ).isRequired,
};
