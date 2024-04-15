'use client';
import React, { useState, useEffect } from 'react';
import { useStation } from '../../hooks/station_context'; // Asegúrate de que la ruta sea correcta
import TitleSection from './title_section';

const TableSection = () => {
    const { data, selectedStation, selectStation, toggleOpenCity, openCities } = useStation();

    if (!data) {
        return <div>Loading...</div>;
    }

    return (
        <div className="flex flex-col h-910"> {/* Esto asegura que el componente ocupe toda la altura de la pantalla */}
            <TitleSection title={data.zone} />
            <div className="overflow-y-auto">
                {Object.entries(data.city).map(([cityName, stations]) => (
                    <div key={cityName} className="mb-4">
                        <button onClick={() => toggleOpenCity(cityName)}>
                            <span>{cityName}</span>
                            <span>{openCities[cityName] ? '↑' : '↓'}</span>
                        </button>
                        <hr />
                        {openCities[cityName] && (
                            <div className="overflow-y-auto"> {/* Establece una altura máxima y activa el scroll vertical */}
                                <table className="min-w-full">
                                    <tbody>
                                        {stations.map((station, idx) => (
                                            <tr key={idx}
                                                onClick={() => selectStation(cityName, station)}
                                                className={`cursor-pointer ${selectedStation?.uniqueId === `${cityName}-${station.sc}` ? "bg-blue-100" : "bg-white"}`}> {/* Agrega cursor pointer a la fila */}
                                                <td>
                                                    <input
                                                    className='cursor-pointer'
                                                        type="radio"
                                                        checked={selectedStation?.uniqueId === `${cityName}-${station.sc}`}
                                                        onChange={() => selectStation(cityName, station)}
                                                    />
                                                </td>
                                                <td>{station.eds_name}</td>
                                                <td>{station.com}</td>
                                                <td>{station.sc}</td>
                                                <td>
                                                    <div className="relative w-full bg-gray-300">
                                                        <div className="absolute bg-blue-500" style={{ width: `${station.percentage}%` }}></div>
                                                    </div>
                                                </td>
                                                <td>{station.percentage}%</td>
                                                <td>
                                                    <div className={`p-2 ${station.status === "Activo" ? "bg-green-500" : "bg-red-500"}`}>{station.status}</div>
                                                </td>
                                                <td>
                                                    <div className="p-2 bg-gray-300">
                                                        {/* Placeholder for icon */}
                                                    </div>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        )}
                    </div>
                ))}
            </div>

        </div>
    );
}


export default TableSection;