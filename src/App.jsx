import { icon } from "leaflet";
import ButtonNeon from "./components/ButtonNeon";
import Navbar from "./components/Navbar";
import icons from "./constants/icons";
import Advance from "./components/Advance";
import MisionCard from "./components/MisionCard";
import Sidebar from "./components/Sidebar";
import { useEffect, useState } from "react";
import Map from "./Map";
import DrawerIA from "./components/DrawerIA";
import images from "./constants/images";
import Favicon from "./components/Favicon";

export default function App() {
  const [screen, setScreen] = useState("home");
  const [init, setInit]  = useState(false);

  useEffect(() => {
    // Mostrar el modal al cargar la página
    document.getElementById("bienvenida").showModal()
  }, []);

  const muertos = ["Pan de muerto","Panteon", "Sempasuchil", "Recorre", "Gastronomia"]
  const traji = ["Experiencia", "Taller", "Guia", "Conoce", "Gastronomia"]

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);

    window.addEventListener("resize", handleResize);

    // Limpia el evento cuando el componente se desmonta
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <Navbar />
      <div className="flex">
        <Sidebar setScreen={setScreen} />

        <div className=" w-[90%] h-screen pt-20  sm:w-[100%] align-middle relative">
          

          {screen == "home" && (
            <div className="h-full flex flex-col">
            <Advance visible={init}/>
            <div className="w-full sm:w-screen   p-4 overflow-y-scroll">
              <div className="flex flex-row sm:flex-col justify-between">
                <h2 className="text-xl font-bold mb-4">Lo mas top</h2>
                <select className="select select-bordered w-full max-w-xs">
                  <option disabled selected>
                    O Elige un Estado
                  </option>
                  <option>México</option>
                  <option>Oaxaca</option>
                </select>
              </div>

              <p className="mb-2">
                Hola hemos visto que estas en CDMX te presento lo mas revelante
                que puedes encontrar aquí
              </p>
              <MisionCard imagenG="https://media.admagazine.com/photos/618a5eb3a9f7fab6f0622baa/1:1/w_2000,h_2000,c_limit/96749.jpg" imagenCH={images.muertos} titulo="Dia de muertos" descripcion="Una de las festividades con mas tradicion de todo méxico"
              actividades={muertos} setInit={setInit}/>
              <MisionCard  imagenG="https://trajinerasvipxochimilco.com/wp-content/uploads/2023/08/imagen-principal.jpg" imagenCH={images.xochimilco} titulo="Las trajineras" descripcion=""
              actividades={traji}/>
              
            </div>
            </div>
          )}
          {screen == "map" && 
            
            <Map />
           
          }
          <DrawerIA/>
          {windowWidth < 768 &&
          <Favicon setScreen={setScreen} screen={screen}/>}
        </div>
      </div>
      <dialog id="bienvenida" className="modal">
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
