import React from 'react';
import PropTypes from 'prop-types';

const ComeBack = ({ onTap }) => {
    return (
        <div className="flex items-center cursor-pointer small-normal-black mb-4" onClick={onTap}>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 mr-3 "
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 19l-7-7 7-7"
                />
            </svg>
            Volver
        </div>
    );
};

ComeBack.propTypes = {
    onTap: PropTypes.func.isRequired,
};

export default ComeBack;
