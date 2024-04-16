import React from 'react';
import PropTypes from 'prop-types';

const TitleSum = ({ title, subtitle, all }) => {
    return (
        <div>
            <div className={`normal-semibold-black ${all ? 'text-right' : ''}`}>{title}</div>
            <div className={`text-right ${all ? 'h2-blue-semibold' : 'up-semibold-black'}`}>
                {"$ " + subtitle}
            </div>
        </div>
    );
};

TitleSum.propTypes = {
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
    all: PropTypes.bool
};

TitleSum.defaultProps = {
    all: false
};

export default TitleSum;
