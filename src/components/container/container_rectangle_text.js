import React from 'react';
import PropTypes from 'prop-types';

const ContainerRectangleText = ({ title, value }) => {
  return (
    <div className="flex flex-col justify-center items-start h-full w-full px-4">
      <div className="small-gray-two">{title}</div>
      <div className="bg-ui-light-gray-300 rounded py-1 w-20 super-small-normal-black flex items-center justify-center text-center ">
        {value}
      </div>
    </div>
  );
};

ContainerRectangleText.propTypes = {
  title: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired
};

export default ContainerRectangleText;
