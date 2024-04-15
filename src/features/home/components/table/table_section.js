'use client';
import React from 'react';
import { useStation } from '../../hooks/station_context'; // Asegúrate de que la ruta sea correcta
import TitleSection from './title_section';
import CustomProgressBar from '@/components/graphics/custom_progress_bar';
import IndicatorContainer from '@/components/container/indicator_container';



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
                    <div key={cityName} className="mb-4 ">
                        <button className='flex flex-row items-center py-3' onClick={() => toggleOpenCity(cityName)}>
                            <span className='flex items-center mr-2'>{openCities[cityName] ?
                                <svg xmlns="http://www.w3.org/2000/svg"
                                    fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                    stroke="currentColor" class="w-4 h-4">
                                    <path stroke-linecap="round" stroke-linejoin="round"
                                        d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                                </svg>

                                : <svg xmlns="http://www.w3.org/2000/svg"
                                    fill="none" viewBox="0 0 24 24"
                                    stroke-width="1.5" stroke="currentColor" class="w-4 h-4">
                                    <path stroke-linecap="round" stroke-linejoin="round"
                                        d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                                </svg>
                            }
                            </span>
                            <span className='p-semibold-gray'>{cityName}</span>
                        </button>
                        <hr className="border-t border-ui-gray-300" />

                        {openCities[cityName] && (
                            <div className="overflow-y-auto">
                                <table className="min-w-full">
                                    <tbody>
                                        {stations.map((station, idx) => (
                                            <tr key={idx}
                                                onClick={() => selectStation(cityName, station)}
                                                className={`cursor-pointer ${selectedStation?.uniqueId === `${cityName}-${station.sc}` ? "bg-ui-gray-100" : "bg-white"}`}>
                                                <td className="px-4 py-2">
                                                    <div className="radio-custom">
                                                        <input
                                                            type="radio"
                                                            checked={selectedStation?.uniqueId === `${cityName}-${station.sc}`}
                                                            onChange={() => selectStation(cityName, station)}
                                                        />
                                                    </div>
                                                </td>
                                                <td className="px-4 py-2 p-semibold-gray">{station.eds_name}</td>
                                                <td className="px-4 py-2 normal-gray">{station.com}</td>
                                                <td className="px-4 py-2 normal-gray">{station.sc}</td>
                                                <td className="flex flex-row items-center px-4 py-2">
                                                    <CustomProgressBar
                                                        value={station.percentage}
                                                        id={station.eds_name}
                                                    />
                                                    <div className=" p-bold-gray ">{station.percentage}%</div>
                                                </td>

                                                <td className="px-4 py-2 ">
                                                    <IndicatorContainer status={station.status} className="m-2" />
                                                </td>
                                                <td className=" py-2">
                                                    <div className="flex items-center justify-center w-12 h-12 bg-ui-gray-50 rounded-lg"> {/* Ajusta las dimensiones según necesites */}
                                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-8 h-8"> {/* Hace el icono más grande */}
                                                            <path strokeLinecap="round" strokeLinejoin="round"
                                                                d="M12 6.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 12.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 18.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5Z" />
                                                        </svg>
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