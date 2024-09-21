import { MapContainer, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "./index.css";
import Company from "./components/Company";
import images from "./constants/images";

export default function Map() {
  return (
    <>
      <div className="flex flex-row sm:flex-col items-center justify-center">
        <MapContainer center={[48.8566, 2.3522]} zoom={13} className="z-0 ">
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
        </MapContainer>
        <div className="w-[40%] sm:w-screen h-[380px]  p-4 overflow-y-scroll ">
          <Company
            nombre="La miga de pan"
            direccion="Monterrey 284-Local B, Roma Sur, Cuauhtémoc, 06760 Ciudad de México, CDMX"
            imagen={images.negocio01}
          />
          <Company
            nombre="La miga de pan"
            direccion="Monterrey 284-Local B, Roma Sur, Cuauhtémoc, 06760 Ciudad de México, CDMX"
            imagen={images.negocio01}
          />
          <Company
            nombre="La miga de pan"
            direccion="Monterrey 284-Local B, Roma Sur, Cuauhtémoc, 06760 Ciudad de México, CDMX"
            imagen={images.negocio01}
          />
          <Company
            nombre="La miga de pan"
            direccion="Monterrey 284-Local B, Roma Sur, Cuauhtémoc, 06760 Ciudad de México, CDMX"
            imagen={images.negocio01}
          />
          <Company
            nombre="La miga de pan"
            direccion="Monterrey 284-Local B, Roma Sur, Cuauhtémoc, 06760 Ciudad de México, CDMX"
            imagen={images.negocio01}
          />
          <Company
            nombre="La miga de pan"
            direccion="Monterrey 284-Local B, Roma Sur, Cuauhtémoc, 06760 Ciudad de México, CDMX"
            imagen={images.negocio01}
          />
          <Company
            nombre="La miga de pan"
            direccion="Monterrey 284-Local B, Roma Sur, Cuauhtémoc, 06760 Ciudad de México, CDMX"
            imagen={images.negocio01}
          />
          <Company
            nombre="La miga de pan"
            direccion="Monterrey 284-Local B, Roma Sur, Cuauhtémoc, 06760 Ciudad de México, CDMX"
            imagen={images.negocio01}
          />
        </div>
      </div>
      {/* You can open the modal using document.getElementById('ID').showModal() method */}
      
    </>
  );
}
