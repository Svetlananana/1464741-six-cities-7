import React from 'react';
import {useDispatch} from 'react-redux';
import PropTypes from 'prop-types';
import {setFavorites} from '../../store/api-actions';
import {FavoritesButtonType} from '../../const';


export default function FavoritesButton ({id, buttonType, isFavorite}) {
  const dispatch = useDispatch();
  const {buttonClassName, imgWidth, imgHeight} = FavoritesButtonType[buttonType];

  function handleFavoriteClick() {
    dispatch(setFavorites({id: id, status: Number(!isFavorite)}));
  }

  return (
    <button className={`${buttonClassName}__bookmark-button button
      ${isFavorite ? `${buttonClassName}__bookmark-button--active` : ''}`}
    type="button" onClick={handleFavoriteClick}
    >
      <svg
        className={`${buttonClassName}__bookmark-icon`}
        width={imgWidth} height={imgHeight}
      >
        <use xlinkHref="#icon-bookmark" />
      </svg>
      <span className="visually-hidden">{isFavorite ? 'In bookmarks' : 'To bookmarks'}</span>
    </button>
  );
}

FavoritesButton.propTypes = {
  id: PropTypes.number.isRequired,
  buttonType: PropTypes.string.isRequired,
  isFavorite: PropTypes.bool.isRequired,
};
