import React from 'react';
import {Link} from 'react-router-dom';
import {formatRating} from '../../moks/utils';
import {propOfferTypes} from '../../type-props';
import PropTypes from 'prop-types';

function PlaseCardMark() {
  return (
    <div className="place-card__mark">
      <span>Premium</span>
    </div>
  );
}

export default function Offer({ card, setHoveredCard }) {

  const {
    id,
    title,
    type,
    previewImage,
    price,
    isFavorite,
    isPremium,
    rating,
  } = card;

  const isActiveButtonClass = isFavorite ? 'place-card__bookmark-button--active' : '';

  return (
    <article
      className="cities__place-card place-card"
      onMouseEnter={() => setHoveredCard(card)}
      onMouseLeave={() => setHoveredCard(null)}
    >
      {isPremium ? <PlaseCardMark isPremium={isPremium} /> : isPremium }
      <div className="cities__image-wrapper place-card__image-wrapper">
        <Link to={`/room/${id}`}>
          <img className="place-card__image" src={previewImage} width="260" height="200" alt="Place"/>
        </Link>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button className={`place-card__bookmark-button ${isActiveButtonClass} button`} type="button">
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark"></use>
            </svg>
            <span className="visually-hidden">To bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{width: formatRating(rating)}}/>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={`/room/${id}`}>{title}</Link>
        </h2>
        <p className="place-card__type">{type}</p>
      </div>
    </article>
  );
}

Offer.propTypes = {
  setHoveredCard: PropTypes.func.isRequired,
  card: PropTypes.shape(propOfferTypes),
};
