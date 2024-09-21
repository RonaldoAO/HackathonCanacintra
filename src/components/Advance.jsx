import React from "react";
import ProgressBar from "./ProgressBar";

export default function Advance() {
  return (
    <div role="alert" className="alert shadow-lg fixed z-10 w-[89%] sm:mx-5">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        className="stroke-info h-6 w-6 shrink-0 sm:hidden"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        ></path>
      </svg>
      <div className="w-full ">
        <h3 className="font-bold">Dia de muertos</h3>
        <div className="text-xs">Hola Ronaldo te invitamos a que continues tu racha</div>
        <ProgressBar/>
      </div>
      <button className="btn btn-sm sm:hidden">Continuar</button>
    </div>
  );
}
