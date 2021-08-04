import React from 'react';
import {Link} from 'react-router-dom';
import {useDispatch} from 'react-redux';
import Offer from '../offer/offer';
import PropTypes from 'prop-types';
import {propOffersTypes} from '../../type-props';
import {changeCity} from '../../store/actions';
import {PageType, AppRoute, PageSubtype} from '../../const';


export default function FavoritesItem({favoritesOffers, favoritesCity}) {

  const dispatch = useDispatch();

  const offers = favoritesOffers.filter((offer) => offer.city.name === favoritesCity);

  function handleCityClick() {
    dispatch(changeCity(favoritesCity));
  }

  return (
    <li className="favorites__locations-items">
      <div className="favorites__locations locations locations--current">
        <div className="locations__item">
          <Link className="locations__item-link"
            to={AppRoute.MAIN} onClick={handleCityClick}
          >
            <span>{favoritesCity}</span>
          </Link>
        </div>
      </div>
      <div className="favorites__places">
        {offers.map((offer) => (
          <Offer
            key={offer.id}
            offer={offer}
            pageTypes={PageType[PageSubtype.FAVORITES_PAGE]}
          />))}
      </div>
    </li>
  );
}

FavoritesItem.propTypes = {
  favoritesOffers: PropTypes.arrayOf(
    PropTypes.shape(propOffersTypes).isRequired,
  ).isRequired,
  favoritesCity: PropTypes.string.isRequired,
};
