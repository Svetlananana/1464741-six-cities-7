import React, {useEffect, useRef} from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import useMap from '../../hooks/useMap';
import PropTypes from 'prop-types';
import {propOffersTypes} from '../../type-props';

const defaultIcon = L.icon({
  iconUrl: 'img/pin.svg',
  iconSize: [26, 30],
  iconAnchor: [15, 30],
});

const activeIcon = L.icon({
  iconUrl: 'img/pin-active.svg',
  iconSize: [26, 30],
  iconAnchor: [15, 30],
});

export default function Map({city, offers, hoveredCard}) {
  const mapRef = useRef(null);
  const map = useMap(mapRef, city);


  useEffect(() => {
    const layerGroup = L.layerGroup();

    if (map) {
      offers.forEach(({location: {latitude, longitude}, id}) => {
        const marker = L.marker(
          {
            lat: latitude,
            lng: longitude,
          },
          {
            icon:
            (id === hoveredCard.id)
              ? activeIcon
              : defaultIcon,
          },
        );
        layerGroup.addLayer(marker);
      });

      layerGroup.addTo(map);

      map.flyTo(
        [offers[0].city.location.latitude, offers[0].city.location.longitude],
        offers[0].city.location.zoom,
      );
    }

    return () => {
      if (map) {
        layerGroup.remove();
      }
    };
  }, [map, offers, hoveredCard]);


  return (
    <div
      style={{height: '100%'}}
      ref={mapRef}
    >
    </div>
  );
}

Map.propTypes = {
  city: PropTypes.shape({
    location: PropTypes.shape({
      latitude: PropTypes.string.isRequired,
      longitude: PropTypes.string.isRequired,
      zoom: PropTypes.number.isRequired,
    }).isRequired,
  }),
  offers: PropTypes.arrayOf(
    PropTypes.shape(propOffersTypes).isRequired,
  ),
  hoveredCard: PropTypes.object,
};

