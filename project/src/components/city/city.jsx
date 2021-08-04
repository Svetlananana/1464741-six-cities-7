import React from 'react';
import PropTypes from 'prop-types';

export default function City({city, isActive, onClick}) {

  return (
    <li className="locations__item">
      <a onClick={onClick}
        href={city.name} className={`locations__item-link tabs__item ${isActive && (
          'tabs__item--active' )}`}
      >
        <span>{city}</span>
      </a>
    </li>
  );
}

City.propTypes = {
  city: PropTypes.string.isRequired,
  isActive: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
};
