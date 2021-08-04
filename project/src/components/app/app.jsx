import React from 'react';
import {useSelector} from 'react-redux';
import {Router as BrowserRouter, Switch, Route} from 'react-router-dom';
import PrivateRoute from '../private-route/private-route';
import MainPageScreen from '../pages/main-page-screen/main-page-screen';
import LoginScreen from '../pages/login-screen/login-screen';
import FavoritesScreen from '../pages/favorites-screen/favorites-screen';
import RoomScreen from '../pages/room-screen/room-screen';
import NotFoundScreen from '../pages/not-found-screen/not-found-screen';
import LoadingScreen from '../pages/loading-screen/loading-screen';
import {browserHistory} from '../../browser-history';
import {getAuthorizationStatus} from '../../store/user/selectors';
import {getDataLoadedStatus} from '../../store/data/selectors';
import {AppRoute} from '../../const';
import {AuthorizationStatus} from '../../const';


const isCheckedAuth = (authorizationStatus) => authorizationStatus === AuthorizationStatus.UNKNOWN;

export default function App() {

  const isDataLoaded = useSelector(getDataLoadedStatus);
  const authorizationStatus = useSelector(getAuthorizationStatus);

  if (isCheckedAuth(authorizationStatus) || !isDataLoaded) {
    return (
      <LoadingScreen />
    );
  }

  return (
    <BrowserRouter history={browserHistory}>
      <Switch>
        <Route exact path={AppRoute.MAIN} component={MainPageScreen} />
        <PrivateRoute
          exact path={AppRoute.FAVORITES}
          render={() => <FavoritesScreen />}
        />
        <Route exact path={AppRoute.LOGIN} component={LoginScreen} />
        <Route exact path={AppRoute.ROOM} component={RoomScreen} />
        <Route component={NotFoundScreen} />
      </Switch>
    </BrowserRouter>
  );
}
