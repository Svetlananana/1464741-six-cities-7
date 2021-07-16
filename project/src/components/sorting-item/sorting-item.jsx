import React from 'react';
import PropTypes from 'prop-types';

export default function SortingItem({isActive, sortType, onChangeSorting}) {

  function handleSortingClick() {
    onChangeSorting(sortType);
  }

  return (
    <li className={`places__option ${isActive && 'places__option--active'}`}
      tabIndex="0"
      onClick={handleSortingClick}
    >
      {sortType}
    </li>
  );
}

SortingItem.propTypes = {
  isActive: PropTypes.bool.isRequired,
  sortType: PropTypes.string.isRequired,
  onChangeSorting: PropTypes.func.isRequired,
};
