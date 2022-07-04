import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { getCommingUp, getFilm, getTrending } from '../slice/FilmSlice'
import { useSelector } from 'react-redux'
import { useScrollTop } from '../utils/helper'
import { getListTV } from "../slice/TvSlice"

import { ListCardFilm, ListCardTV, ListMovie } from '../components'

function Home() {

    const dispatch = useDispatch()


    useScrollTop()

    useEffect(() => {
        dispatch(getCommingUp())
        dispatch(getFilm(1))
        dispatch(getTrending({ time: 'week', page: 1 }))
        dispatch(getListTV(1))
    }, [dispatch])


    const commingUp = useSelector(state => state.film.commingUp)
    const trending = useSelector(state => state.film.trending)
    const movies = useSelector(state => state.film.listFilm)
    const tvshow = useSelector(state => state.tv.listTV)

    return (
        <>
            <div className='w-11/12 lg:w-10/12 mx-auto mt-20'>
                <ListCardFilm path={'/movies'} listfilm={movies} label={'phim lẻ mới cập nhật'} />
                <ListCardTV path={'/tv-shows'} listfilm={tvshow} label={'phim bộ mới cập nhật'} />
                <ListMovie path={'/comming-up'} listfilm={commingUp} label={'phim sắp ra mắt'} style={{ marginTop: '20px' }} />
                <ListMovie path={'/trending'} listfilm={trending} label={'trending'} />
            </div>
        </>
    )
}

export default Home