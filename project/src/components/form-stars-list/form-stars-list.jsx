import React from 'react';
import PropTypes from 'prop-types';
import {StarsRating} from '../../const';

export default function FormStarsList({rating, setRating}) {

  return(
    <div className="reviews__rating-form form__rating">
      {Object.values(StarsRating).map(({value, title}) => (
        <React.Fragment key={title}>
          <input className="form__rating-input visually-hidden"
            name="rating" value={value} id={`${value}-stars`} type="radio"
            onChange={(evt) => setRating(Number(evt.target.value))}
            checked={rating === value}
          />
          <label htmlFor={`${value}-stars`} className="reviews__rating-label form__rating-label" title={title}>
            <svg className="form__star-image" width="37" height="33">
              <use xlinkHref="#icon-star" />
            </svg>
          </label>
        </React.Fragment>
      ))}
    </div>
  );
}

FormStarsList.propTypes = {
  rating: PropTypes.number.isRequired,
  setRating: PropTypes.func.isRequired,
};
