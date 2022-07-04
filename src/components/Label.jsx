import React from 'react'
import { Link } from 'react-router-dom'

function Label({ title, path }) {
    return (
        <div className='flex justify-between items-center border-b border-cyan-100 mb-5'>
            <h2 className='text-3xl font-light text-hover mb-4'>{title?.toUpperCase()}</h2>
            {path !== '' ? <Link to={path + '?page=1'}>
                <h4 className='text-base font-medium'>Xem tất cả</h4>
            </Link> : null}
        </div>
    )
}

export default Label