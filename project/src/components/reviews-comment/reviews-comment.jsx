import React from 'react';
import PropTypes from 'prop-types';

export default function ReviewComment({review, setReview}) {
  return (
    <textarea
      className="reviews__textarea form__textarea"
      id="review"
      name="review"
      placeholder="Tell how was your stay, what you like and what can be improved"
      value={review}
      onChange={(evt) => setReview(evt.target.value)}
    >
    </textarea>
  );
}

ReviewComment.propTypes = {
  review: PropTypes.string,
  setReview: PropTypes.func.isRequired,
};
