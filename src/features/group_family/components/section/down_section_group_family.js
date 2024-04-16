import React from 'react';
import TitleStandartGF from '../title/title_standart_gf';

const DownSectionGroupFamily = () => {
    // Data de ejemplo
    const data = [
        { title: "Volumen pactado", value: "67.794.840", total: false },
        { title: "Volumen comprado", value: "4.312.176", total: false },
        { title: "Volumen PDTE por compra", value: "$ 63.482.664", total: false },
        { title: "Corriente", value: "$ 977.176.651", total: false },
        { title: "Largo plazo", value: "$ 700.300.245", total: false },
        { title: "DCTO Anticipado", value: "$ 922.326.857", total: false },
        { title: "Total", value: "$ 2.599.803.753", total: true }
    ];

    // Creamos el primer elemento diferente
    const firstItem = (
        <div key="first" className="h3-bold-black p-4 flex justify-center items-center">
            Gran totales
        </div>
    );

    // Convertimos los datos en elementos JSX usando el componente TitleStandartGF
    const remainingItems = data.map((item, index) => (
        <TitleStandartGF
            key={index}
            title={item.title}
            value={item.value}
            total={item.total}
        />
    ));

    return (
        <div className="grid grid-cols-8 gap-4 w-full ">
            {firstItem}
            {remainingItems}
        </div>
    );
}

export default DownSectionGroupFamily;
