import React from "react";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  Polyline,
} from "react-leaflet";
import { useSelector } from "react-redux";
import { icon } from "leaflet";
import "leaflet/dist/leaflet.css";

const Mapview = ({ openmodal }) => {
  const state = useSelector((store) => store);


  //console.log(stat)
  // İkon oluşturma
  const planeIcon = icon({
    iconUrl: "/plane-ico.png",
    iconSize: [30, 40],
  });

  const polyline = [
    [51.505, -0.09],
    [51.51, -0.1],
    [51.51, -0.12],
  ]
  console.log(polyline,state.trail);


  return (
    <MapContainer
      center={[39.149702, 35.420686]}
      zoom={7}
      scrollWheelZoom={false}
    >
      <TileLayer
        attribution={
          <span
            dangerouslySetInnerHTML={{
              __html:
                '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
            }}
          />
        }
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      {state.flights.flight.map((flight) => (
        <Marker
          icon={planeIcon}
          key={flight.id} // Benzersiz key prop'u
          position={[flight.lat, flight.lng]}
        >
          <Popup>
            <div className="popup">
              <span>Kod: {flight.code}</span>
              <button onClick={() => openmodal(flight.id)}>Detay</button>{" "}
            </div>
          </Popup>
        </Marker>
      ))}

      {/* İmleçler */}
      <Marker position={[39.971622, 35.220421]}>
        <Popup>A pretty CSS3 popup. Easily customizable.</Popup>
      </Marker>

      <Marker position={[41.029946, 28.778315]}>
        <Popup>A pretty CSS3 popup. Easily customizable.</Popup>
      </Marker>

      {/* Polyline güncellenmeli */} 
      
{/*            <Polyline positions={state.trail} />
 */}
    </MapContainer>



  );
};

export default Mapview;
