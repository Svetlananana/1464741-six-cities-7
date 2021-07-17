import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import {AppRoute} from '../../const';
import MainPageScreen from '../pages/main-page-screen/main-page-screen';
import LoginScreen from '../pages/login-screen/login-screen';
import FavoritesScreen from '../pages/favorites-screen/favorites-screen';
import RoomScreen from '../pages/room-screen/room-screen';
import NotFoundScreen from '../pages/not-found-screen/not-found-screen';

export default function App() {

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={AppRoute.MAIN} component={MainPageScreen} />
        <Route exact path={AppRoute.LOGIN} component={LoginScreen} />
        <Route exact path={AppRoute.FAVORITES} component={FavoritesScreen} />
        <Route exact path={AppRoute.ROOM} component={RoomScreen} />
        <Route component={NotFoundScreen} />
      </Switch>
    </BrowserRouter>
  );
}
