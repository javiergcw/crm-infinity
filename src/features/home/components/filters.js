import React from 'react'
import FilterButton from './buttons/filter_button'
import SearchWithSelect from './buttons/search_with_select'
import CleanSearch from './buttons/clean_search'

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