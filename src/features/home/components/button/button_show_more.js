import React from 'react';
import PropTypes from 'prop-types';

const ButtonShowMore = ({ showMore, onClick }) => {
    return (
        <button
            onClick={onClick}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
            {showMore ? 'Ocultar detalles del cliente' : 'Mostrar detalles de cliente'}
        </button>
    );
};

ButtonShowMore.propTypes = {
    showMore: PropTypes.bool.isRequired,
    onClick: PropTypes.func.isRequired
};

export default ButtonShowMore;