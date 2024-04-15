import React, { createContext, useContext, useState, useEffect } from 'react';

const StationContext = createContext();

export const useStation = () => useContext(StationContext);

export const StationProvider = ({ children }) => {
    const [data, setData] = useState(null);
    const [selectedStation, setSelectedStation] = useState(null);
    const [openCities, setOpenCities] = useState({});

    // Función para cambiar la estación seleccionada
    const selectStation = (cityName, station) => {
        setSelectedStation({ ...station, uniqueId: `${cityName}-${station.sc}` });
    };
    // Función para toggle de ciudades
    const toggleOpenCity = (cityName) => {
        setOpenCities(prev => ({ ...prev, [cityName]: !prev[cityName] }));
    };

    // Cargar datos al montar el componente
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await import('../api/data_eds.json'); // Asegúrate de que la ruta sea correcta
                setData(response.default);
            } catch (error) {
                console.error("Failed to load data", error);
            }
        };

        fetchData();
    }, []);

    return (
        <StationContext.Provider value={{ data, selectedStation, selectStation, toggleOpenCity, openCities }}>
            {children}
        </StationContext.Provider>
    );
};
