import React from 'react'
import CardStandart from '../../card/card_standart';

const ViewAllWallet = () => {
    const cardsData = [
        { title: 'Saldo en \ncartera', value: '967.084.207', options: true },
        { title: 'Dias plazo cartera', value: '5 Días / max. vigente', options: true },
        { title: 'Cupo de credito real', value: 'Cupo grupo $ 900M', options: true },
        { title: 'Cupo de credito calculado', value: '0', options: true },
        { title: 'Edades de cartera', value: 'N/A', options: false },
        { title: 'Intereses de mora causados año 2022', value: '36.053.978', options: false },
        { title: 'Intereses de mora causados año 2023', value: '163.786.853', options: false },
        { title: 'Intereses de mora promedio mes', value: '20.473.357', options: false }
    ];

    return (
        <div className="grid grid-cols-4 gap-4 w-full ">
            {cardsData.map((card, index) => (
                <CardStandart
                    key={index}
                    title={card.title}
                    value={card.value}
                    options={card.options}
                />
            ))}
        </div>
    );
}

export default ViewAllWallet