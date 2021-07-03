import React from 'react';
import PropTypes from 'prop-types';

const StarsRating = {
  PERFECT: {
    value: 5,
    title: 'perfect',
  },
  GOOD: {
    value: 4,
    title: 'good',
  },
  NOT_BAD: {
    value: 3,
    title: 'not bad',
  },
  BADLY: {
    value: 2,
    title: 'badly',
  },
  TERRIBLY: {
    value: 1,
    title: 'terribly',
  },
};

export default function FormStarsList({onChange}) {

  return(
    <div className="reviews__rating-form form__rating">
      {Object.values(StarsRating).map(({value, title}) => (
        <React.Fragment key={title}>
          <input className="form__rating-input visually-hidden" name="rating" value={value} id={`${value}-stars`} type="radio" onChange={onChange} />
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
  onChange: PropTypes.func.isRequired,
};
