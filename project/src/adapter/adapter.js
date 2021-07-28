export function adaptOfferToClient(offer) {
  const adaptedOffer = {
    ...offer,
    host: {
      ...offer.host,
      avatarUrl: offer.host.avatar_url,
      isPro: offer.host.is_pro,
    },
    isFavorite: offer.is_favorite,
    isPremium: offer.is_premium,
    maxAdults: offer.max_adults,
    previewImage: offer.preview_image,
  };

  delete adaptedOffer.host.avatar_url;
  delete adaptedOffer.host.is_pro;
  delete adaptedOffer.is_favorite;
  delete adaptedOffer.is_premium;
  delete adaptedOffer.max_adults;
  delete adaptedOffer.preview_image;

  return adaptedOffer;
}

export function adaptOffersToClient(offers) {
  const adaptedOffers = offers.map(adaptOfferToClient);
  return adaptedOffers;
}

export function adaptReviewToClient(review) {
  const adaptedReview = {
    ...review,
    user: {
      ...review.user,
      avatarUrl: review.user.avatar_url,
      isPro: review.user.is_pro,
    },
  };

  delete adaptedReview.user.avatar_url;
  delete adaptedReview.user.is_pro;

  return adaptedReview;
}

export function adaptReviewsToClient(reviews) {
  const adaptedReviews = reviews.map(adaptReviewToClient);
  return adaptedReviews;
}

export const adaptUserToClient = (user) => {
  const adaptedUser = {
    ...user,
    avatarUrl: user.avatar_url,
    isPro: user.is_pro,
  };

  delete adaptedUser.token;
  delete adaptedUser.avatar_url;
  delete adaptedUser.is_pro;

  return adaptedUser;
};
