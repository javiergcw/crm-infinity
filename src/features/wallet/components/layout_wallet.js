import React from 'react';
import PropTypes from 'prop-types';

const LayoutWallet = ({ contentOne, contentTwo }) => {
    return (
        <div className="flex flex-col md:flex-row w-full h-main overflow-auto">
            <div className="p-4 w-full md:w-1/4 bg-white">
                {contentOne}
            </div>
            <div className="p-4 w-full md:w-3/4 border-x-2 border-ui-gray-line bg-white">
                {contentTwo}
            </div>
        </div>
    );
};

LayoutWallet.propTypes = {
    contentOne: PropTypes.node.isRequired,
    contentTwo: PropTypes.node.isRequired,
};

export default LayoutWallet;
