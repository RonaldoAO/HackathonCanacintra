import React from "react";
import ButtonNeon from "./ButtonNeon";
import icons from "../constants/icons";
import { Select } from "antd";


export default function Navbar({ points, setScreen }) {
  const handleChange = (value) => {
    console.log(`selected ${value}`);
  };
  return (
    <div className="navbar bg-base-100 z-50 fixed">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
          <ButtonNeon icon={icons.profile} className="bg-black"  />
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            <li>
              <a>Homepage</a>
            </li>
            <li>
              <a>Portfolio</a>
            </li>
            <li>
              <a>About</a>
            </li>
          </ul>
        </div>
        <div className="sm:hidden flex flex-col align-top justify-start font-Montse font-medium text-xs">
            <p>Welcome,</p>
            <p>Ronaldo</p>
        </div>
        
      </div>
      <div className="navbar-center">
        <a className="btn btn-ghost text-3xl font-comicfont">CoolTour</a>
      </div>

      <div className="navbar-end">
      <ButtonNeon icon={icons.dinero} text="1400" className="bg-black mr-2 text-sm"  onClick={() => {setScreen("tienda")}}/>
      <ButtonNeon icon={icons.tienda} className="sm:hidden bg-black mr-2"  />
        
        <ButtonNeon icon={icons.salida} className="bg-black sm:hidden"  />
      </div>
    </div>
  );
}
