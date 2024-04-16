
import React from 'react';
import PropTypes from 'prop-types';

const CleanSearch = ({ isVisible }) => {
    if (isVisible) return null;

    // Resto del componente
    return (
        <button className="mb-1.5">
            <span className="ml-4 text-2xs font-medium font-heading text-ui-gray-dark-300">Limpiar búsqueda</span>
        </button>
    );
};

CleanSearch.propTypes = {
    isVisible: PropTypes.bool
};

CleanSearch.defaultProps = {
    isVisible: true
};

export default CleanSearch;
