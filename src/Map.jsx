import { MapContainer, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css"
import "./index.css"

export default function Map() {
  
  return (
    <MapContainer center={[48.8566,2.3522]}
    zoom={13}
    className="z-0"
    >
      <TileLayer
      attribution= '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      url="https://tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

    </MapContainer>
  );
}