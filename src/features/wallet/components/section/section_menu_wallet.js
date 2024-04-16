import React, { useState } from 'react';

const SectionMenuWallet = () => {
    const [selected, setSelected] = useState('current');  // Estado para manejar cuál sección está seleccionada, 'current' es el ID de la primera sección

    const handleSelection = (section) => {
        setSelected(section);
    };

    return (
        <div className="flex w-full h-full px-4">
            <div className="flex-1 flex items-center justify-center">
                <div className="grid grid-cols-3 w-full h-full">
                    <div
                        className={`flex items-center justify-center cursor-pointer ${selected === 'current' ? 's1-medium-blue border-b-4 rounded border-ui-blue-800' : 's1-medium-gray'}`}
                        onClick={() => handleSelection('current')}
                    >
                        Cartera corriente
                    </div>
                    <div
                        className={`flex items-center justify-center cursor-pointer ${selected === 'total' ? 's1-medium-blue border-b-4 rounded border-ui-blue-800' : 's1-medium-gray'}`}
                        onClick={() => handleSelection('total')}
                    >
                        Total cartera
                    </div>
                    <div
                        className={`flex items-center justify-center cursor-pointer ${selected === 'annual' ? 's1-medium-blue border-b-4 rounded border-ui-blue-800' : 's1-medium-gray'}`}
                        onClick={() => handleSelection('annual')}
                    >
                        Volumen comprado anual
                    </div>
                </div>
            </div>
            <div className="flex-1 flex items-center justify-center">
                {/* Otro contenido o sección adicional si es necesario */}
            </div>
        </div>
    );
};

export default SectionMenuWallet;
