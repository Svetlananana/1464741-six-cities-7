import React, {useState} from 'react';
import FormStarsList from '../form-stars-list/form-stars-list';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {postReview} from '../../store/api-actions';
import ReviewComment from '../reviews-comment/reviews-comment';

const MIN_SIMBOL_COUNT = 50;
const MAX_SIMBOL_COUNT = 300;

export function FormReviews({roomId, sendReview}) {
  const [rating, setRating] = useState(0);
  const [review, setReview] = useState('');
  const isValid = review.length > MIN_SIMBOL_COUNT && rating &&  review.length < MAX_SIMBOL_COUNT;

  function onFormSubmit(evt) {
    evt.preventDefault();
    sendReview({id: roomId, comment: review, rating: rating});
    setRating(0);
    setReview('');
  }

  return (
    <form className="reviews__form form" action="#" method="post"
      onSubmit={(evt) => onFormSubmit(evt)}
    >
      <label className="reviews__label form__label" htmlFor="review">Your review</label>
      <FormStarsList rating={rating}
        setRating={setRating}
      />
      <ReviewComment review={review}  setReview={setReview} />
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
        To submit review please make sure to set
          <span className="reviews__star">rating</span>
          and describe your stay with at least
          <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button className="reviews__submit form__submit button" type="submit"
          disabled={!isValid}
        >
            Submit
        </button>
      </div>
    </form>
  );
}

FormReviews.propTypes = {
  roomId: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
  sendReview: PropTypes.func.isRequired,
};

const mapDispatchToProps = {
  sendReview: postReview,
};

export default connect(null, mapDispatchToProps)(FormReviews);
