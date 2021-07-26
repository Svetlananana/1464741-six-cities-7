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
import SortingPlaces from '../../sorting-places/sorting-places';
import {getActiveCity} from '../../../utils';


export function MainPageScreen({offers, activeCity, sortType, offersByCity}) {

  const [hoveredCard, setHoveredCard] = useState({});
  const filteredOffers = getFilteredOffers(sortType, offersByCity);

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
                <b className="places__found">{offersByCity.length} {offersByCity.length > 1 ? 'places' : 'place'} to stay in {activeCity}</b>
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
                    offers={offersByCity}
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
  offersByCity: PropTypes.arrayOf(
    PropTypes.shape(propOffersTypes).isRequired,
  ),
  activeCity: PropTypes.string.isRequired,
  sortType: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  offers: state.offers,
  offersByCity: getActiveCity(state.offers, state.activeCity),
  activeCity: state.activeCity,
  sortType: state.sortType,
});

export default connect(mapStateToProps)(MainPageScreen);

// const TIMEOUTE = 1000;

// const makeSoupp = () => {
//   console.log('> Иду за продуктами');
//   const products = ['Капуста', 'Картофель', 'Мясо'];

//   setTimeout(() => {
//     console.log(`> Нарезаю продукты: ${products.join(', ')}`);

//     setTimeout(() => {
//       console.log('> Продукты нарезаны!');

//       setTimeout(() => {
//         console.log(`> Начинаю варить суп из: ${products.join(', ')}`);

//         setTimeout(() => Math.random() > 0.5
//           ? console.log('> Суп готов!')
//           : console.log('> Упс! Сломалась плита.'), TIMEOUTE);
//       }, TIMEOUTE);
//     }, TIMEOUTE);
//   }, TIMEOUTE);
// };
// makeSoupp();

// const buyProducts = () => {
//   console.log('> Иду за продуктами');

//   return new Promise((resolve) => {
//     setTimeout(() => {
//       const products = ['Капуста', 'Картофель', 'Мясо'];
//       resolve(products);
//     }, TIMEOUTE);
//   });
// };

// const prepareProducts = (products) => {
//   console.log(`> Нарезаю продукты: ${products.join(`, `)}`);
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       console.log(`> Продукты нарезаны!`);
//       resolve(products);
//     }, TIMEOUTE);
//   });
// };

// const makeSoup = (preparedProducts) => {
//   console.log(`> Начинаю варить суп из: ${preparedProducts.join(`, `)}`);
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       return Math.random() > 0.5
//         ? resolve(`> Суп готов!`)
//         : reject(`> Упс! Сломалась плита.`);
//     }, TIMEOUTE);
//   });
// };

// buyProducts()
//   .then(prepareProducts)
//   .then(makeSoup)
//   .then((result) => console.log(result))
//   .catch((error) => console.log(error));

// const makeThing = (number) => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve(`Это действие №${number}`);
//     }, TIMEOUTE);
//   });
// };

// const firstThing = makeThing(1);
// const secondThing = makeThing(2);
// const thirdThing = makeThing(3);

// Promise
//   .race([
//     firstThing,
//     secondThing,
//     thirdThing
//   ])
//   .then((value) => console.log(value));

// const URL = 'https://jsonplaceholder.typicode.com/posts';

// const getPosts = async () => {
//   const response = await fetch(URL);
//   const posts = await response.json();
//   return posts;
// };

// (async () => {
//     const posts = await getPosts()
//     console.log('Список публикаций: ');
//     console.log(posts);
// })();
// //
// const URL = 'https://jsonplaceholder.typicode';

// const getPosts = async () => {
//     let response;
//     try {
//         response = await fetch(URL);
//     } catch (error) {
//         console.log(error);
//         return [];
//     }

//   const posts = await response.json();
//   return posts;
// };

// (async () => {
//     const posts = await getPosts()
//     console.log('Список публикаций: ');
//     console.log(posts);
// })();
