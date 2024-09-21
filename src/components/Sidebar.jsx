import React from "react";
import ButtonNeon from "./ButtonNeon";
import icons from "../constants/icons";

export default function Sidebar({setScreen}) {
  return (
    <div className=" w-[10%] flex flex-col h-screen sm:hidden justify-between">
          <div className="mt-14">
            <ButtonNeon icon={icons.hogar} className=" bg-black m-4" onClick={() => setScreen("home")}/>
            <ButtonNeon
              icon={icons.marcador}
              className="sm:hidden bg-black m-4"
              onClick={() => setScreen("map")}
            />
          </div>
          <div className="flex flex-col">
            <button className="w-8 mx-4 my-3">
              <img src={icons.facebook} />
            </button>
            <button className="w-8 mx-4 my-3">
              <img src={icons.instagram} />
            </button>
            <button className="w-8 mx-4 my-3">
              <img src={icons.linkedin} />
            </button>
          </div>
        </div>
  );
}
