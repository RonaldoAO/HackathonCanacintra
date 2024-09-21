import { MapContainer, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "./index.css";
import Company from "./components/Company";
import images from "./constants/images";
import { Steps } from "antd";

export default function Map() {
  return (
    <>
      <div className="flex flex-row bg-[#3f00e7] p-2  mb-5 rounded-md shadow-lg text-slate-200 mx-2">
        <div className="p-2">
          <p className="text-xl font-bold">Avance: 1/5</p>
          <p className="text-sm">Reto: Prueba pan de muerto</p>
        </div>
        <div className="divider divider-horizontal"></div>
        <div className="content-center mx-auto">
          <button>
            Comprobar
          </button>
        </div>
        <div className="divider divider-horizontal border-white "></div>
        <div className="p-2 align-middle content-center">
          Amistad
        </div>
      </div>
      <div className="flex flex-row sm:flex-col items-center justify-center">
        <MapContainer center={[19.384815, -99.183668]} zoom={13} className="z-0 ">
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
            nombre="Canasto Panadería"
            direccion="C. Alfonso Herrera 13, San Rafael, Cuauhtémoc, 06470 Ciudad de México, CDMX"
            imagen="https://lh5.googleusercontent.com/p/AF1QipOaKNjV0_9PehTLDjCGJ9lBtkW91yrSljoRJHAi=w408-h306-k-no"
          />
          <Company
            nombre="Matre"
            direccion="Cda. Monte Ararat 220-Local 4, Lomas de Chapultepec, Miguel Hidalgo, 11000 Ciudad de México, CDMX"
            imagen="https://lh5.googleusercontent.com/p/AF1QipNSQRqqGXDOy3vhZfOkLIIED1rsKKjDxj2555tm=w426-h240-k-no"
          />
          <Company
            nombre="COMPAN"
            direccion="Alfonso Pruneda, Copilco el Alto, Coyoacán, 04360 Ciudad de México, CDMX"
            imagen="https://lh5.googleusercontent.com/p/AF1QipNr0wuHwcXcQLApVsrQ1FLHnjy7Zd04YjPYGuCY=w408-h306-k-no"
          />
          <Company
            nombre="Sucre i cacao "
            direccion="Cda. Augusto Rodin 57, Nápoles, Benito Juárez, 03840 Ciudad de México, CDMX"
            imagen="https://lh5.googleusercontent.com/p/AF1QipONIxeuzMhM9Uu5Orw7yQlkTjvLFoOgvhTqJuO8=w408-h388-k-no"
          />
          <Company
            nombre="Casa Marc Panaderia"
            direccion="Matías Romero 1411-A, Letran Valle, Benito Juárez, 03650 Ciudad de México, CDMX"
            imagen="https://lh5.googleusercontent.com/p/AF1QipMyejSm_lX2fZMHS0ko9o2DMb_HjeVyJclW2b3p=w408-h306-k-no"
          />
          <Company
            nombre="Marukoshi Bakery"
            direccion="Tokio 824, Portales Sur, Benito Juárez, 03300 Ciudad de México, CDMX"
            imagen="https://lh5.googleusercontent.com/p/AF1QipPwuFDj_FjiXp1gLMRXWC0lgvP48y3unRc9H4LL=w408-h306-k-no"
          />
          
        </div>
      </div>
      
      {/* You can open the modal using document.getElementById('ID').showModal() method */}
    </>
  );
}
