import React from 'react'
import Label from '../components/Label'
import CardGenres from './CardGenres'


function ListGenres({ listGenres, label }) {
    return (
        <div className='mt-10'>
            <Label title={label} path={''} label={label} />
            <div className='grid justify-center gap-4 grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
                <CardGenres listGenres={listGenres} label={label} />
            </div>
        </div>
    )
}

export default ListGenres