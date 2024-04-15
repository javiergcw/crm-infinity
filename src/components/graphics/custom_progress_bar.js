import React from 'react';
import PropTypes from 'prop-types';
import { ProgressBarComponent } from '@syncfusion/ej2-react-progressbar';

const CustomProgressBar = ({
  value,
  id,
  trackColor = "#E9F1F7",
  progressColor = "#5E79FF",
  trackThickness = 18,
  progressThickness = 18,
  height = "40",
  width = "200"
}) => {
  return (
    <ProgressBarComponent
      id={`linear-${id}`}
      type="Linear"
      height={height}
      width={width}
      value={value}
      trackThickness={trackThickness}
      progressThickness={progressThickness}
      cornerRadius="Round"
      trackColor={trackColor}
      progressColor={progressColor}
      animation={{
        enable: true,
        duration: 2000,
        delay: 0
      }}
    />
  );
};

CustomProgressBar.propTypes = {
  value: PropTypes.number.isRequired,
  id: PropTypes.string.isRequired,
  trackColor: PropTypes.string,
  progressColor: PropTypes.string,
  trackThickness: PropTypes.number,
  progressThickness: PropTypes.number,
  height: PropTypes.string,
  width: PropTypes.string
};

export default CustomProgressBar;


/* export default CustomProgressBar;

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
/> */