import React, { useEffect, useState } from "react";

export default function MisionCard() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

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
            <img
              src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Shoes!</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Buy Now</button>
            </div>
          </div>
        </div>
      ) : (
        <div className="card card-side bg-base-100 shadow-xl mt-5">
          <figure>
            <img
              src="https://media.admagazine.com/photos/618a5eb3a9f7fab6f0622baa/1:1/w_2000,h_2000,c_limit/96749.jpg"
              alt="Movie"
              className="w-[300px] sm:w-[200px]"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Titulo de tarjeta</h2>
            <p className="sm:hidden">Historia acerca de ......</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Iniciar</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
