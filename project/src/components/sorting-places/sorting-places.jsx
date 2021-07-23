import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {ActionCreator} from '../../store/action';
import {SortTypes} from '../../const';
import SortingItem from '../sorting-item/sorting-item';

export function SortingPlaces({sortType, onChangeSort}) {

  const [sortingPlacesOpen, setSortingPlacesOpen] = useState(false);

  function handleSortingClick() {
    setSortingPlacesOpen((prevState) => !prevState);
  }

  function handleSortingChange(type) {
    onChangeSort(type);
    setSortingPlacesOpen(false);
  }

  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by</span>
      <span className="places__sorting-type" tabIndex="0" onClick={handleSortingClick}>
        { sortType}
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select"></use>
        </svg>
      </span>
      <ul className={`places__options places__options--custom
      ${sortingPlacesOpen && 'places__options--opened'}`}
      >
        {Object.values(SortTypes).map((sort) => (
          <SortingItem
            key={sort}
            isActive={sortType === sort}
            sortType={sort}
            onChangeSort={handleSortingChange}
          />
        ))}
      </ul>
    </form>
  );
}

SortingPlaces.propTypes = {
  sortType: PropTypes.string.isRequired,
  onChangeSort: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  sortType: state.sortType,
});

const mapDispatchToProps = (dispatch) => ({
  onChangeSort(sortType) {
    dispatch(ActionCreator.changeSortType(sortType));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(SortingPlaces);
