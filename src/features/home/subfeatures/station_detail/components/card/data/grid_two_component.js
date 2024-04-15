import React from 'react';
import PropTypes from 'prop-types';
import DataColumn from './data_column';

const GridTwoComponent = ({ items }) => {
    return (
        <div className="grid grid-cols-2 gap-4 mt-4">
            {items.map((item, index) => (
                <DataColumn key={index} title={item.title} data={item.data} showArrow={item.showArrow} />
            ))}
        </div>
    );
};

GridTwoComponent.propTypes = {
    items: PropTypes.arrayOf(
        PropTypes.shape({
            title: PropTypes.string.isRequired,
            data: PropTypes.string.isRequired,
            showArrow: PropTypes.bool
        })
    ).isRequired
};

export default GridTwoComponent;
