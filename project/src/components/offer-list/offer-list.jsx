import React from 'react';
import Offer from '../offer/offer';
import {propOffersTypes} from '../../type-props';
import {PageType, PageSubtype} from '../../const';
import PropTypes from 'prop-types';

export default function OffersList({offers, onMouseEnter, onMouseLeave, isMain = true}) {

  return (
    <div className={isMain ? 'cities__places-list places__list tabs__content' : ''}>
      {offers.map((offer) => (
        <Offer
          isMain={isMain}
          offer={offer}
          key={offer.id}
          pageTypes={PageType[`${isMain ? PageSubtype.MAIN_PAGE : PageSubtype.ROOM_PAGE}`]}
          onMouseEnter={() => onMouseEnter(offer.id)}
          onMouseLeave={() => onMouseLeave(null)}
        />
      ))}
    </div>
  );
}


OffersList.propTypes = {
  offers: PropTypes.arrayOf(
    PropTypes.shape(propOffersTypes).isRequired,
  ),
  onMouseEnter: PropTypes.func.isRequired,
  onMouseLeave: PropTypes.func.isRequired,
  isMain: PropTypes.bool,
};
