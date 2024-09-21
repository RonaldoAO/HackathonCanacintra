import React from "react";

export default function Company({nombre, descripcion, direccion, imagen}) {
  return (
    <div className="card card-side bg-base-100 shadow-xl h-40 mt-3">
      <figure>
        <img
          src={imagen}
          alt="Movie"
        />
      </figure>
      <div className="card-body ">
        <h2 className="card-title mt-[-25px]" >{nombre}</h2>
        <p className="text-xs">{direccion}</p>
        <p>{descripcion}</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Visitar</button>
        </div>
      </div>
    </div>
  );
}
