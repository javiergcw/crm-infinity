import React from 'react';
import PropTypes from 'prop-types';

// Subcomponente para los detalles del contrato
const ContractDetail = ({ title, value }) => (
  <div>
    <h4 className="text-gray-500">{title}</h4>
    <p className="text-black font-semibold">{value ?? "N/A"}</p>
  </div>
);

const TitleContractDetail = ({ title, value }) => (
  <div>
    <h4 className="text-gray-500">{title}</h4>
    <p className="font-bold">{value}</p>
  </div>
);

const ContainerContractDetail = ({ title, value }) => (
  <div>
    <h4 className="text-gray-500">{title}</h4>
    <div className="bg-gray-300 rounded-md px-3 py-1 text-black">
      {value}
    </div>
  </div>
);

// Subcomponente para el botón de expandir/colapsar
const ExpandButton = ({ expanded, toggle }) => (
  <button
    onClick={toggle}
    className="mt-4 bg-white text-black border border-gray-300 rounded-md transition duration-200 ease-in-out py-1 px-5"
    aria-expanded={expanded}
  >
    {expanded ? 'Ver menos' : 'Ver más'}
  </button>
);

// Componente principal que muestra la información del contrato
const ContractWidget = ({ contractData, expanded, toggle }) => (
  <div
    className={`mb-4 p-4 cursor-pointer rounded-xl border border-gray-300 ${expanded ? 'bg-gray-100' : 'bg-white'}`}
    onClick={toggle}
  >
    <div className="flex justify-between items-center">
      <TitleContractDetail title="Contrato Nº" value={contractData.contractNumber} />
      <ContainerContractDetail title="Vigencia" value={contractData.validity} />
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
      <ContractDetail title="Fecha inicio" value={contractData.startDate} />
      <ContractDetail title="Fecha final" value={contractData.endDate} />
    </div>

    {expanded && (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <ContractDetail title="Volumen pactado" value={contractData.agreedVolume} />
        <ContractDetail title="Galonaje comprado" value={contractData.purchasedGallons} />
        <ContractDetail title="Prom. ventas GL mes" value={contractData.averageSales} />
        <ContractDetail title="Bonificación mes" value={contractData.monthlyBonus} />
        <ContractDetail title="Anti. con la marca" value={contractData.anti} />
        <ContractDetail title="Última intervención" value={contractData.lastintervention} />
        <ContractDetail title="Garantía de la EDS" value={contractData.warranty} />
        <ContractDetail title="Ppto. invertido" value={contractData.invested} />
      </div>
    )}

    <div className="flex justify-end">
      <ExpandButton expanded={expanded} toggle={toggle} />
    </div>
  </div>
);

ContractWidget.propTypes = {
  contractData: PropTypes.shape({
    contractNumber: PropTypes.string.isRequired,
    validity: PropTypes.string.isRequired,
    startDate: PropTypes.string.isRequired,
    endDate: PropTypes.string.isRequired,
    agreedVolume: PropTypes.string.isRequired,
    purchasedGallons: PropTypes.string.isRequired,
    averageSales: PropTypes.string.isRequired,
    monthlyBonus: PropTypes.string.isRequired,
    anti: PropTypes.string,
    lastintervention: PropTypes.string,
    warranty: PropTypes.string,
    invested: PropTypes.string,
  }).isRequired,
  expanded: PropTypes.bool.isRequired,
  toggle: PropTypes.func.isRequired,
};

export default ContractWidget;
