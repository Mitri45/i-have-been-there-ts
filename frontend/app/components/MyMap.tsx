'use client';

import Map from 'react-map-gl';

export default async function MyMap() {
  return (
    <Map
      mapLib={import('mapbox-gl')}
      mapboxAccessToken={process.env.NEXT_PUBLIC_MAPBOX_TOKEN}
      initialViewState={{
        longitude: 174,
        latitude: -40,
        zoom: 6,
      }}
      mapStyle="mapbox://styles/mapbox/streets-v9"
    />
  );
}
