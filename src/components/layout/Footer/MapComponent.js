import React, { useState } from "react"
import MapGL, { Marker } from "react-map-gl"
import "mapbox-gl/src/css/mapbox-gl.css"
const MapComponent = () => {
  const [viewport, setViewport] = useState({
    latitude: 28.564718,
    longitude: 77.200325,
    zoom: 10,
    minzoom: 9,
    maxzoom: 10,
    width: "400px",
    height: "400px",
  })

  return (
    <div className="map-size">
      <MapGL
        {...viewport}
        mapboxApiAccessToken={
          "pk.eyJ1IjoiY2hhbmFreWE4ODgiLCJhIjoiY2tiZ3cyZm8zMGM4bTJycDMwZ2d5ZjQ4byJ9.sGyU0dgyyvXXxSq5sPNUPQ"
        }
        mapStyle="mapbox://styles/chanakya888/ckbgwn5wy2kox1iryggn43a0n"
        onViewportChange={viewport => setViewport(viewport)}
      >
        <Marker latitude={28.564718} longitude={77.200325}>
          <h1>Marker is here</h1>
        </Marker>
      </MapGL>
    </div>
  )
}

export default MapComponent
