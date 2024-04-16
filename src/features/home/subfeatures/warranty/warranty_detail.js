import React from 'react'
import ComeBack from '../components/come_back'
import TitleCategoryDetail from '../components/title_category_detail'
import GridTwoComponent from '../components/data/grid_two_component'
import SectionParagraph from './componentes/section_paragraph'
import ButtonBlue from './componentes/button_blue'
import SectionProduct from './componentes/section_product'

const WarrantyDetail = () => {

  const data = [
    { title: 'Número de escritura', data: 'Descripción 1', showArrow: false },
    { title: 'Notaria', data: 'Descripción 2', showArrow: false },
    { title: 'Fecha de escritura', data: 'Descripción 1', showArrow: false },
    { title: 'Valor avalúo Comercial', data: 'Descripción 2', showArrow: false },
  ];
  const dataProduct = [
    { title: 'Tipo de prenda', data: 'Descripción 1', showArrow: false },
    { title: 'Vigencia de la Prenda (años)', data: 'Descripción 2', showArrow: false },
    { title: 'Valor asegurado', data: 'Descripción 1', showArrow: false },
  ];

  return (
    <div className="station-info flex flex-col h-full p-4 overflow-y-auto">
      <ComeBack />
      <TitleCategoryDetail
        isVisible={false}
        nameSection="Garantías"
        nameEDS="PDS Energía Solar Calle 80"
      />
      <SectionParagraph />
      <GridTwoComponent items={data} />

      <ButtonBlue
        textButton="Escritura de hipoteca y avalúo"
        onClick={{}}
        className="mb-4 mt-2 h-10 w-3/4"
      />

      <SectionProduct
        title='Tela'
        items={dataProduct}
      />
      <ButtonBlue
        textButton="Ver Avalúo comercial"
        onClick={{}}
        className="mb-4 mt-2 h-10 w-2/4"
      />

      <SectionProduct
        title='Tela'
        items={dataProduct}
      />
      <ButtonBlue
        textButton="Ver Avalúo comercial"
        onClick={{}}
        className="mb-4 mt-2 h-10 w-2/4"
      />

    </div>)
}

export default WarrantyDetail