import React from 'react'
import CustomTable from '../../tabla/custom_table';
import ButtonStandard from '@/components/buttons/standart_button';
import { ImagesPath } from '@/utils/images_path';
import Image from 'next/image';

const ViewVolumenBuy = () => {
    const tableData = {
        headers: ['Meses', '2023', '2022', '2021', '2020', '2019'],
        rows: [
            ['Enero', '33.759', '0', '0', '20.570', '21.918'],
            ['Febrero', '47.847', '0', '0', '47.847', '21.918'],
            ['Marzo', '0', '0', '0', '47.847', '32.797'],
            ['Abril', '0', '20.570', '21.918', '47.847', '33.759'],
            ['Mayo', '0', '47.847', '32.797', '47.847', '33.759'],
            ['Junio', '0', '47.847', '21.918', '47.847', '32.275'],
            ['Julio', '0', '47.847', '32.797', '47.847', '21.838'],
            ['Agosto', '-', '33.000', '21.918', '-', '0'],
            ['Septiembre', '-', '47.847', '33.759', '-', '-'],
            ['Octubre', '-', '47.847', '33.759', '-', '-'],
            ['Noviembre', '-', '47.847', '21.838', '-', '-'],
            ['Diciembre', '-', '47.847', '0', '-', '-'],
            ['Total', '81.606', '344.406,00', '187.423,00', '376.911,00', '264.051,00']
        ],
    };

    return (
        <div className='flex flex-col h-full w-auto overflow-hidden'>
            <div className="grid grid-cols-2 md:grid-cols-7 gap-2 md:gap-4 w-full py-4">
                <div className="col-span-2 md:col-auto">
                    <p className='small-gray-two'>
                        EDS
                    </p>
                    <ButtonStandard text="Servi. omega" className="" arrow={true} />
                </div>
                <div className="col-span-2 md:col-auto">
                    <p className='small-gray-two'>
                        Años
                    </p>
                    <ButtonStandard text="3 años" className="" arrow={true} />
                </div>
                <div className="col-span-2 md:col-auto">
                    <div className="flex flex-row space-x-2">
                        <ButtonStandard text="" children={<Image src={ImagesPath.graphic} alt="graphic icon" width={18} height={18} />} className="flex-shrink-0" arrow={false} />
                        <ButtonStandard text="Comparativo" className="" arrow={false} />
                    </div>
                </div>
                <div className="col-span-1 md:col-auto">
                    <ButtonStandard text="$ 155.228.999" className="font-semibold" arrow={false} />
                </div>
                <div className="col-span-1 md:col-auto">
                    <ButtonStandard text="$ 155.228.999" className="font-semibold" arrow={false} />
                </div>
            </div>
            <div className="overflow-auto">
                <CustomTable data={tableData} />
            </div>
        </div>
    )
}

export default ViewVolumenBuy
