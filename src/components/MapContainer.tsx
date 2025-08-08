"use client";

import React from "react";
import Map from "react-map-gl/mapbox";

const MapContainer = () => {
  return (
    <div className="absolute inset-0">
      <Map
        mapboxAccessToken={process.env.NEXT_PUBLIC_MAP_BOX_API}
        initialViewState={{
          longitude: -122.4,
          latitude: 37.8,
          zoom: 14,
        }}
        style={{ width: "100%", height: "100%" }}
        mapStyle="mapbox://styles/mapbox/streets-v9"
      />
    </div>
  );
};

export default MapContainer;
