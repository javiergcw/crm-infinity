import React from 'react';
import { useStation } from '../../hooks/station_context';
const StationDetail = () => {
    const { selectedStation } = useStation();

    if (!selectedStation) {
        return <div>No station selected</div>; // Mensaje cuando no hay estación seleccionada
    }


    // Mostrar la información de la estación seleccionada
    return (
        <div className="station-info">
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
