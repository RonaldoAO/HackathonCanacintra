import React, { useEffect, useState } from "react";
import { MdOutlineRestaurant } from "react-icons/md";
import { GiBinoculars } from "react-icons/gi";
import { MdOutlineExplore } from "react-icons/md";
import { TbPlant } from "react-icons/tb";
import images from "../constants/images";

export default function MisionCard({ imagenG, imagenCH, titulo, descripcion, actividades}) {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [screen, setScreen] = useState(1);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);

    window.addEventListener("resize", handleResize);

    // Limpia el evento cuando el componente se desmonta
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      {windowWidth < 768 ? (
        <div className=" card bg-base-100 image-full w-96 shadow-xl mt-5">
          <figure>
            <img src={imagenCH} alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">{titulo}</h2>
            <p>{descripcion}</p>
            <div className="card-actions justify-end">
              <button
                className="btn btn-primary"
                onClick={() =>{
                  document.getElementById("my_modal_2").showModal()
                  setScreen("1")
                }
                  
                }
              >
                Explorar
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div className="card card-side bg-base-100 shadow-xl mt-5">
          <figure>
            <img
              src={imagenG}
              alt="Movie"
              className="w-[300px] sm:w-[200px]"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">{titulo}</h2>
            <p className="sm:hidden">{descripcion}</p>
            <ul className="timeline">
              <li>
                <div className="timeline-start">100pts</div>
                <div className="timeline-middle">
                  <div className="bg-black rounded-full w-5 h-5 align-middle flex text-center justify-center justify-items-center">
                    <MdOutlineRestaurant
                      className="text-white mx-auto my-auto"
                      size={12}
                    />
                  </div>
                </div>
                <div className="timeline-end timeline-box">{actividades[0]}</div>
                <hr />
              </li>
              <li>
                <hr />
                <div className="timeline-start">120 pts</div>
                <div className="timeline-middle">
                  <div className="bg-black rounded-full w-5 h-5 align-middle flex text-center justify-center justify-items-center">
                    <MdOutlineExplore
                      className="text-white mx-auto my-auto"
                      size={12}
                    />
                  </div>
                </div>
                <div className="timeline-end timeline-box">{actividades[1]}</div>
                <hr />
              </li>
              <li>
                <hr />
                <div className="timeline-start">100 pts</div>
                <div className="timeline-middle">
                  <div className="bg-black rounded-full w-5 h-5 align-middle flex text-center justify-center justify-items-center">
                    <TbPlant className="text-white mx-auto my-auto" size={12} />
                  </div>
                </div>
                <div className="timeline-end timeline-box">{actividades[2]}</div>
                <hr />
              </li>
              <li>
                <hr />
                <div className="timeline-start">50 pts</div>
                <div className="timeline-middle">
                  <div className="bg-black rounded-full w-5 h-5 align-middle flex text-center justify-center justify-items-center">
                    <MdOutlineExplore
                      className="text-white mx-auto my-auto"
                      size={12}
                    />
                  </div>
                </div>
                <div className="timeline-end timeline-box">{actividades[3]}</div>
                <hr />
              </li>
              <li>
                <hr />
                <div className="timeline-start">250pts</div>
                <div className="timeline-middle">
                  <div className="bg-black rounded-full w-5 h-5 align-middle flex text-center justify-center justify-items-center">
                    <MdOutlineRestaurant
                      className="text-white mx-auto my-auto"
                      size={12}
                    />
                  </div>
                </div>
                <div className="timeline-end timeline-box">{actividades[4]}</div>
              </li>
            </ul>
            <div className="card-actions justify-end">
              <button
                className="btn btn-primary"
                onClick={() =>
                  
                  {
                    document.getElementById("my_modal_2").showModal()
                    setScreen(1)
                  }
                }
              >
                Iniciar
              </button>
            </div>
          </div>
        </div>
      )}

  <dialog id="my_modal_2" className="modal">
  {(screen == 1) &&
          <div className="modal-box w-11/12 max-w-5xl flex flex-row sm:flex-col">
          
            <div>
              <img src={images.mascota021} className="w-48" />
            </div>
            <div>
              <h3 className="font-bold text-lg">Hola! ¿Puedes olerlo?</h3>
              <p className="py-4">
                Ya huele a sempasuchil y a chocolatito con pan de muerto......{" "}
                <br />
                ¿Sabias que en el estado de michoacan los pescadores usan redes en
                forma de mariposa?
                <br />
                Esto es porque en esta temporada del año las mariposas monarca
                migran a México
              </p>
              <div className="modal-action">
                <form method="dialog">
                  {/* if there is a button, it will close the modal */}
                  <button className="btn" onClick={() => {setScreen(2)}}>Entrar a esta aventura</button>
                  <button className="btn btn-secondary ml-2">Salir</button>
                </form>
              </div>
            </div>
          </div>
}
{(screen == 2) &&
          <div className="modal-box w-11/12 max-w-5xl flex flex-row sm:flex-col">
          
            <div>
              <img src={images.mascotaConPan} className="w-48" />
            </div>
            <div>
              <h3 className="font-bold text-lg">El rico pan de muerto</h3>
              <p className="py-4">
                Este es uno de los pane mas rico que hay méxico, que se acostumbre comer en el mes de Octubre o Noviembre{" "}
                <br />
                ¿Pero porque en este mes exactamente y que es lo que representa?
                <br />
                Bueno <b>comencemos</b> con esta historia
              </p>
              <div className="modal-action">
                <form method="dialog">
                  {/* if there is a button, it will close the modal */}
                  <button className="btn" onClick={() => {setScreen(2)}}>Next</button>
                  
                </form>
              </div>
            </div>
          </div>
}
        </dialog>

      
    </>
  );
}
