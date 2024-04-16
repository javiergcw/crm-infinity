import React from 'react';
import PropTypes from 'prop-types';

const TitleCategoryDetail = ({ isVisible, nameSection, nameEDS }) => {
    return (
        <div className="flex flex-row">
            <div className="flex flex-col w-3/6 justify-start">
                <h1 className="h2-gray-bold">{nameSection}</h1>
                <div>{nameEDS}</div>
            </div>
            {isVisible && (
                <div className="flex flex-col space-y-4 w-3/6 items-end">
                    <div className="bg-ui-light-gray-300 font-semibold py-2 px-4 rounded super-small-normal-black cursor-pointer">
                        IMAGEN TIPO A
                    </div>
                    <div className="hover:bg-ui-light-gray-300 super-small-normal-black border border-ui-light-gray-300 py-2 px-4 rounded cursor-pointer">
                        Acta de entrega
                    </div>
                    <div className="hover:bg-ui-light-gray-300 super-small-normal-black border border-ui-light-gray-300 py-2 px-4 rounded cursor-pointer">
                        Ver fotos
                    </div>
                </div>
            )}
        </div>
    );
};

TitleCategoryDetail.propTypes = {
    isVisible: PropTypes.bool,
    nameSection: PropTypes.string.isRequired,
    nameEDS: PropTypes.string.isRequired
};

TitleCategoryDetail.defaultProps = {
    isVisible: true, // Por defecto, los elementos serán visibles
    nameSection: "Inversión", // Valor por defecto para el nombre de la sección
    nameEDS: "PDS Estación Calle 84" // Valor por defecto para el nombre de la EDS
};

export default TitleCategoryDetail;
