import React, { useState } from "react";
import { Button, Drawer } from "antd";
import icons from "../constants/icons";
import { icon } from "leaflet";
import { Input } from 'antd';

const { TextArea } = Input;

const { Search } = Input;
const DrawerIA = () => {
  const[count, setCount] = useState(1);
  const[response, setResponse] = useState('');
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

    setResponse('Claro')
    if (input.trim()) {
      // Si el input no está vacío
      setMessages((prevMessages) => [...prevMessages, input]);
       // Agrega el mensaje a la lista
       setTimeout(() => {
        if(count == 1) setMessages((prevMessages) => [...prevMessages, "Claro hemos tenido una buena aceptación de una cafeteria un poco inusual llamado Barbies Cafe situada en Donceles 88, Centro Histórico de la Ciudad de México."]);
        if(count == 2) setMessages((prevMessages) => [...prevMessages, "Orgánico Bar de Café & Cocina es un bar de café que ofrece una variedad de cafés mexicanos de producción orgánica y agroecológica, además de cocina saludable. Esta situado en la calle Calle San Mateo, Av. Vicente Villada No. 183, 57760 Cdad. Nezahualcóyotl, Méx. "]);
        
      }, 2500); 
      setCount(count + 1)
      setInput(""); // Limpia el campo de texto
    }
    
  };

  return (
    <>
      <Button
        type="primary"
        onClick={showDrawer}
        className="fixed bottom-4 right-4 bg-black text-white p-3 rounded-full shadow-lg z-50 w-14 h-14"
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
