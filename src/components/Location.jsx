import React from 'react'
import { Link } from 'react-router-dom'
function Location({ location }) {
    return (
        <div className='w-full py-2 px-2 bg-slate-50 flex items-center rounded-md mb-5'>
            <Link to={'/'} className='font-medium mr-3'>
                Trang Chủ
            </Link>
            /
            <p className='ml-2 text-cyan-500'>{location}</p>
        </div>
    )
}

export default Location