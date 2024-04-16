import React from 'react';
import PropTypes from 'prop-types';

const TitleContract = ({ containerText }) => {
  return (
    <div className="flex justify-between items-center w-full mb-4">
      <div className="h2-gray-two ">
        Info contractual
      </div>
      <div className="border rounded-lg  bg-ui-blue-200 super-small-normal-black p-2">
        {containerText}
      </div>
    </div>
  );
};

TitleContract.propTypes = {
  containerText: PropTypes.string.isRequired
};

export default TitleContract;
