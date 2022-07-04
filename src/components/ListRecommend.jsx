import React from 'react'
import CardRecommen from './CardRecommen'
function ListRecommend({ trending }) {


    return (
        <>
            <div className='w-full mt-10 lg:mt-0 lg:w-1/4'>
                <CardRecommen listfilm={trending} />
            </div>
        </>
    )
}

export default ListRecommend