import React from 'react';
import PropTypes from 'prop-types';

const LayoutHome = ({ isDivided, contentOne, contentTwo, contentThree }) => {
    // Define el ancho mínimo y el ancho específico para cuando isDivided es true
    const contentOneWidth = isDivided ? 'md:w-9/12' : 'md:w-3/4';// Cuando isDivided es true, el primer div debe ser 4/6
    const contentTwoWidth = isDivided ? 'md:w-3/12' : 'md:w-1/4';// El segundo div debe ser 2/6 cuando isDivided es true

    return (
        <div className="flex flex-col md:flex-row w-full h-main overflow-auto">
            <div className={`p-4 w-full ${contentOneWidth} bg-ui-blue-100`}>
                {contentOne}
            </div>
            <div className={`p-4 w-full ${contentTwoWidth} border-x-2 border-ui-gray-line bg-white`}>
                {contentTwo}
            </div>
            {isDivided && contentThree && (
                <div className={`p-4 w-2/4 bg-white`}>
                {contentThree}
                </div>
            )}
        </div>
    );
};

LayoutHome.propTypes = {
    isDivided: PropTypes.bool.isRequired,
    contentOne: PropTypes.node.isRequired,
    contentTwo: PropTypes.node.isRequired,
    contentThree: PropTypes.node,
};

export default LayoutHome;
