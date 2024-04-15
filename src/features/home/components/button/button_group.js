import { useState } from 'react';

const ButtonGroup = () => {
    const [active, setActive] = useState('tiempo'); // 'tiempo' o 'volumen'

    return (
        <div className="flex w-full">
            <button
                onClick={() => setActive('tiempo')}
                className={`${active === 'tiempo' ? 'bg-ui-blue-400' : 'bg-white'
                    } text-ui-blue-800 text-2xs py-1 border-ui-blue-300 flex-1 px-4 border rounded-l-md transition-colors duration-300 ease-in-out focus:outline-none `}
                style={{ borderRight: active === 'tiempo' ? 'none' : '' }} // Elimina el borde derecho cuando tiempo está activo
            >
                Por tiempo
            </button>
            <button
                onClick={() => setActive('volumen')}
                className={`${active === 'volumen' ? 'bg-ui-blue-400' : 'bg-white '
                    } text-ui-blue-800 text-2xs py-1 border-ui-blue-300 flex-1 px-4 border rounded-r-md transition-colors duration-300 ease-in-out focus:outline-none`}
                style={{ borderLeft: active === 'volumen' ? 'none' : '' }} // Elimina el borde izquierdo cuando volumen está activo
            >
                Por volumen
            </button>
        </div>
    );
};

export default ButtonGroup;
