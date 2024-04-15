import React from 'react';
import PropTypes from 'prop-types';
import CustomContainer from '@/components/container/custom_container';
import CustomProgressBar from '@/components/graphics/custom_progress_bar';

const ProgressSection = ({ id, title, percentageComplete, percentageRemaining, showContractEnd, contractEndDate }) => (
    <CustomContainer paddingX='p-4 hover:bg-transparent w-full mt-2 mb-2'>
        <div className='flex flex-col w-full'>
            <h2 className='px-2.5 medium-gray-two '>{title}</h2>
            <CustomProgressBar
                value={parseInt(percentageComplete, 10)}
                id={id}
                trackColor="#E9F1F7"
                progressColor="#00BD9D"
                trackThickness={18}
                progressThickness={18}
                height="40"
                width="100%"
            />
            <div className='flex justify-between w-full mb-2 px-2.5'>
                <span className='h3-normal-black'>{percentageComplete}</span>
                <span className='h3-gray-500'>{percentageRemaining}</span>
            </div>

            {showContractEnd && (
                <div className="mt-2 px-2.5">
                    <span className='s1-small-gray'>Finalización de contratos  </span>
                    <span className='text-black font-semibold text-sm'>{contractEndDate}</span>
                </div>
            )}
        </div>
    </CustomContainer>
);

ProgressSection.propTypes = {
    id: PropTypes.string.isRequired,
    title: PropTypes.string,
    percentageComplete: PropTypes.string,
    percentageRemaining: PropTypes.string,
    showContractEnd: PropTypes.bool,
    contractEndDate: PropTypes.string
};

ProgressSection.defaultProps = {
    title: "Progreso de cumplimiento",
    percentageComplete: "0%",
    percentageRemaining: "0%",
    showContractEnd: false,
    contractEndDate: ""
};

export default ProgressSection;
