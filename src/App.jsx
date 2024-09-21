import { icon } from "leaflet";
import ButtonNeon from "./components/ButtonNeon";
import Navbar from "./components/Navbar";
import icons from "./constants/icons";
import Advance from "./components/Advance";
import MisionCard from "./components/MisionCard";
import Sidebar from "./components/Sidebar";
import { useState } from "react";
import Map from "./Map";

export default function App() {
  const [screen, setScreen] = useState("home");

  return (
    <>
      <Navbar />
      <div className="flex">
        <Sidebar setScreen={setScreen} />

        <div className=" w-[90%] h-screen pt-20  sm:w-[100%] align-middle">
          <Advance />

          {screen == "home" && (
            <div className="w-full sm:w-screen mt-32 h-[80%]  p-4 overflow-y-scroll">
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
              <MisionCard />
              <MisionCard />
              <MisionCard />
            </div>
          )}
          {screen == "map" &&
          <Map/>
          
}
        </div>
      </div>
    </>
  );
}
