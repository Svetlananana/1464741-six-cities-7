import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';

const TIMEOUT = 10000;

export const ErrorMessages = {
  DEFAULT: 'Что-то пошло не так..',
  LOGIN_ERROR: 'Проверьте корректность введенной информации',
};

export default function ErrorMessage({message = ErrorMessages.DEFAULT}) {

  const [isVisible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
    }, TIMEOUT);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <div>
      {isVisible && (
        <div
          style={{
            display: 'flex',
            position: 'fixed',
            zIndex: 1000,
            top: 0,
            left: 0,
            right: 0,
            justifyContent: 'center',
            backgroundColor: 'blue',
            color: 'white',
            fontSize: '32px',
          }}
        >
          <p>{message}</p>
        </div>
      )}
    </div>
  );
}

ErrorMessage.propTypes = {
  message: PropTypes.string,
};

// export function FormReviews({roomId, sendReview}) {
//   // const dispatch = useDispatch();

//   const [rating, setRating] = useState(0);
//   const [review, setReview] = useState('');
//   const isValid = review.length > MIN_SIMBOL_COUNT && rating;
//   // const [reviewSendingFailed, setReviewSendingFailed] = useState(false);

//   function onCommentChange(evt) {
//     setReview(evt.currentTarget.value);
//   }

//   function onFormSubmit(evt) {
//     evt.preventDefault();

//     // setReviewSendingFailed(false);
//     // dispatch(sendReview(({id: roomId, comment: review, rating: rating})))
//     //   .then(() => {
//     //     setRating(null);
//     //     setReview('');
//     //   })
//     //   .catch(() => {
//     //     setReviewSendingFailed(true);
//     //   });

//   }


// FormReviews.propTypes = {
//   roomId: PropTypes.number.isRequired,
//   sendReview: PropTypes.func.isRequired,
// };

// const mapDispatchToProps = (dispatch) => ({
//   sendReview: postReview,
//   // sendReview(id, comment, rating) {
//   //   dispatch(postReview(id, comment, rating));
//   // },
// });

// export default connect(null, mapDispatchToProps)(FormReviews);
