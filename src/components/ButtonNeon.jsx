import React from "react";

export default function ButtonNeon({className, icon, text, onClick}) {
  return (<button
  className={`p-2 rounded-lg flex flex-row items-center align-middle text-center ${className}`} 
  onClick={onClick}>
    <img className="w-5 mx-auto" src={icon}/>
    {text &&
     <p className="font-Montse font-semibold text-white ml-2">{text}</p>
    }
    
  </button>);
}
