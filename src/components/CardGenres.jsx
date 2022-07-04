import React from 'react'
import { Link } from 'react-router-dom'

function CardGenres({ listGenres, label }) {
    return (
        <>
            {listGenres.map((item) => {
                return (
                    <Link key={item.id} to={label === 'Thể Loại Phim' ? `/movies/the-loai?genre=${item.id}&page=1` : `/tv-shows/the-loai?genre=${item.id}&page=1`}>
                        <div className='w-full h-40 rounded-md border border-cyan-200 flex justify-center items-center hover:bg-cyan-200 hover:text-white duration-300'>
                            <h3 className='text-xl font-medium'>{item.name}</h3>
                        </div>
                    </Link>
                )
            })}
        </>
    )
}

export default CardGenres