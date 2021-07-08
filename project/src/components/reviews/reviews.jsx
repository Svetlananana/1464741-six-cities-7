import React from 'react';
import ReviewsList from '../reviews-list/reviews-list';
import PropTypes from 'prop-types';
import {propReviewTypes} from '../../type-props';

export default function Reviews({reviews}) {

  return(
    <React.Fragment>
      <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{reviews.length}</span></h2>
      {(reviews.length > 0) && <ReviewsList reviews={reviews} />}
    </React.Fragment>
  );
}

Reviews.propTypes = {
  reviews: PropTypes.arrayOf(
    PropTypes.shape(propReviewTypes).isRequired,
  ).isRequired,
};
