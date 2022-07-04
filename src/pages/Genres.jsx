import React, { useEffect } from 'react'
import { getGenresMovie, getGenresShow } from '../slice/GenresSlice'
import { useDispatch, useSelector } from 'react-redux'

import { Location, ListGenres } from '../components'

function Genres() {

    const dispatch = useDispatch()

    const genresMovie = useSelector(state => state.genres.genresMovie)
    const genresShow = useSelector(state => state.genres.genresShow)

    useEffect(() => {
        dispatch(getGenresMovie())
        dispatch(getGenresShow())
    }, [dispatch])

    return (
        <>
            <div className='w-11/12 lg:w-10/12 xl:w-9/12 mx-auto mt-20'>
                <Location location={'Thể Loại'} />
                <ListGenres listGenres={genresMovie} label={'Thể Loại Phim'} />
                <ListGenres listGenres={genresShow} label={'Thể Loại TV-SHOW'} />
            </div>
        </>
    )
}

export default Genres