import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useStation } from '../../hooks/station_context';
import { ImagesPath } from '@/utils/images_path';
import TitleSubtitleDetail from './title_subtitle_detail';
import TimeVolDetail from './time_vol_detail';

const StationDetail = () => {

    const progressData = [
        {
            id: "progress1",
            title: "Progreso de cumplimiento",
            percentageComplete: "64%",
            percentageRemaining: "-36%"
        },
        {
            id: "progress2",
            title: "Progreso de reaseguramiento",
            percentageComplete: "30%",
            percentageRemaining: "-25%",
            contractEndDate: "20/10/2015"
        }
    ];


    const { selectedStation } = useStation();

    if (!selectedStation) {
        return <div>No station selected</div>; // Mensaje cuando no hay estación seleccionada
    }


    // Mostrar la información de la estación seleccionada
    return (
        <div className="station-info ">
            <Link href="https://www.google.com" passHref>
                <div className="relative w-full h-40 cursor-pointer group">
                    {/* Image Container */}
                    <Image
                        src={ImagesPath.map} // Asegúrate de reemplazar esto con tu path correcto
                        alt="map"
                        width={400}
                        height={400}
                        className="w-full h-full rounded-t-xl transition duration-300 ease-in-out"
                    />
                    {/* Overlay and Icon on Hover */}
                    <div className="absolute top-0 left-0 right-0 bottom-0 w-full h-full bg-ui-blue-200 opacity-0 group-hover:opacity-70 flex items-center justify-center rounded-t-xl">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-white hidden group-hover:block" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                            </svg>
                        </svg>
                    </div>
                </div>
            </Link>
            <div className='p-4'>
                <TitleSubtitleDetail
                    title={selectedStation.eds_name}
                    status={selectedStation.status}
                    buttonLabel="Ver cartera"
                    contractNumber={selectedStation.contract_number}
                    consumptionDate={selectedStation.consumption_cut}
                />
                <TimeVolDetail progressData={progressData} />
            </div>
            <h2>Selected Station Details</h2>
            <ul>
                <li>Name: {selectedStation.eds_name}</li>
                <li>Commercial: {selectedStation.com}</li>
                <li>Service Code: {selectedStation.sc}</li>
                <li>Percentage: {selectedStation.percentage}%</li>
                <li>Status: <span className={selectedStation.status === "Activo" ? "text-green-500" : "text-red-500"}>{selectedStation.status}</span></li>
            </ul>
        </div>
    );
}

export default StationDetail;
