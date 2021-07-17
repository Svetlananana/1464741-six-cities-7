import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';
import {reducer} from './store/reducer';
import {Provider} from 'react-redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import App from './components/app/app';
import {ActionCreator} from './store/action';
import {offers} from './moks/offers';

const store = createStore(reducer, composeWithDevTools());
store.dispatch(ActionCreator.loadOffers(offers));

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'));

