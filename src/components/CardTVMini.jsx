import React from 'react'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import { Link } from 'react-router-dom'

function CardTVMini({ listfilm }) {
    return (
        <>
            {listfilm.map((film, index) => {
                return (
                    <div className='w-full' key={index}>
                        <div>
                            {<Link to={`/tv-show/${film.id}?season=1&episode=1`}>
                                <img src={`https://image.tmdb.org/t/p/w500` + film.poster_path} alt={film.name || film.title} className='w-full h-60 rounded-md border border-cyan-200 hover:opacity-90 duration-300' />
                            </Link> || <Skeleton className='h-60' />}
                            <Link to={`/tv-show/${film.id}`}>
                                <h4 className='text-base font-medium hover:opacity-90 duration-300 truncate ...'>{film.name || film.title || <Skeleton />}</h4>
                            </Link>
                        </div>
                    </div>
                )
            })}
        </>
    )
}

export default CardTVMini