import React from 'react';  // {Fragment}
import PropTypes from 'prop-types';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import {AppRoute} from '../../const';
import MainPageScreen from '../main-screen/main-page';
import LoginScreen from '../login-screen/login-screen';
import FavoritesScreen from '../favorites-screen/favorites-screen';
import RoomScreen from '../room-screen/room-screen';
import NotFoundScreen from '../not-found-screen/not-found-screen';

export default function App(props) {
  const {cardsCount} = props;

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={AppRoute.MAIN}>
          <MainPageScreen cardsCount={cardsCount}/>
        </Route>
        <Route exact path={AppRoute.LOGIN} component={LoginScreen} />
        <Route exact path={AppRoute.FAVORITES} component={FavoritesScreen} />
        <Route exact path={AppRoute.ROOM} component={RoomScreen} />
        <Route component={NotFoundScreen} />
      </Switch>
    </BrowserRouter>
  );
}

App.propTypes = {
  cardsCount: PropTypes.number.isRequired,
};
