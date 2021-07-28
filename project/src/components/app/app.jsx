import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {Router as BrowserRouter, Switch, Route} from 'react-router-dom';
import {AppRoute} from '../../const';
import MainPageScreen from '../pages/main-page-screen/main-page-screen';
import LoginScreen from '../pages/login-screen/login-screen';
import FavoritesScreen from '../pages/favorites-screen/favorites-screen';
import RoomScreen from '../pages/room-screen/room-screen';
import NotFoundScreen from '../pages/not-found-screen/not-found-screen';
import LoadingScreen from '../pages/loading-screen/loading-screen';
import PrivateRoute from '../private-route/private-route';
import {AuthorizationStatus} from '../../const';
import {browserHistory} from '../../browser-history';

const isCheckedAuth = (authorizationStatus) => authorizationStatus === AuthorizationStatus.UNKNOWN;

export function App({authorizationStatus, isDataLoaded}) {

  if (isCheckedAuth(authorizationStatus) || !isDataLoaded) {
    return (
      <LoadingScreen />
    );
  }

  return (
    <BrowserRouter history={browserHistory}>
      <Switch>
        <Route exact path={AppRoute.MAIN} component={MainPageScreen} />
        <Route exact path={AppRoute.LOGIN} component={LoginScreen} />
        <PrivateRoute
          exact path={AppRoute.FAVORITES}
          render={() => <FavoritesScreen />}
        />
        <Route exact path={AppRoute.ROOM} component={RoomScreen} />
        <Route component={NotFoundScreen} />
      </Switch>
    </BrowserRouter>
  );
}


App.propTypes = {
  authorizationStatus: PropTypes.string.isRequired,
  isDataLoaded: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => ({
  authorizationStatus: state.authorizationStatus,
  isDataLoaded: state.isDataLoaded,
});

export default connect(mapStateToProps, null)(App);
