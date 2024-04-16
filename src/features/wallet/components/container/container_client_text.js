import React from 'react';
import PropTypes from 'prop-types';

const ContainerContractText = ({ clientValue }) => {
  return (
    <div className="flex flex-col justify-center items-start h-full w-full px-4">
      <div className="small-gray-two">Cliente</div>
      <div className="up-semibold-black font-semibold">{clientValue}</div>
    </div>
  );
};

ContainerContractText.propTypes = {
  clientValue: PropTypes.string.isRequired
};

export default ContainerContractText;
