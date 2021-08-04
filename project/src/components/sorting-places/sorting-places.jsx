import React, {memo, useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import SortingItem from '../sorting-item/sorting-item';
import {changeSortType} from '../../store/actions';
import {getSortType} from '../../store/main/selectors';
import {SortType} from '../../const';

function SortingPlaces() {

  const dispatch = useDispatch();
  const sortType = useSelector(getSortType);

  const [sortingPlacesOpen, setSortingPlacesOpen] = useState(false);

  function handleSortingClick() {
    setSortingPlacesOpen((prevState) => !prevState);
  }

  function handleSortingChange(type) {
    dispatch(changeSortType(type));
    handleSortingClick();
  }

  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by </span>
      <span className="places__sorting-type" tabIndex="0" onClick={handleSortingClick}>
        {sortType}
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select"></use>
        </svg>
      </span>
      <ul className={`places__options places__options--custom
      ${sortingPlacesOpen && 'places__options--opened'}`}
      >
        {Object.values(SortType).map((sort) => (
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

export default memo(SortingPlaces);
