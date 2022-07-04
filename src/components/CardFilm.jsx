import React from 'react'
import { Link } from 'react-router-dom'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

function CardFilm({ listfilm, path }) {



    return (
        <>
            {listfilm.map((film) => {
                return (
                    <div className='w-full' key={film.id}>
                        <div className={`flex flex-col`}>
                            {<Link to={path === '/movies' ? `/movie/${film.id}` : `/tv-show/${film.id}`}>
                                <img src={`https://image.tmdb.org/t/p/w500${film.backdrop_path}`} alt={film.name || film.title} className='w-full h-52 object-cover rounded-md border border-cyan-200' />
                            </Link> || <Skeleton className='h-52' />}
                            <div className='flex justify-between items-center px-2 mt-2 '>
                                <Link to={path === '/movies' ? `/movie/${film.id}` : `/tv-show/${film.id}`} className='truncate ...'>
                                    <h4 className='text-base font-medium truncate ...'>{film.title || film.name || <Skeleton />}</h4>
                                </Link>
                                <div className='w-7 h-8 py-1 px-1 text-center text-white bg-cyan-500 rounded-md'>
                                    {film.vote_average || <Skeleton />}
                                </div>
                            </div>
                        </div>
                    </div>
                )
            }).slice(0, 6)}
        </>
    )
}

export default CardFilm