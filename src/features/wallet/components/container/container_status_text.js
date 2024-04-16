import React from 'react';
import PropTypes from 'prop-types';
import IndicatorContainer from '@/components/container/indicator_container';

const ContainerStatusText = ({ title, status, }) => {
  // Agrega la clase adicional al contenedor principal si existe
  const containerClasses = `flex flex-col justify-center items-start h-full w-full px-4 `;

  return (
    <div className={containerClasses}>
      <div className="small-gray-two">{title}</div>
      <IndicatorContainer status={status} className="py-1 w-20" />
    </div>
  );
};

ContainerStatusText.propTypes = {
  title: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
};



export default ContainerStatusText;
