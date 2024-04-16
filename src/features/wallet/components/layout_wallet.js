import React from 'react';
import PropTypes from 'prop-types';

const LayoutWallet = ({  contentOne, contentTwo,  }) => {

    const contentOneWidth = 'w-1/4';
    const contentTwoWidth = 'w-3/4';

    return (
        <div className="flex w-full h-main overflow-hidden">
            <div className={`p-4 ${contentOneWidth} bg-white`}>
                {contentOne}
            </div>
            <div className={`p-4 ${contentTwoWidth}  border-x-2 border-ui-gray-line bg-white`}>
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
