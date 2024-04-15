import React from 'react'

const SearchWithSelect = () => {
    return (
        <div className="h-10 relative py-1.5 flex items-center border border-ui-light-gray-300 min-w-0 max-w-full rounded-lg transition-colors duration-200 ">
            <div className="flex-grow relative border-r border-ui-light-gray-300 py-2">
                <input
                    type="text"
                    placeholder="Buscar"
                    className="w-full bg-transparent focus:outline-none s2-medium-gray pl-4 mr-20 pr-8 rounded-l-lg"
                />
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 s2-medium-gray"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                    />
                </svg>
            </div>

            <div className="flex items-center px-2 s1-medium-gray rounded-r-lg cursor-pointer">
                <span>Seleccionar</span>
                <svg xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-4 h-4 s1-medium-gray ml-1"
                >
                    <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                </svg>
            </div>
        </div>
    )
}

export default SearchWithSelect