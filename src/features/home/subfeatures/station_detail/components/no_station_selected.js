const NoStationSelected = () => {
    return (
        <div className="flex flex-col items-center justify-center p-10 rounded-lg  m-6 bg-white">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-24 h-24 text-gray-400 mb-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 16h-1v-4h1m0 0h-1m1 0V9l-1-.117"
                />
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 3v18h18V3H3z"
                />
            </svg>
            <h2 className="text-xl text-center font-semibold text-gray-800 mb-4">No se ha seleccionado una estación</h2>
            <p className="text-gray-600 text-center">Porfavor selecciona una estación en la tabla para visualizar los detalles</p>
        </div>
    );
};

export default NoStationSelected;
