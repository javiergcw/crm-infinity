import React from 'react';
import PropTypes from 'prop-types';

const LayoutHome = ({ isDivided, contentOne, contentTwo, contentThree }) => {

    const contentOneWidth = isDivided ? 'w-7/12' : 'w-3/4'; // aproximadamente 58.333%
    const contentTwoWidth = isDivided ? 'w-1/4' : 'w-1/4'; // aproximadamente 25% o 33.333%
    const contentThreeWidth = isDivided ? 'w-1/4' : '0'; // aproximadamente 25% o oculto

    return (
        <div className="flex w-full h-main overflow-hidden">
            <div className={`p-4 ${contentOneWidth} bg-ui-blue-100`}>
                {contentOne}
            </div>
            <div className={`p-4 ${contentTwoWidth} border-x-2 border-ui-gray-line bg-white`}>
                {contentTwo}
            </div>
            {isDivided && (
                <div className={`p-4 ${contentThreeWidth} bg-white`}>
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
