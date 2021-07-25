import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import {AppRoutes} from '../../const';
import MainPageScreen from '../pages/main-page-screen/main-page-screen';
import LoginScreen from '../pages/login-screen/login-screen';
import FavoritesScreen from '../pages/favorites-screen/favorites-screen';
import RoomScreen from '../pages/room-screen/room-screen';
import NotFoundScreen from '../pages/not-found-screen/not-found-screen';
import LoadingScreen from '../pages/loading-screen/loading-screen';
import PrivateRoute from '../private-route/private-route';
import {AuthorizationStatus} from '../../const';

const isCheckedAuth = (authorizationStatus) => authorizationStatus === AuthorizationStatus.UNKNOWN;

export function App({authorizationStatus, isDataLoaded}) {

  if (isCheckedAuth(authorizationStatus) || !isDataLoaded) { // какую из этих проверок лучше оставить?
    return (
      <LoadingScreen />
    );
  }
  // export function App({isDataLoaded}) {

  //   if (!isDataLoaded) {
  //     return (
  //       <LoadingScreen />
  //     );
  //   }

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={AppRoutes.MAIN} component={MainPageScreen} />
        <Route exact path={AppRoutes.LOGIN} component={LoginScreen} />
        <PrivateRoute
          exact path={AppRoutes.FAVORITES}
          render={() => <FavoritesScreen />}
        />
        <Route exact path={AppRoutes.ROOM} component={RoomScreen} />
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
