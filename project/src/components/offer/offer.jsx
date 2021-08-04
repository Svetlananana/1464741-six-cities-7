import React, {memo} from 'react';
import {Link} from 'react-router-dom';
import generatePath from 'react-router/modules/generatePath';
import FavoritesButton from '../favorites-button/favorites-button';
import PropTypes from 'prop-types';
import {propOfferTypes, propPageTypes} from '../../type-props';
import {AppRoute, PageSubtype} from '../../const';
import {formatRating} from '../../utils';


function Offer({ offer, onMouseLeave, onMouseEnter, pageTypes }) {

  const {
    id,
    title,
    type,
    previewImage,
    price,
    isFavorite,
    isPremium,
    rating,
  } = offer;

  const {
    article,
    imgWrapper,
    divCardInfo,
    imgWidth,
    imgHeight,
  } = pageTypes;

  return (
    <article
      className={`${article} place-card`}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {isPremium && (
        <div className="place-card__mark">
          <span>Premium</span>
        </div>
      )}
      <div className={`${imgWrapper} place-card__image-wrapper`}>
        <Link to={{pathname: generatePath(AppRoute.ROOM, {id})}}>
          <img className="place-card__image" src={previewImage}
            width={imgWidth} height={imgHeight} alt="Place"
          />
        </Link>
      </div>
      <div className={`${divCardInfo} place-card__info`}>
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <FavoritesButton id={id} buttonType={PageSubtype.PAGE} isFavorite={isFavorite} />
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{width: formatRating(rating)}}/>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={{pathname: generatePath(AppRoute.ROOM, {id})}}>{title}</Link>
        </h2>
        <p className="place-card__type">{type}</p>
      </div>
    </article>
  );
}

Offer.propTypes = {
  onMouseLeave: PropTypes.func,
  onMouseEnter: PropTypes.func,
  offer: PropTypes.shape(propOfferTypes).isRequired,
  pageTypes: PropTypes.shape(propPageTypes).isRequired,
};

export default memo(Offer);
