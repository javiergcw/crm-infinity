import React from 'react';
import PropTypes from 'prop-types';
import CustomContainer from '@/components/container/custom_container';
import ProgressSection from './progress_section';
import ButtonGroup from '../buttons/button_group';

const TimeVolDetail = ({ progressData }) => {
    return (
        <CustomContainer paddingX='flex flex-col p-4 hover:bg-none w-full'>
            <div className='flex flex-col w-full'>
                {progressData.map((item, index) => (
                    <ProgressSection
                        key={index}
                        id={item.id}
                        title={item.title}
                        percentageComplete={item.percentageComplete}
                        percentageRemaining={item.percentageRemaining}
                        showContractEnd={index === progressData.length - 1}
                        contractEndDate={item.contractEndDate}

                    />
                ))}
            </div>
            <ButtonGroup />
        </CustomContainer>
    );
};

TimeVolDetail.propTypes = {
    progressData: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        percentageComplete: PropTypes.string.isRequired,
        percentageRemaining: PropTypes.string.isRequired,
        contractEndDate: PropTypes.string.isRequired,
    })).isRequired
};

export default TimeVolDetail;
