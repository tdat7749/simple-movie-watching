import React from 'react'
import Label from './Label'
import CardFilmMini from './CardFilmMini'

function ListMovie({ listfilm, label, path }) {

    return (
        <>
            <div className='mt-16'>
                <Label title={label} path={path} />
                <div className='grid gap-4 justify-center grid-cols-2 sm:grid-col-2 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-6 flex-1'>
                    <CardFilmMini listfilm={listfilm.slice(0, 6)} />
                </div>
            </div>
        </>
    )
}

export default ListMovie