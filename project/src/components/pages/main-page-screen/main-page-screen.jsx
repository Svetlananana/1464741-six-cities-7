import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import {propOffersTypes} from '../../../type-props';
import Header from '../../header/header';
import OffersList from '../../offer-list/offer-list';
import Map from '../../map/map';
// import {getFilteredOffers} from '../../../utils'; подготавливаю почву для сортировки


export default function MainPageScreen({offers}) {

  const [hoveredCard, setHoveredCard] = useState({});
  // const filteredOffers = getFilteredOffers(sort)
  function onHoverCard(id) {
    const currentCard = offers.find((offer) => offer.id === Number(id));
    setHoveredCard(currentCard);
    /* eslint-disable no-console */
    console.log('%c 🦄', 'padding: 0.3rem 1.5rem; font-family: Roboto; font-size: 1.2em; line-height: 1.4em; color: white; background-color: #4158D0; background-image: linear-gradient(43deg, #4158D0 0%, #C850C0 46%, #FFCC70 100%);');
  }

  return (
    <div className="page page--gray page--main">
      <Header />
      <main className={`page__main page__main--index ${offers.length === 0 && ('page__main--index-empty')}`}>
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <section className="locations container">
            <ul className="locations__list tabs__list">
              <li className="locations__item">
                <Link className="locations__item-link tabs__item" to="/">
                  <span>Paris</span>
                </Link>
              </li>
              <li className="locations__item">
                <Link className="locations__item-link tabs__item" to="/">
                  <span>Cologne</span>
                </Link>
              </li>
              <li className="locations__item">
                <Link className="locations__item-link tabs__item" to="/">
                  <span>Brussels</span>
                </Link>
              </li>
              <li className="locations__item">
                <Link className="locations__item-link tabs__item tabs__item--active" to="/">
                  <span>Amsterdam</span>
                </Link>
              </li>
              <li className="locations__item">
                <Link className="locations__item-link tabs__item" to="/">
                  <span>Hamburg</span>
                </Link>
              </li>
              <li className="locations__item">
                <Link className="locations__item-link tabs__item" to="/">
                  <span>Dusseldorf</span>
                </Link>
              </li>
            </ul>
          </section>
        </div>
        <div className="cities">
          <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <b className="places__found">312 places to stay in Amsterdam</b>
              <form className="places__sorting" action="#" method="get">
                <span className="places__sorting-caption">Sort by</span>
                <span className="places__sorting-type" tabIndex="0">
              Popular
                  <svg className="places__sorting-arrow" width="7" height="4">
                    <use xlinkHref="#icon-arrow-select"></use>
                  </svg>
                </span>
                <ul className="places__options places__options--custom places__options--opened">
                  <li className="places__option places__option--active" tabIndex="0">Popular</li>
                  <li className="places__option" tabIndex="0">Price: low to high</li>
                  <li className="places__option" tabIndex="0">Price: high to low</li>
                  <li className="places__option" tabIndex="0">Top rated first</li>
                </ul>
              </form>
              <OffersList
                isMain
                offers={offers}
                onMouseEnter={onHoverCard}
                onMouseLeave={() => setHoveredCard({})}
              />
            </section>
            <div className="cities__right-section">
              <section className="cities__map map">
                <Map
                  city={offers[0].city}
                  offers={offers}
                  hoveredCard={hoveredCard}
                />
              </section>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

MainPageScreen.propTypes = {
  offers: PropTypes.arrayOf(
    PropTypes.shape(propOffersTypes).isRequired,
  ),
};
