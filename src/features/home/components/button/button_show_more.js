import React from 'react';
import PropTypes from 'prop-types';

const ButtonShowMore = ({ showMore, onClick }) => {
    return (
        <button
            onClick={onClick}
            className="bg-ui-blue-90 s1-medium-blue py-1 px-4 rounded-full mt-6"
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