import React from 'react';
import PropTypes from 'prop-types';
import IndicatorContainer from '@/components/container/indicator_container';
import RoundButton from '@/components/buttons/round_button';

const TitleSubtitleDetail = ({ title, status, buttonLabel, contractNumber, consumptionDate }) => {
    return (
        <>
            <div className="flex flex-row ">
                <div className="flex flex-col w-3/6 justify-start">
                    <h1 className="h2-gray-bold">{title}</h1>
                </div>
                <div className="flex flex-col w-3/6 items-end">
                    <IndicatorContainer status={status} className="mb-2" />
                    <RoundButton onClick={() => { }} buttonLabel={buttonLabel} />
                </div>
            </div>
            <div className="flex flex-row mt-4">
                <div className="flex-col w-3/6">
                    <p className="s1-medium-gray">Contrato N° </p>
                    <p className="small-normal-black font-semibold">{contractNumber}</p>
                </div>
                <div className="flex-col w-3/6 text-end mb-3">
                    <p className="s2-medium-gray">Consumo traído al corte de</p>
                    <p className="s2-medium-gray">{consumptionDate}</p>
                </div>
            </div>
        </>

    );
};

TitleSubtitleDetail.propTypes = {
    title: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired,
    buttonLabel: PropTypes.string.isRequired,
    contractNumber: PropTypes.string.isRequired,
    consumptionDate: PropTypes.string.isRequired
};

TitleSubtitleDetail.defaultProps = {
    statusBgColor: 'bg-green-200',
    statusTextColor: 'text-green-800'
};

export default TitleSubtitleDetail;
