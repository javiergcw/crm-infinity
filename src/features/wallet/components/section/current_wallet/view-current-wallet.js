import React from 'react'
import CardStandart from '../../card/card_standart';

const ViewCurrentWallet = () => {
    const cardsData = [
        { title: 'Valor inicial del incentivo', value: '1.090.000.000', options: true },
        { title: 'Saldo del incentivo', value: '921.870.184', options: true },
        { title: 'Préstamo inicial', value: '1.000.000.000', options: true },
        { title: 'Tasa de interes préstamo', value: '1,1%', options: true },
        { title: 'Plazo del préstamo', value: '84', options: false },
        { title: 'N° cuotas pendientes', value: '49', options: false },
        { title: 'N° cuotas pagadas', value: '35', options: false },
        { title: 'N° cuotas en mora', value: '1', options: false },
        { title: 'Valor de las cuotas pendientes', value: '$ 9.943.346,00', options: false },
        { title: 'Saldo pendiente', value: '$ 690.357.899', options: false },
        { title: 'Valor cuota mensual', value: '$ 18.300.871', options: true },
        { title: 'Total cartera largo plazo', value: '$ 1.622.170.429', options: false }
    ];

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 w-full">
            {cardsData.map((card, index) => (
                <CardStandart
                    key={index}
                    title={card.title}
                    value={card.value}
                    options={card.options}
                />
            ))}
        </div>
    )
}

export default ViewCurrentWallet;
