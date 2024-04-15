import React from 'react';
import PropTypes from 'prop-types';

const TitleSection = ({ title }) => {
    return (
        <h1 className='h2-semibold-gray py-8' >
            {title}
        </h1>
    );
}

TitleSection.propTypes = {
    title: PropTypes.string.isRequired
};

export default TitleSection;

