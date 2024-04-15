import React from 'react';
import PropTypes from 'prop-types';

const CustomContainer = ({ children, paddingX = 'px-3', paddingY = 'py-2', notificationCount = 0 }) => {
    const paddingClasses = `${paddingX} ${paddingY}`;
    const notificationLabel = notificationCount > 99 ? '+99' : notificationCount.toString();

    return (
        <div className={`relative flex border border-ui-light-gray-300 min-w-0 max-w-full ${paddingClasses} rounded-lg hover:bg-ui-blue-200 transition-colors duration-200`}>
            {children}
            {notificationCount > 0 && (
                <div className="absolute top-0 right-0 transform translate-x-1/2 -translate-y-1/2 bg-ui-red-500 text-white rounded-full flex items-center justify-center w-4 h-4 text-3xs">
                    {notificationLabel}
                </div>
            )}
        </div>
    );
};

CustomContainer.propTypes = {
    children: PropTypes.node,
    paddingX: PropTypes.string,
    paddingY: PropTypes.string,
    notificationCount: PropTypes.number
};

export default CustomContainer;
