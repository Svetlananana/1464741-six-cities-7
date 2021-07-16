import React from 'react';
import {connect} from 'react-redux';
import {ActionCreator} from '../../store/action';
import PropTypes from 'prop-types';
import City from '../city/city';
import {CITIES_NAMES} from '../../const';

export function CitiesList({activeCity, onChangeCity}) {

  return (
    <ul className="locations__list tabs__list">
      {CITIES_NAMES.map((city) => (
        <City key={city}
          city={city}
          isActive={activeCity === city}
          onChangeCity={onChangeCity}
        />
      ))}
    </ul>
  );
}

CitiesList.propTypes = {
  activeCity: PropTypes.string.isRequired,
  onChangeCity: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  activeCity: state.activeCity,
});

const mapDispatchToProps = (dispatch) => ({
  onChangeCity(city) {
    dispatch(ActionCreator.changeCity(city));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(CitiesList);
