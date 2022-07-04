import React from 'react'
import { Link } from 'react-router-dom'

function CardRecommen({ listfilm }) {
    return (
        <>
            {listfilm.map((film, index) => {
                return (
                    <div className='flex items-center mb-2' key={index}>
                        <Link to={`/movie/${film.id}`}>
                            <img src={`https://image.tmdb.org/t/p/w500${film.backdrop_path}`} alt={film.name || film.title} className='w-[140px] h-95px rounded-md border border-cyan-200 hover:opacity-90 duration-300' />
                        </Link>
                        <div className='flex flex-col ml-2 w-60 lg:w-40'>
                            <Link to={`/movie/${film.id}`}>
                                <h4 className='text-base font-medium hover:opacity-90 duration-300 lg:truncate ...'>{film.title || film.name}</h4>

                            </Link>
                            <h6 className='text-sm text-cyan-500'>Lượt vote : {film.vote_count}</h6>
                        </div>
                    </div>
                )
            })}
        </>
    )
}

export default CardRecommen