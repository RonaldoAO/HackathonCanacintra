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
      <button
        className="btn"
        onClick={() => document.getElementById("my_modal_4").showModal()}
      >
        open modal
      </button>
      <dialog id="my_modal_4" className="modal">
        <div className="modal-box w-11/12 max-w-5xl flex flex-row sm:flex-col">
          <div>
            <img src={images.mascota02} className="w-48"/>
          </div>
          <div>
            <h3 className="font-bold text-lg">Hola!</h3>
            <p className="py-4">Te doy la bienvenida a nuestra plataforma.. 

              ¿Estas listo para conocer la gran diversidad de tradiciones y cultura que tiene México?
              <br/>
              Cumple con cada uno de los retos, explora nuevos lugares y sobre todo diviertete que al final de cada aventura tenemos grandes
              recompensas para ti 
            </p>
            <div className="modal-action">
              <form method="dialog">
                {/* if there is a button, it will close the modal */}
                <button className="btn">Adelante</button>
              </form>
            </div>
          </div>
        </div>
      </dialog>
    </>
  );
}
