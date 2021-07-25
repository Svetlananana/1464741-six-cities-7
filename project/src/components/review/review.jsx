import React from 'react';
import {formatRating} from '../../utils';
import PropTypes from 'prop-types';
import {propReviewTypes} from '../../type-props';

export default function Review({review}) {

  const {
    comment,
    date,
    rating,
    user,
  } = review;
  const {
    avatarUrl,
    name,
    isPro,
  } = user;

  const formatedDate = new Date(date).toLocaleDateString('en-US', {month: 'short', year: 'numeric'});

  return (
    <li className="reviews__item">
      <div className="reviews__user user">
        <div className="reviews__avatar-wrapper user__avatar-wrapper">
          <img className="reviews__avatar user__avatar" src={avatarUrl} width="54" height="54" alt="Reviews avatar"/>
        </div>
        <span className="reviews__user-name">
          {name}
        </span>
        {isPro && (
          <span className="property__user-status">Pro
          </span>
        )}
      </div>
      <div className="reviews__info">
        <div className="reviews__rating rating">
          <div className="reviews__stars rating__stars">
            <span style={{width: formatRating(rating)}}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <p className="reviews__text">
          {comment}
        </p>
        <time className="reviews__time" dateTime={date}>{formatedDate}</time>
      </div>
    </li>
  );
}


Review.propTypes = {
  review: PropTypes.shape(propReviewTypes).isRequired,
};
