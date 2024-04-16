import React from 'react'
import '../app/globals.css'
import Navbar from '@/components/navbar'
import LayoutGroupFamily from '@/features/group_family/components/layout_group_family'
import ComeBack from '@/components/come_back'
import TitleGroupFamily from '@/features/group_family/components/title/title_group_family'
import DownSectionGroupFamily from '@/features/group_family/components/section/down_section_group_family'

const GrupoFamiliar = () => {
    return (
        <>
            <Navbar />
            <LayoutGroupFamily
                contentOne={< >
                    <ComeBack />
                    <TitleGroupFamily />
                </ >}
                contentTwo={<  >
                    Contenido 2
                </ >}
                contentThree={<  >
                    <DownSectionGroupFamily />
                </ >}
            />
        </>
    )
}

export default GrupoFamiliar