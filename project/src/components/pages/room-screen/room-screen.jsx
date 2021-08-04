import React, {useEffect} from 'react';
import {useParams} from 'react-router-dom';
import {useSelector, useDispatch} from 'react-redux';
import Header from '../../header/header';
import LoadingScreen from '../loading-screen/loading-screen';
import PropertyRoom from '../../room-property/room-property';
import {fetchReviews, fetchNearbyOffers, fetchOffer} from '../../../store/api-actions';
import {getNearbyOffers, getLoadOfferDetailsStatus, getLoadOffersNearbyStatus, getLoadReviewsStatus, getOffer} from '../../../store/data/selectors';

export default function RoomScreen() {

  const params = useParams();
  const dispatch = useDispatch();

  const id = Number(params.id);
  const currentOffers = useSelector(getOffer);
  const nearbyOffers = useSelector(getNearbyOffers);
  const isLoadRoomDetails = useSelector(getLoadOfferDetailsStatus);
  const isLoadOffersNearby = useSelector(getLoadOffersNearbyStatus);
  const isLoadReviews = useSelector(getLoadReviewsStatus);
  const isRoomDataLoaded = !isLoadRoomDetails.isLoading && !isLoadOffersNearby.isLoading && !isLoadReviews.isLoading;

  useEffect(() => {
    dispatch(fetchOffer(id));
    dispatch(fetchNearbyOffers(id));
    dispatch(fetchReviews(id));
  }, [id, dispatch]);

  if (!isRoomDataLoaded) {
    return (
      <LoadingScreen />
    );
  }

  return (
    <div className="page">
      <Header />
      <main className="page__main page__main--property">
        <PropertyRoom offer={currentOffers} nearbyOffers={nearbyOffers} />
      </main>
    </div>
  );
}
