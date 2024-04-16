import RoundButton from '@/components/buttons/round_button'
import ContainerRectangleText from '@/components/container/container_rectangle_text'
import React from 'react'

const TitleGroupFamily = () => {
    return (
        <div className='flex items-center'>
            <h2 className='h2-bold-black mr-4'>Kamel Group</h2>
            <div className='flex items-center mr-4'>
                <ContainerRectangleText
                    title=""
                    value="3 Contratos"
                />
                <ContainerRectangleText
                    title=""
                    value="11 EDS"
                />
            </div>
            <div>
                <RoundButton onClick={() => { }} buttonLabel="Ver cartera" />
            </div>
        </div>
    )
}

export default TitleGroupFamily;
