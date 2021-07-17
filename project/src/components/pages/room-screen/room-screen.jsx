import React from 'react';
import {Redirect} from 'react-router-dom';
import {useParams} from 'react-router-dom';
import {connect} from 'react-redux';
import {propOffersTypes, propReviewTypes} from '../../../type-props';
import {formatRating} from '../../../moks/utils';
import PropTypes from 'prop-types';
import FormReviews from '../../form-reviews/form-reviews';
import Header from '../../header/header';
import OffersList from '../../offer-list/offer-list';
import Map from '../../map/map';
import Reviews from '../../reviews/reviews';

export function RoomScreen({ offers, reviews }) {
  const {id} = useParams();

  const room = offers.find((offer) => offer.id === +id);

  const {
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
  } = room;

  const {
    avatarUrl,
    isPro,
    name,
  } = host;

  if (room === undefined) {
    return <Redirect to="/" />;
  }

  const nearPlacesCard = offers.filter((card) => card !== room).slice(0, 3);

  return (
    <div className="page">
      <Header />
      <main className="page__main page__main--property">
        <section className="property">
          <div className="property__gallery-container container">
            <div className="property__gallery">
              {images.map((image, i) => (
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
                <Reviews reviews={reviews} />
                <FormReviews />
              </section>
            </div>
          </div>
          <section className="property__map map">
            <Map
              city={city}
              offers={nearPlacesCard}
              hoveredCard={room}
            />
          </section>
        </section>
        <div className="container">
          <section className="near-places places">
            <h2 className="near-places__title">Other places in the neighbourhood</h2>
            <div className="near-places__list places__list">
              <OffersList
                offers={nearPlacesCard}
                onMouseEnter={() => {}}
                onMouseLeave={() => {}}
              />
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

RoomScreen.propTypes = {
  offers: PropTypes.arrayOf(
    PropTypes.shape(propOffersTypes),
  ),
  reviews: PropTypes.arrayOf(
    PropTypes.shape(propReviewTypes).isRequired),
};

const mapStateToProps = ({offers, reviews}) => ({
  offers,
  reviews,
});

export default connect(mapStateToProps)(RoomScreen);
