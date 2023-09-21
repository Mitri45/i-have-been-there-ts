'use client';
import Map, { Marker } from 'react-map-gl';
import { type LngLatBoundsLike } from 'mapbox-gl';
import { useMemo } from 'react';

type MarkerType = {
  marker_id: string;
  latitude: number;
  longitude: number;
  user_id: string;
  created_at: Date;
};

export default function MyMap({ markers }: { markers: MarkerType[] }) {
  const boundaries: LngLatBoundsLike = [
    { lat: -34.122, lng: 169.264 },
    { lat: -46.954, lng: 176.831 },
  ];
  console.log('\x1b[1m', '\x1b[42m', `${JSON.stringify(markers)}`, '\x1b[0m');
  const mapMarkers = useMemo(
    () =>
      markers.map((marker) => (
        <Marker key={marker.marker_id} longitude={marker.longitude} latitude={marker.latitude} />
      )),
    [markers],
  );
  console.log('\x1b[1m', '\x1b[42m', `Markers ${mapMarkers}`, '\x1b[0m');
  return (
    <Map
      reuseMaps
      mapboxAccessToken={process.env.NEXT_PUBLIC_MAPBOX_TOKEN}
      mapStyle="mapbox://styles/mapbox/streets-v9"
      initialViewState={{
        bounds: boundaries,
      }}
    >
      {mapMarkers}
    </Map>
  );
}
