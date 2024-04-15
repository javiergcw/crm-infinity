import React from 'react';
import PropTypes from 'prop-types';

const DataColumn = ({ title, data, showArrow }) => {
  return (
    <div className="flex flex-col items-start">
      <h2 className="s1-small-gray">{title}</h2>
      <div className="flex items-center">
        <span className="small-normal-black font-semibold">{data}</span>
        {showArrow && (
          <svg className="w-4 h-4 ml-2 text-ui-blue-800" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
          </svg>
        )}
      </div>
    </div>
  );
};

DataColumn.propTypes = {
  title: PropTypes.string.isRequired,
  data: PropTypes.string.isRequired,
  showArrow: PropTypes.bool
};

export default DataColumn;
