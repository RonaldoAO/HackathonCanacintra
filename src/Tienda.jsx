import React from "react";
import CardStore from "./components/CardStore";

export default function Tienda() {
  return (
    <div>
      <h2 className="text-xl font-bold mb-4 ml-5">Recompensas</h2>
      <div className="carousel carousel-center  w-full rounded-box sm:max-w-md space-x-4 p-4">
        <div className="carousel-item ">
          <CardStore
            nombre="Viaje a Oaxaca"
            precio="100,000,000"
            foto="https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcQahK6Ybi4qTI8_9XyDAF5FQ9tCbE00gFEuV070ECpCZMoeYPRzC_fTfgswXOUCSM9b0ZGQ6OCyWXLPIjWb6IcWmJy51s7__jiPySYOSA"
          />
        </div>
        <div className="carousel-item">
          <CardStore
            nombre="Caja de pan de masa madre"
            foto="https://www.melito.com.mx/cdn/shop/products/WhatsAppImage2022-04-12at3.56.19PM_1200x1200.jpg?v=1649799025"
            precio={"10,000"}
          />
        </div>
        <div className="carousel-item">
          <CardStore nombre="Descuento compra"
          foto="https://mexicochulo.com/wp-content/uploads/2019/07/Panaderia_garcia_madero_portada.jpg" 
          precio={150} />
        </div>
        <div className="carousel-item">
          <CardStore nombre="Ramo de cenpasuchil"
          foto="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQB9FkLc-V_xL8hxjunmwAhJaBdBVsR4FfQgA&s" 
          precio="1,000" />
        </div>
      </div>
    </div>
  );
}
