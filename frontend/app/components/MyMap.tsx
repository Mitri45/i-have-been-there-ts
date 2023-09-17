'use client';

import Map from 'react-map-gl';
import type { LngLatBoundsLike } from 'mapbox-gl';

export default async function MyMap() {
  const boundaries: LngLatBoundsLike = [
    { lat: -34.122, lng: 169.264 },
    { lat: -46.954, lng: 176.831 },
  ];

  return (
    <Map
      reuseMaps
      mapLib={import('mapbox-gl')}
      mapboxAccessToken={process.env.NEXT_PUBLIC_MAPBOX_TOKEN}
      mapStyle="mapbox://styles/mapbox/streets-v9"
      initialViewState={{
        bounds: boundaries,
      }}
      // maxBounds={boundaries}
    />
  );
}
