import React from 'react';
import PropTypes from 'prop-types';

const LayoutHome = ({ isDivided, contentOne, contentTwo, contentThree }) => {
    return (
        <div className="flex w-full h-main overflow-hidden">
            <div className={`transform transition duration-500 ease-in-out p-4 ${isDivided ? 'w-4/5' : 'w-3/4'} bg-ui-blue-100`}>
                {contentOne}
            </div>
            <div className={`transform transition duration-500 ease-in-out p-4 ${isDivided ? 'w-3/5 border-x-2 border-ui-gray-100' : ' w-1/4 border-l-2 border-ui-gray-100'} bg-white`}>
                {contentTwo}
            </div>
            {isDivided && (
                <div className="w-3/5 bg-white p-4 animate-bounce-in ">
                    {contentThree}
                </div>
            )}
        </div>
    );
};

LayoutHome.propTypes = {
    isDivided: PropTypes.bool.isRequired,
    contentOne: PropTypes.node,
    contentTwo: PropTypes.node,
    contentThree: PropTypes.node,
};

export default LayoutHome;
