import React from 'react';
import {Link} from 'react-router-dom';
import Offer from '../offer/offer';
import PropTypes from 'prop-types';
import {propOffersTypes} from '../../type-props';

const createFavoriteList = (array) => array.reduce((acc, elem) => {
  if (elem.city.name in acc) {
    acc[elem.city.name].push(elem);
    return acc;
  }
  acc[elem.city.name] = [elem];
  return acc;
}, {});

export default function FavoriteList({offers}) {

  const favoritesList = createFavoriteList(offers.filter((elem) => elem.isFavorite));

  return (
    <section className="favorites">
      <h1 className="favorites__title">Saved listing</h1>
      <ul className="favorites__list">
        {
          Object.entries(favoritesList).map(([city, cityCards]) => (
            <li key={city} className="favorites__locations-items">
              <div className="favorites__locations locations locations--current">
                <div className="locations__item">
                  <Link className="locations__item-link" to="/">
                    <span>{city}</span>
                  </Link>
                </div>
              </div>
              <div className="favorites__places">
                {cityCards.map((card) => (
                  <Offer
                    key={card.id}
                  />))}
              </div>
            </li>
          ))
        }
      </ul>
    </section>
  );
}

FavoriteList.propTypes = {
  offers: PropTypes.arrayOf(
    PropTypes.shape(propOffersTypes),
  ),
};
