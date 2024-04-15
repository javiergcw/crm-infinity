import React from 'react';
import PropTypes from 'prop-types';

const RoundButton = ({ buttonLabel, onClick }) => {
    return (
        <button
            onClick={onClick}
            className="py-2 px-4 bg-ui-blue-800 text-white
             rounded-full shadow-md transition duration-300 
             ease-in-out hover:bg-ui-blue-700"
        >
            {buttonLabel}
        </button>
    );
};

RoundButton.propTypes = {
    buttonLabel: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired
};

export default RoundButton;
