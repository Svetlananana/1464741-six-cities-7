import React from 'react';
import {Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import {propOffersTypes, propReviewTypes} from '../../type-props';
import PropTypes from 'prop-types';
import {formatRating} from '../../utils';
import {AuthorizationStatus, AppRoute} from '../../const';
import FormReviews from '../reviews-form/reviews-form';
import OffersList from '../offer-list/offer-list';
import Map from '../map/map';
import ReviewsList from '../reviews-list/reviews-list';

const MAX_COUNT_OFFERS = 3;
const MAX_COUNT_IMAGES = 6;

export function PropertyRoom({offer, reviews, nearbyOffers, authorizationStatus}) {

  const {
    id,
    title,
    type,
    price,
    goods,
    maxAdults,
    bedrooms,
    isFavorite,
    isPremium,
    rating,
    images,
    host,
    description,
    city,
  } = offer;

  const {
    avatarUrl,
    isPro,
    name,
  } = host;

  if (offer.id === undefined) {
    return <Redirect to={AppRoute.NOT_FOUND}/>;
  }

  const nearOffers =  nearbyOffers.filter((card) => card !== offer).slice(0, MAX_COUNT_OFFERS);

  return (
    <>
      <section className="property">
        <div className="property__gallery-container container">
          <div className="property__gallery">
            {images.slice(0, MAX_COUNT_IMAGES).map((image, i) => (
              <div className="property__image-wrapper" key={image + i.toString()}>
                <img className="property__image" src={image} alt="Studio"/>
              </div>
            ))}
          </div>
        </div>
        <div className="property__container container">
          <div className="property__wrapper">
            {isPremium && (
              <div className="property__mark">
                <span>Premium</span>
              </div>
            )}
            <div className="property__name-wrapper">
              <h1 className="property__name">
                {title}
              </h1>
              <button className={`property__bookmark-button button ${isFavorite ? 'property__bookmark-button--active' : ''}`} type="button">
                <svg className="property__bookmark-icon" width="31" height="33">
                  <use xlinkHref="#icon-bookmark"></use>
                </svg>
                <span className="visually-hidden">To bookmarks</span>
              </button>
            </div>
            <div className="property__rating rating">
              <div className="property__stars rating__stars">
                <span style={{width: formatRating(rating)}}></span>
                <span className="visually-hidden">Rating</span>
              </div>
              <span className="property__rating-value rating__value">{rating}</span>
            </div>
            <ul className="property__features">
              <li className="property__feature property__feature--entire">
                {type}
              </li>
              <li className="property__feature property__feature--bedrooms">
                {`${bedrooms} ${bedrooms > 1 ? 'Bedrooms' : 'Bedroom'}`}
              </li>
              <li className="property__feature property__feature--adults">
                {`Max ${maxAdults} ${maxAdults > 1 ? 'adults' : 'adult'}`}
              </li>
            </ul>
            <div className="property__price">
              <b className="property__price-value">&euro;{price}</b>
              <span className="property__price-text">&nbsp;night</span>
            </div>
            <div className="property__inside">
              <h2 className="property__inside-title">What&apos;s inside</h2>
              <ul className="property__inside-list">
                {goods.map((good, i) => (
                  <li className="property__inside-item" key={good + i.toString()}>
                    {good}
                  </li>
                ))}
              </ul>
            </div>
            <div className="property__host">
              <h2 className="property__host-title">Meet the host</h2>
              <div className="property__host-user user">
                <div className="property__avatar-wrapper property__avatar-wrapper--pro user__avatar-wrapper">
                  <img className="property__avatar user__avatar" src={avatarUrl} width="74" height="74" alt="Host avatar"/>
                </div>
                <span className="property__user-name">
                  {name}
                </span>
                {isPro && (
                  <span className="property__user-status">
          Pro
                  </span> )}
              </div>
              <div className="property__description">
                <p className="property__text">
                  {description}
                </p>
              </div>
            </div>
            <section className="property__reviews reviews">
              <ReviewsList reviews={reviews} />
              {authorizationStatus ===AuthorizationStatus.AUTH && (<FormReviews roomId={id} />)}
            </section>
          </div>
        </div>
        <section className="property__map map">
          <Map
            city={city}
            offers={[offer, ...nearbyOffers]}
            hoveredCard={offer}
          />
        </section>
      </section>
      <div className="container">
        <section className="near-places places">
          <h2 className="near-places__title">Other places in the neighbourhood</h2>
          <div className="near-places__list places__list">
            <OffersList
              offers={nearOffers}
              onMouseEnter={() => {}}
              onMouseLeave={() => {}}
            />
          </div>
        </section>
      </div>
    </>
  );
}

PropertyRoom.propTypes = {
  offer: PropTypes.shape(propOffersTypes),
  reviews: PropTypes.arrayOf(
    PropTypes.shape(propReviewTypes).isRequired),
  nearbyOffers: PropTypes.arrayOf(
    PropTypes.shape(propOffersTypes),
  ),
  authorizationStatus: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  offer: state.offer,
  nearbyOffers: state.nearbyOffers,
  reviews: state.reviews,
  authorizationStatus: state.authorizationStatus,
});

export default connect(mapStateToProps)(PropertyRoom);
