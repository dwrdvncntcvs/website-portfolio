import React from "react";
import "./map.scss";

import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";

export default function Map({ location, popup }) {
  const { latitude, longitude } = location;
  const MAP_URL =
    "https://api.mapbox.com/styles/v1/dwrdvncntcvs/cl5d8nzvx001a14qnvpn436tz/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1IjoiZHdyZHZuY250Y3ZzIiwiYSI6ImNsNWQ5MnVyMTA1NGczb3IzZzl2eGt5YnYifQ.5AHyM5EK0pJbjBsyuoctvA";

  return (
    <MapContainer
      id="map"
      center={[latitude, longitude]}
      zoom={13} 
      scrollWheelZoom={true}
    >
      <TileLayer attribution={false} url={MAP_URL} />
      <Marker position={[latitude, longitude]}>
        <Popup>{popup}</Popup>
      </Marker>
    </MapContainer>
  );
}
