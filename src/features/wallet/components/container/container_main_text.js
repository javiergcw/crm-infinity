import React from 'react';
import PropTypes from 'prop-types';

const ContainerMainText = ({ title, value, groupFamily }) => {
  return (
    <div className="flex flex-col justify-center items-start h-full w-full px-4">
      <div className="small-gray-two">{title}</div>
      <div className={`font-semibold ${groupFamily ? 'text-ui-blue-800 cursor-pointer' : 'up-semibold-black'} flex items-center w-full`}>
        <span className="truncate">{value}</span>
        {groupFamily && (
          <svg xmlns="http://www.w3.org/2000/svg" className="text-ui-blue-800 ml-2 w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
          </svg>
        )}
      </div>
    </div>
  );
};

ContainerMainText.propTypes = {
  title: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  groupFamily: PropTypes.bool // PropType para groupFamily
};

export default ContainerMainText;
