import React from 'react';

const RadioButtonGroup = ({ options, selectStation }) => {
    return (
        <div className="grid grid-cols-2 gap-4 w-full my-3">
            {options.map((option, index) => (
                <div key={index} className="radio-custom flex items-center space-x-2">
                    <input
                        type="radio"
                        checked={option.isSelected}
                        onChange={() => { }}  // Función vacía para deshabilitar la interacción
                        className="opacity-50 cursor-auto"  // Transparencia aplicada al radio button
                    />
                    <span className={`text-sm font-semibold ${option.isSelected ? 'text-black' : 'text-ui-gray-d9'}`}>
                        {option.text}
                    </span>
                </div>
            ))}
        </div>
    );
};

export default RadioButtonGroup;
