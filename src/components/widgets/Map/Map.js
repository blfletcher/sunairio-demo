import React, { useCallback, useContext, useEffect, useState } from 'react';

import { SessionContext } from '../../../context/SessionContext';

import {
  SectionHeader,
} from '../../common/Text';

function Map() {
  const [ markerState, setMarkerState ] = useState(null);

  const { locationData, setLocationData } = useContext(SessionContext);

  const moveMarker = (e) => {
    setMarkerState(e);
  };

  window.initMap = () => {
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 11,
      center: locationData,
    });

    const marker = new google.maps.Marker({
      draggable: true,
      position: locationData,
      map: map,
      title: 'Drag Me',
    });

    google.maps.event.addListener(marker, 'dragend', moveMarker);
  };

  useEffect(() => {
    if (markerState && markerState.latLng) {
      setLocationData({
        lat: markerState.latLng.lat(),
        lng: markerState.latLng.lng(),
      });
      setMarkerState(null);
    }
  }, [locationData, markerState, setLocationData]);

  return (
    <>
      <SectionHeader>
        Drag the Marker to Desired Location
      </SectionHeader>
      <div id="map" className="w-full h-96"></div>
    </>
  );
}

export default Map;
