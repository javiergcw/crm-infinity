import React from 'react';
import PropTypes from 'prop-types';
import GridTwoComponent from '../../components/data/grid_two_component';
import DataColumn from '../../components/data/data_column';

const SectionProduct = ({ title, items }) => {
    return (
        <>
            <h3 className='medium-gray-two'>
                {title}
            </h3>
            <GridTwoComponent items={items} />
            <br/>
            <DataColumn
                title="Valor avalúo Comercial"
                data="Example"
                showArrow={false}
            />
        </>
    );
};

SectionProduct.propTypes = {
    title: PropTypes.string.isRequired,
    items: PropTypes.arrayOf(PropTypes.shape({
        title: PropTypes.string.isRequired,
        data: PropTypes.string.isRequired,
        showArrow: PropTypes.bool
    })).isRequired
};

export default SectionProduct;
