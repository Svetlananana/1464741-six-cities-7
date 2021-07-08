import React from 'react';
import Review from '../review/review';
import PropTypes from 'prop-types';
import {propReviewTypes} from '../../type-props';

export default function ReviewsList({reviews}) {

  return(
    <ul className="reviews__list">
      {reviews.map((review) => (
        <Review key={review.id} review={review} />
      ))}
    </ul>
  );
}

ReviewsList.propTypes = {
  reviews: PropTypes.arrayOf(
    PropTypes.shape(propReviewTypes).isRequired,
  ).isRequired,
};
