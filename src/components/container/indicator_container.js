import React from 'react';
import PropTypes from 'prop-types';

const IndicatorContainer = ({ status, className = '' }) => {
    const baseStyle = "rounded-lg text-center w-16 flex items-center justify-center";
    let style = "";

    if (status === 'ACTIVO') {
        style = "small-normal-green bg-ui-green-30";
    } else {
        style = "small-normal-yellow bg-ui-yellow-200";
    }

    return (
        <div className={`${baseStyle} ${style} ${className}`}>
            {status}
        </div>
    );
};

IndicatorContainer.propTypes = {
    status: PropTypes.string.isRequired,
    className: PropTypes.string
};

export default IndicatorContainer;
