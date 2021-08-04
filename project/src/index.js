import React from 'react';
import ReactDOM from 'react-dom';
import {configureStore} from '@reduxjs/toolkit';
import {createAPI} from './services/api';
import rootReducer from './store/root-reducer';
import {Provider} from 'react-redux';
import {redirect} from './store/middlewares/redirect';
import App from './components/app/app';
import {requireAuthorization} from './store/actions';
import {checkAuth, fetchOffers} from './store/api-actions';
import {AuthorizationStatus} from './const';

const api = createAPI(
  () => store.dispatch(requireAuthorization(AuthorizationStatus.NO_AUTH)),
);

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: api,
      },
    }).concat(redirect),
});

store.dispatch(checkAuth());
store.dispatch(fetchOffers());

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'));

