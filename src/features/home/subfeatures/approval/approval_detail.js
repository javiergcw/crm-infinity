import React, { useState } from 'react';
import RadioButtonGroup from './componentes/radio_button_group';
import ComeBack from '../../../../components/come_back';
import TitleCategoryDetail from '../components/title_category_detail';
import GridTwoComponent from '../components/data/grid_two_component';
import ButtonPdfLine from './componentes/button_pdf_line';

const ApprovalDetail = () => {

    const [options, setOptions] = useState([
        { text: 'Comité E. de negocios', isSelected: true },
        { text: 'Gerencia', isSelected: false },
        { text: 'Comité de Inverciones', isSelected: false },
        { text: 'Presidencia', isSelected: false }
    ]);

    const selectStation = (selectedText) => {
        const updatedOptions = options.map(option => ({
            ...option,
            isSelected: option.text === selectedText
        }));
        setOptions(updatedOptions);
    };

    const data = [
        { title: 'Número de acta', data: 'Descripción 1', showArrow: false },
        { title: 'Fecha de acta', data: 'Descripción 2', showArrow: false },
    ];

    return (
        <div className="p-4 h-full overflow-y-auto">
            <ComeBack />
            <TitleCategoryDetail
                isVisible={false}
                nameSection="Aprobado"
                nameEDS="PDS Energía Solar Calle 80"
            />
            <h2 className='medium-gray-two font-semibold mt-10 mb-2'>
                Tipo de aprobación
            </h2>
            <RadioButtonGroup options={options} selectStation={selectStation} />
            <h2 className='medium-gray-two font-semibold mt-6 mb-2'>
                Acta
            </h2>
            <GridTwoComponent items={data} />
            <ButtonPdfLine
                loadingDate="20/12/23"
                text="Aprobacion_acta_2023.pdf"
            />            <h4 className='small-gray-two'>
                Detalles de aprobación
            </h4>
            <p className='super-small-normal-black mb-5'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur in tortor vehicula lectus malesuada vulputate. Etiam consequat pharetra erat nec finibus. Pellentesque elementum eget nunc non rutrum. Quisque ac tristique sem. Cras in arcu urna.            </p>
            <ButtonPdfLine
                loadingDate="20/12/23"
                text="Aprobacion_acta_2023.pdf"
            />
            <ButtonPdfLine
                loadingDate="20/12/23"
                text="Aprobacion_acta_2023.pdf"
            />
        </div>
    )
}

export default ApprovalDetail