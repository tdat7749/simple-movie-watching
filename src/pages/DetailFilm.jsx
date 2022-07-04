import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useLocation, useParams } from 'react-router-dom'
import { getDetailFilm, getTrending } from '../slice/FilmSlice'
import { useScrollTop } from '../utils/helper'
import { getDetailTV } from '../slice/TvSlice'
import { MainDetail, ListRecommend, Location } from '../components'

function DetailFilm() {


    const [isMovie, setIsMovie] = useState(true)

    const { id } = useParams()
    const dispatch = useDispatch()
    const location = useLocation()


    const movieDetail = useSelector((state) => state.film.detail)

    const tvDetail = useSelector(state => state.tv.detail)

    const trending = useSelector(state => state.film.trending)

    useScrollTop()

    useEffect(() => {
        const pathname = location.pathname
        if (pathname.includes('/movie')) {
            dispatch(getDetailFilm(id))
            setIsMovie(true)
        } else if (pathname.includes('/tv-show')) {
            dispatch(getDetailTV(id))
            setIsMovie(false)
        }

        const random = Math.floor(Math.random() * 21)
        dispatch(getTrending({ time: 'week', page: random }))
    }, [id, location.pathname, dispatch])


    return (
        <>
            <div className='w-11/12 mx-auto mt-20'>
                <Location location={isMovie ? movieDetail.title : tvDetail.name} />
                <div className='flex flex-col lg:flex-row'>
                    <MainDetail detail={isMovie ? movieDetail : tvDetail} id={id} isMovie={isMovie} />
                    <ListRecommend trending={trending} />
                </div>
            </div>
        </>
    )
}

export default DetailFilm