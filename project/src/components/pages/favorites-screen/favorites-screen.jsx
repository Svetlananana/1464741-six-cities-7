import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Link} from 'react-router-dom';
import Header from '../../header/header';
import Favorites from '../../favorites/favorites';
import FavoriteEmpty from '../../favorites-empty/favorites-empty';
import LoadingScreen from '../loading-screen/loading-screen';
import {fetchFavoritesOffers} from '../../../store/api-actions';
import {getFavoritesOffers, getFavoritesLoadingStatus} from '../../../store/data/selectors';
import {AppRoute} from '../../../const';


export default function FavoritesScreen() {

  const dispatch = useDispatch();
  const favoritesOffers = useSelector(getFavoritesOffers);
  const areFavoritesLoaded = useSelector(getFavoritesLoadingStatus);

  const cities = Array.from(new Set(favoritesOffers.map((item) => item.city.name)));
  const favoritesCities = [...cities.values()];

  useEffect(() => {
    dispatch(fetchFavoritesOffers());
  }, [dispatch]);

  if (!areFavoritesLoaded) {
    return (
      <LoadingScreen />
    );
  }

  return (
    <div className="page">
      <Header/>
      {favoritesOffers.length !== 0 ? (
        <Favorites
          favoritesOffers={favoritesOffers}
          favoritesCities={favoritesCities}
        />) : (
        <FavoriteEmpty />
      )}
      <footer className="footer container">
        <Link className="footer__logo-link" to={AppRoute.MAIN}>
          <img className="footer__logo" src="img/logo.svg" alt="6 cities logo" width="64" height="33"/>
        </Link>
      </footer>
    </div>
  );
}

