import React, {useState} from 'react';
import FormStarsList from '../form-stars-list/form-stars-list';

const MIN_SIMBOL_COUNT = 50;

export default function FormReviews() {
  const [, setRating] = useState('');
  const [review, setReview] = useState('');

  function onRatingChange(evt) {
    setRating(evt.currentTarget.value);
  }

  function onCommentChange(evt) {
    setReview(evt.currentTarget.value);
  }

  function onFormSubmit(evt) {
    evt.preventDefault();
  }

  return (
    <form className="reviews__form form" action="#" method="post" onSubmit={(evt) => onFormSubmit(evt)}>
      <label className="reviews__label form__label" htmlFor="review">Your review</label>
      <div className="reviews__rating-form form__rating">
        <FormStarsList onChange={onRatingChange} />
      </div>
      <textarea className="reviews__textarea form__textarea" id="review" name="review" onChange={onCommentChange} placeholder="Tell how was your stay, what you like and what can be improved" />
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
        To submit review please make sure to set <span className="reviews__star">rating</span> and describe your stay with at least <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button className="reviews__submit form__submit button" type="submit" disabled={review.length < MIN_SIMBOL_COUNT && true}>Submit</button>
      </div>
    </form>
  );
}
