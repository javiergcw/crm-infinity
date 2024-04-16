import React from 'react'
import TitleCategoryDetail from '../components/title_category_detail'
import ComeBack from '../../../../components/come_back'
import GridTwoComponent from '../components/data/grid_two_component';

const InvestmentDetail = () => {
    const data = [
        { title: 'Número de islas', data: 'Descripción 1', showArrow: false },
        { title: 'Tiempo de Contrato (años)', data: 'Descripción 2', showArrow: false },
        { title: 'Valor inversión imagen', data: 'Descripción 1', showArrow: false },
        { title: 'Valor reinversión', data: 'Descripción 2', showArrow: false },
    ];

    const data2 = [
        { title: 'Descuento Anticipado', data: 'Descripción 1', showArrow: false },
        { title: 'Fecha desembolso', data: 'Descripción 2', showArrow: false },
        { title: 'Fecha inicio contrato', data: 'Descripción 1', showArrow: false },
    ];

    const data3 = [
        { title: 'Volumen total', data: 'Descripción 1', showArrow: false },
        { title: 'Volumen estimado mensual', data: 'Descripción 2', showArrow: false },
        { title: 'Amortización $/Gal', data: 'Descripción 1', showArrow: false },
        { title: 'Descuento anticipado =>500MM', data: 'Descripción 2', showArrow: false },
        { title: 'Plazo (volumen)', data: 'Descripción 2', showArrow: false },
    ];

    const data4 = [
        { title: 'Dotación', data: 'Descripción 1', showArrow: false },
        { title: 'Fecha de entrega de dotación', data: 'Descripción 2', showArrow: false },
        { title: 'Cantidad', data: 'Descripción 1', showArrow: false },
    ];

    return (
        <div className="station-info flex flex-col h-full overflow-y-auto p-4 ">
            <ComeBack />
            <TitleCategoryDetail
                isVisible={true}
                nameSection="Inversión"
                nameEDS="PDS Energía Solar Calle 100"
            />
            <GridTwoComponent items={data} />

            <div className='py-2'>
                <GridTwoComponent items={data2} />
            </div>

            <GridTwoComponent items={data3} />
            <div className='py-2'>
                <GridTwoComponent items={data4} />
            </div>

        </div>
    )
}

export default InvestmentDetail