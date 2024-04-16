import React from 'react';
import PropTypes from 'prop-types';

const ButtonBlue = ({ textButton, onClick, className }) => {
    return (
        <button
            onClick={onClick}
            className={`hover:bg-ui-blue-400 text-ui-blue-800 text-2xs py-1 border-ui-blue-300 flex-1 px-4 border rounded-md transition-colors duration-300 ease-in-out focus:outline-none ${className}`}
        >
            {textButton}
        </button>
    );
};

ButtonBlue.propTypes = {
    textButton: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
    className: PropTypes.string
};

ButtonBlue.defaultProps = {
    className: ''
};

export default ButtonBlue;
