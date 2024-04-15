import CustomContainer from '@/components/container/custom_container'
import React from 'react'

const FilterButton = () => {
    return (
        <CustomContainer paddingX="px-4 h-10">
            < div className="flex items-center justify-center space-x-1 " >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
                    <path fillRule="evenodd" d="M2.628 1.601C5.028 1.206 7.49 1 10 1s4.973.206 7.372.601a.75.75 0 0 1 .628.74v2.288a2.25 2.25 0 0 1-.659 1.59l-4.682 4.683a2.25 2.25 0 0 0-.659 1.59v3.037c0 .684-.31 1.33-.844 1.757l-1.937 1.55A.75.75 0 0 1 8 18.25v-5.757a2.25 2.25 0 0 0-.659-1.591L2.659 6.22A2.25 2.25 0 0 1 2 4.629V2.34a.75.75 0 0 1 .628-.74Z" clipRule="evenodd" />
                </svg>
                <span className="medium-normal-gray px-1">Filtros</span>
                <span className="bg-ui-blue-90 rounded-full px-3 py-1 small-blue-semibold">3</span>
            </div >
        </CustomContainer >
    )
}

export default FilterButton