import React from 'react';
import PropTypes from 'prop-types';

const CardStandart = ({ title, value, options }) => {
  return (
    <div className="bg-white rounded-xl border-2 border-ui-gray-line p-4 h-32">
      <div className="flex justify-between">
        <div className="medium-gray-two w-1/3">{title}</div>
        {options && (
          <svg className='h-6 cursor-pointer text-ui-gray-two'
            data-slot="icon " fill="none" stroke-width="1.5" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" d="M12 6.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 12.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 18.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5Z"></path>
          </svg>
        )}
      </div>
      <div className="up-semibold-black font-bold">{value}</div>
    </div>
  );
};

CardStandart.propTypes = {
  title: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  options: PropTypes.bool
};

CardStandart.defaultProps = {
  options: false
};

export default CardStandart;
