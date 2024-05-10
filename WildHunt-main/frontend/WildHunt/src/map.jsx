
import React from 'react';
import "leaflet/dist/leaflet.css";
import "./map.css";
import { MapContainer, TileLayer, Marker, Popup, useMapEvents } from 'react-leaflet';

function LocationPicker({ onLocationSelected }) {
  const map = useMapEvents({
    click: (e) => {
      const { lat, lng } = e.latlng;
      onLocationSelected({ lat, lng });
    },
  });

  return null;
}

function MapComp({ onLocationSelected }) {
  const [sharedLocation, setSharedLocation] = React.useState(null);

  const handleLocationSelected = (location) => {
    setSharedLocation(location);
    onLocationSelected(location); 
  };

  return (
    <MapContainer center={[34.4367, 35.8497]} zoom={12} zoomControl={false} className='map'>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
      />
      {sharedLocation && (
        <Marker position={[sharedLocation.lat, sharedLocation.lng]}>
          <Popup>
            Shared Location <br /> Latitude: {sharedLocation.lat}, Longitude: {sharedLocation.lng}
          </Popup>
        </Marker>
      )}
      <LocationPicker onLocationSelected={handleLocationSelected} />
    </MapContainer>
  );
}

export default MapComp;
