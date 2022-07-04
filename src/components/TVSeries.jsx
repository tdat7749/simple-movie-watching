import React from 'react'
import Label from './Label'
import CardFilm from './CardFilm'
import { useSelector } from 'react-redux'

function TVSeries() {

    const listTV = useSelector(state => state.tv.listTV)

    return (
        <div className='mt-10'>
            <Label title={'Phim Bộ'} />
            <div className='grid gap-4 grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 flex-1'>
                <CardFilm listfilm={listTV} />
            </div>
        </div>
    )
}

export default TVSeries