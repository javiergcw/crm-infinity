import React from 'react'
import FilterButton from './button/filter_button'
import SearchWithSelect from './button/search_with_select'
import CleanSearch from './button/clean_search'

const Filters = () => {
    return (
        <>
            <p className='s1-medium-gray font-bold pb-3'>
                Filtrado
            </p>
            <div className="flex items-center space-x-2">
                <FilterButton />
                <SearchWithSelect />
                <CleanSearch />
            </div>
        </>
    )
}

export default Filters