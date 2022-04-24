import React from 'react'
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';

const containerStyle = {
  width: '100%',
  height: '100%',
  borderRadius: '10px',
};

const center = {
  lat: 44.705,
  lng: 37.78
};

function Map() {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: 'AIzaSyCNXOPRF3Cv1UpAitiw23JIUB_iUxKLRFc'
  })

  const [map, setMap] = React.useState(null)

  const onLoad = React.useCallback(function callback(map) {
    const bounds = new window.google.maps.LatLngBounds();
    map.fitBounds(bounds);
    setMap(map)
  }, [])

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null)
  }, [])

  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={center}
      zoom={11}
      onLoad={onLoad}
      onUnmount={onUnmount}
      mapContainerClassName={'map'}
      options={{
        mapTypeControl: false,
        streetViewControl: false
      }}
    >
      <></>
    </GoogleMap>
  ) : <></>
}

export default React.memo(Map)
