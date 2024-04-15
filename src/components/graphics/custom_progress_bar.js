import React from 'react';
import { ProgressBarComponent } from '@syncfusion/ej2-react-progressbar';

const CustomProgressBar = ({ value, id }) => {
  return (
    <ProgressBarComponent
      id={`linear-${id}`}
      type="Linear"
      height="40"
      width="200"
      value={value}
      trackThickness={18}
      progressThickness={18}
      cornerRadius="Round"
      trackColor="#E9F1F7"
      progressColor="#5E79FF"
      animation={{
        enable: true,
        duration: 2000,
        delay: 0
      }}
    />
  );
};

export default CustomProgressBar;
