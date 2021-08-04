import React, {memo, useState} from 'react';
import PropTypes from 'prop-types';
import {useDispatch} from 'react-redux';
import {postReview} from '../../store/api-actions';
import Alert from '@material-ui/lab/Alert';
import ReviewComment from '../reviews-comment/reviews-comment';
import FormStarsList from '../form-stars-list/form-stars-list';
import {ErroreMessage} from '../../const';

const MIN_SIMBOL_COUNT = 50;
const MAX_SIMBOL_COUNT = 300;

function FormReviews({roomId}) {

  const dispatch = useDispatch();

  const [rating, setRating] = useState(0);
  const [review, setReview] = useState('');
  const [isReviewSending, setReviewSending] = useState(false);

  const isValid = review.length > MIN_SIMBOL_COUNT && rating &&  review.length < MAX_SIMBOL_COUNT;

  function onFormSubmit(evt) {
    evt.preventDefault();
    setReviewSending(false);
    dispatch(postReview({id: roomId, comment: review, rating: rating}))
      .then(() => {
        setRating(0);
        setReview('');
      })
      .catch(() => {
        setReviewSending(true);
      });

  }

  return (
    <form className="reviews__form form" action="#" method="post"
      onSubmit={(evt) => onFormSubmit(evt)}
    >
      {isReviewSending && <Alert severity="info">{ErroreMessage.REVIEW_ERROR}</Alert>}
      <label className="reviews__label form__label" htmlFor="review">Your review</label>
      <FormStarsList rating={rating}
        setRating={setRating}
      />
      <ReviewComment review={review}  setReview={setReview} />
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
        To submit review please make sure to set
          <span className="reviews__star">rating</span>
          and describe your stay with at least&nbsp;
          <b className="reviews__text-amount">{MIN_SIMBOL_COUNT} characters</b>.
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
};

export default memo(FormReviews);
