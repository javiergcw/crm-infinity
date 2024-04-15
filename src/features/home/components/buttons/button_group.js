import { useState } from 'react';

const ButtonGroup = () => {
    const [active, setActive] = useState('tiempo'); // 'tiempo' o 'volumen'

    return (
        <div className="flex w-full">
            <button
                onClick={() => setActive('tiempo')}
                className={`${active === 'tiempo' ? 'bg-blue-600 text-white border-ui-blue-300' : 'bg-white text-blue-600 border-gray-300'
                    } flex-1 px-4 py-2 border rounded-l-md transition-colors duration-300 ease-in-out focus:outline-none`}
                style={{ borderRight: active === 'tiempo' ? 'none' : '' }} // Elimina el borde derecho cuando tiempo está activo
            >
                Por tiempo
            </button>
            <button
                onClick={() => setActive('volumen')}
                className={`${active === 'volumen' ? 'bg-blue-600 text-white border-ui-blue-300' : 'bg-white text-blue-600 border-gray-300'
                    } flex-1 px-4 py-2 border rounded-r-md transition-colors duration-300 ease-in-out focus:outline-none`}
                style={{ borderLeft: active === 'volumen' ? 'none' : '' }} // Elimina el borde izquierdo cuando volumen está activo
            >
                Por volumen
            </button>
        </div>
    );
};

export default ButtonGroup;
