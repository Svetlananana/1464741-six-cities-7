import React from 'react';
import PropTypes from 'prop-types';
import {propReviewTypes} from '../../type-props';
import Review from '../review/review';

const MAX_REVIEWS_COUNT = 10;

export default function ReviewsList({reviews}) {

  const sortedReviews = reviews.slice(0, MAX_REVIEWS_COUNT).sort((firstReview, secondReview) => (new Date(secondReview.date) - new Date(firstReview.date)));

  return(
    <React.Fragment>
      <h2 className="reviews__title">Reviews &middot;
        <span className="reviews__amount">{sortedReviews.length}
        &nbsp;{reviews.length > MAX_REVIEWS_COUNT ? `(${reviews.length})` : ''}
        </span>
      </h2>
      <ul className="reviews__list">
        {sortedReviews.map((review) => (
          <Review key={review.id} review={review} />
        ))}
      </ul>
    </React.Fragment>
  );
}

ReviewsList.propTypes = {
  reviews: PropTypes.arrayOf(
    PropTypes.shape(propReviewTypes).isRequired,
  ).isRequired,
};
