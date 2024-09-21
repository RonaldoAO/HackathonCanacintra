import React from "react";
import { FaHome, FaMapMarked } from "react-icons/fa";
export default function Favicon({setScreen, screen}) {
  return (
    <div className={`fixed bottom-4 left-1/2 ransform -translate-x-1/2  text-  rounded-full shadow-lg z-50  h-14 right-auto bg-black `}>
      <button className={` rounded-full w-14 h-full  ${screen == 'home' ? 'bg-white ' : 'bg-black'}`}
      onClick={() => setScreen("home")}>
        <FaHome size="25" className={`mx-auto ${screen == 'home' ? 'text-black' : 'text-white'} `}/>
      </button>
      <button className={` rounded-full w-14 h-full  ${screen == 'map' ? 'bg-white ' : 'bg-black'}`}
       onClick={() => setScreen("map")}>
        <FaMapMarked size="25" className={`mx-auto ${screen == 'map' ? 'text-black' : 'text-white'}`}/>
      </button>
    </div>
  );
}
