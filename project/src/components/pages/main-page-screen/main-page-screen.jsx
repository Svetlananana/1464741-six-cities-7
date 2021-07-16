import React, {useState} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {propOffersTypes} from '../../../type-props';
import {getFilteredOffers} from '../../../utils';
import Header from '../../header/header';
import OffersList from '../../offer-list/offer-list';
import CitiesList from '../../cities-list/cities-list';
import Map from '../../map/map';
import MainEmpty from '../../main-empty/main-empty';
import {SortingPlaces} from '../../sorting-places/sorting-places';


export function MainPageScreen({offers, activeCity, sortType}) {

  const [hoveredCard, setHoveredCard] = useState({});
  const filteredOffers = getFilteredOffers(sortType, offers);

  function onHoverCard(id) {
    const currentCard = offers.find((offer) => offer.id === Number(id));
    setHoveredCard(currentCard);
  }

  return (
    <div className="page page--gray page--main">
      <Header />
      <main className={`page__main page__main--index ${offers.length === 0 && ('page__main--index-empty')}`}>
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <section className="locations container">
            <CitiesList />
          </section>
        </div>
        <div className="cities">
          {offers.length !== null ? (
            <div className="cities__places-container container">
              <section className="cities__places places">
                <h2 className="visually-hidden">Places</h2>
                <b className="places__found">{offers.length} {offers.lenth > 1 ? 'places' : 'place'} to stay in {activeCity}</b>
                <SortingPlaces />
                <OffersList
                  isMain
                  offers={filteredOffers}
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
          ) : (
            <MainEmpty activeCity={activeCity} />
          )}

        </div>
      </main>
    </div>
  );
}

MainPageScreen.propTypes = {
  offers: PropTypes.arrayOf(
    PropTypes.shape(propOffersTypes).isRequired,
  ),
  activeCity: PropTypes.string.isRequired,
  sortType: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  offers: state.offers,
  activeCity: state.activeCity,
  sortType: state.sortType,
});

export default connect(mapStateToProps)(MainPageScreen);
