import React, {useState} from 'react';
import {useSelector} from 'react-redux';
import Alert from '@material-ui/lab/Alert';
import Header from '../../header/header';
import OffersList from '../../offer-list/offer-list';
import CitiesList from '../../cities-list/cities-list';
import Map from '../../map/map';
import MainEmpty from '../../main-empty/main-empty';
import SortingPlaces from '../../sorting-places/sorting-places';
import {getActiveCity, getSortType, getServerStatus} from '../../../store/main/selectors';
import {getCurrentOffers} from '../../../store/data/selectors';
import {getFilteredOffers} from '../../../utils';
import {ErroreMessage} from '../../../const';

export default function MainPageScreen() {

  const currentOffers = useSelector(getCurrentOffers);
  const activeCity = useSelector(getActiveCity);
  const sortType = useSelector(getSortType);
  const isServerLoading = useSelector(getServerStatus);

  const [hoveredCard, setHoveredCard] = useState({});
  const filteredOffers = getFilteredOffers(sortType, currentOffers);

  function handleOnMouseEnter(id) {
    const currentCard = currentOffers.find((offer) => offer.id === Number(id));
    setHoveredCard(currentCard);
  }

  function handleOnMouseLeave() {
    setHoveredCard({});
  }

  return (
    <div className="page page--gray page--main">
      <Header />
      {!isServerLoading && <Alert severity="info">{ErroreMessage.DEFAULT}</Alert>}
      <main className={`page__main page__main--index ${currentOffers.length === 0 && ('page__main--index-empty')}`}>
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <section className="locations container">
            <CitiesList />
          </section>
        </div>
        <div className="cities">
          {currentOffers.length !== null ? (
            <div className="cities__places-container container">
              <section className="cities__places places">
                <h2 className="visually-hidden">Places</h2>
                <b className="places__found">{currentOffers.length} {currentOffers.length > 1 ? 'places' : 'place'} to stay in {activeCity}</b>
                <SortingPlaces />
                <OffersList
                  isMain
                  offers={filteredOffers}
                  onMouseEnter={handleOnMouseEnter}
                  onMouseLeave={handleOnMouseLeave}
                />
              </section>
              <div className="cities__right-section">
                <section className="cities__map map">
                  <Map
                    city={filteredOffers[0].city}
                    offers={currentOffers}
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
