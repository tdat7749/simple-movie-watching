import React from 'react'
import Label from './Label'
import CardTV from './CardTV'

function ListCardTV({ listfilm, label, path }) {
    return (
        <div className='mb-10'>
            <Label title={label} path={path} />
            <div className='grid justify-center gap-4 grid-cols-1 sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3'>
                <CardTV listfilm={listfilm} path={path} />
            </div>
        </div>
    )
}

export default ListCardTV