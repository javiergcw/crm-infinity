import React from 'react';
import PropTypes from 'prop-types';

const TitleStandartGF = ({ title, value, total }) => {
    return (
        <div className={`flex flex-col items-end justify-center `}>
            <h3 className={` ${total ? 'h3-semibold-gray' : 'medium-normal-gray'}`}>{title}</h3>
            <p className={`mt-2 ${total ? 'h3-blue-semibold' : 'normal-semibold-black'}`}>{value}</p>
        </div>
    );
}

TitleStandartGF.propTypes = {
    title: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    total: PropTypes.bool
};

export default TitleStandartGF;
