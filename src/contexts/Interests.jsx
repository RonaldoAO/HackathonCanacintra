import React, { createContext, useState } from "react";

// Crear el contexto
export const InterestsContext = createContext();

// Crear el proveedor del contexto
export const InterestsProvider = ({ children }) => {
	const [selectedInterests, setSelectedInterests] = useState([]);

	return (
		<InterestsContext.Provider
			value={{ selectedInterests, setSelectedInterests }}
		>
			{children}
		</InterestsContext.Provider>
	);
};
