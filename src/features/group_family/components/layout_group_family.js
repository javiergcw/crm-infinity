import React from 'react';
import PropTypes from 'prop-types';

const LayoutGroupFamily = ({ contentOne, contentTwo, contentThree }) => {
    return (
        <div className="flex flex-col w-full min-h-90vh bg-white p-4 justify-between">
            <div className="flex-grow max-h-8/10 overflow-hidden rounded-xl border-2 border-ui-gray-line grid" style={{ gridTemplateRows: '20% 65% 15%' }}>
                <div className="flex flex-col p-4">
                    {contentOne}
                </div>
                <div className="border-t-2 border-b-2 border-ui-gray-line flex items-center justify-center h-full overflow-hidden">
                    {contentTwo}
                </div>
                <div className="flex px-4 py-5 h-full w-full overflow-hidden">
                    {contentThree}
                </div>
            </div>
        </div>
    );
}

LayoutGroupFamily.propTypes = {
    contentOne: PropTypes.node,
    contentTwo: PropTypes.node,
    contentThree: PropTypes.node,
};

export default LayoutGroupFamily;
