import React, { useState } from "react"
import MapGL, { Marker, Popup } from "react-map-gl"
import "mapbox-gl/src/css/mapbox-gl.css"
import "../../../assets/location-on.svg"
const MapComponent = () => {
  const [viewport, setViewport] = useState({
    latitude: 1.27949,
    longitude: 103.84919,
    zoom: 10,
    minzoom: 9,
    maxzoom: 10,
    width: "300px",
    height: "400px",
  })

  const showAddress = () => {
    const addressBox = document.getElementById("address-box")
    if (addressBox.style.display === "none") {
      addressBox.style.display = "block"
    } else {
      addressBox.style.display = "none"
    }
  }
  return (
    <div className="map">
      <MapGL
        {...viewport}
        mapboxApiAccessToken={
          "pk.eyJ1IjoiY2hhbmFreWE4ODgiLCJhIjoiY2tiZ3cyZm8zMGM4bTJycDMwZ2d5ZjQ4byJ9.sGyU0dgyyvXXxSq5sPNUPQ"
        }
        mapStyle="mapbox://styles/chanakya888/ckbgwn5wy2kox1iryggn43a0n"
        onViewportChange={viewport => setViewport(viewport)}
      >
        <div
          className="w-40 h-auto absolute mt-20 ml-16 bg-white "
          id="address-box"
        >
          <p className="text-sm p-3">
            160 Robinson Road, Suite # 10-01, SBF Center, Singapore 068914
          </p>
        </div>
        <Marker latitude={1.27949} longitude={103.84919}>
          <button
            onClick={e => {
              e.preventDefault()
              showAddress()
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="13.64"
              height="20.771"
              viewBox="0 0 37.64 53.771"
            >
              <path
                id="Icon_material-location-on"
                data-name="Icon material-location-on"
                d="M26.32,3A18.806,18.806,0,0,0,7.5,21.82c0,14.115,18.82,34.951,18.82,34.951S45.14,35.935,45.14,21.82A18.806,18.806,0,0,0,26.32,3Zm0,25.541a6.721,6.721,0,1,1,6.721-6.721A6.724,6.724,0,0,1,26.32,28.541Z"
                transform="translate(-7.5 -3)"
                fill="#003290"
              />
            </svg>
          </button>
        </Marker>
      </MapGL>
    </div>
  )
}

export default MapComponent
