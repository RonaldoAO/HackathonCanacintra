import React, { useState } from "react";
import { Button, Drawer } from "antd";
import icons from "../constants/icons";
import { icon } from "leaflet";
import { Input } from 'antd';

const { TextArea } = Input;

const { Search } = Input;
const DrawerIA = () => {
    const [value, setValue] = useState('');
  const [open, setOpen] = useState(false);
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };
  const [messages, setMessages] = useState([]); // Estado para los mensajes
  const [input, setInput] = useState(""); // Estado para el input de texto

  const handleSendMessage = () => {
    if (input.trim()) {
      // Si el input no está vacío
      setMessages([...messages, input]); // Agrega el mensaje a la lista
      setInput(""); // Limpia el campo de texto
    }
  };

  return (
    <>
      <Button
        type="primary"
        onClick={showDrawer}
        className="fixed bottom-4 right-4 bg-blue-500 text-white p-3 rounded-full shadow-lg z-50 w-14 h-14"
      >
        Open
      </Button>
      <Drawer title="Asistente" onClose={onClose} open={open}>
        <div className="h-[95%]">

        <ul>
          {messages.map((message, index) => (
            <li key={index}>{message}</li> // Listado de los mensajes
          ))}
        </ul>
        </div>
        <div className="h-[5%] flex flex-row justify-center ">
        <TextArea placeholder="Necesito saber acerca de..." autoSize value={input} onChange={(e) => setInput(e.target.value)}/>
          <button className="mx-2" onClick={handleSendMessage}>
            <img src={icons.avion} className="h-5 w-5"/>
          </button >
        </div>
      </Drawer>
    </>
  );
};
export default DrawerIA;
