import React, {useEffect} from 'react';
import {useParams} from 'react-router-dom';
import {connect} from 'react-redux';
import {propOffersTypes, propReviewTypes} from '../../../type-props';
import {fetchReviews, fetchNearbyOffers, fetchRoom} from '../../../store/api-actions';
import PropTypes from 'prop-types';
import Header from '../../header/header';
import LoadingScreen from '../loading-screen/loading-screen';
import PropertyRoom from '../../room-property/room-property';


export function RoomScreen({offer, reviews, nearbyOffers, loadRoomData, isRoomDataLoaded }) {
  const {id} = useParams();

  useEffect(() => {
    loadRoomData(id);
  }, [id, loadRoomData]);

  if (!isRoomDataLoaded) {
    return (
      <LoadingScreen />
    );
  }

  return (
    <div className="page">
      <Header />
      <main className="page__main page__main--property">
        <PropertyRoom offer={offer} reviews={reviews} nearbyOffers={nearbyOffers} />
      </main>
    </div>
  );
}

RoomScreen.propTypes = {
  offer: PropTypes.shape(propOffersTypes),
  reviews: PropTypes.arrayOf(
    PropTypes.shape(propReviewTypes).isRequired),
  nearbyOffers: PropTypes.arrayOf(
    PropTypes.shape(propOffersTypes),
  ),
  loadRoomData: PropTypes.func.isRequired,
  isRoomDataLoaded: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => ({
  offer: state.offer,
  nearbyOffers: state.nearbyOffers,
  reviews: state.reviews,
  isRoomDataLoaded: !state.loadRoomDetails.isLoading && !state.loadOffersNearby.isLoading && !state.loadReviews.isLoading,
});

const mapDispatchToProps = (dispatch)  => ({
  loadRoomData(id) {
    dispatch(fetchRoom(id));
    dispatch(fetchNearbyOffers(id));
    dispatch(fetchReviews(id));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(RoomScreen);
