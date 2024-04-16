import React from 'react';
import PropTypes from 'prop-types';

const ButtonStandard = ({ text, className, arrow, children }) => {
    return (
        <button className={`flex flex-row px-4 py-2 border bg-white rounded ${className} medium-normal-gray`}>
            {text}
            {children}
            {arrow && (
                <svg xmlns="http://www.w3.org/2000/svg" className="inline-block ml-2 w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
            )}
        </button>
    );
};

ButtonStandard.propTypes = {
    text: PropTypes.string.isRequired,
    className: PropTypes.string,
    arrow: PropTypes.bool,
    children: PropTypes.node // Esto permite pasar componentes adicionales como SVGs
};

ButtonStandard.defaultProps = {
    className: '',
    arrow: false,
    children: null // Por defecto no hay hijos adicionales
};

export default ButtonStandard;
