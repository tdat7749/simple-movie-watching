import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getCommingUp, getFilm, getMoviesByGenre, getTrending } from '../slice/FilmSlice'
import { useLocation, useNavigate } from 'react-router-dom'
import { useScrollTop } from '../utils/helper'
import ReactPaginate from 'react-paginate';
import { getListTV, getTVShowByGenre } from '../slice/TvSlice'
import { CardTVMini, SpinnerLoading, Location, CardFilmMini } from '../components'

function FilmPage() {

    const [page, setPage] = useState(1)
    const [genre, setGenre] = useState(null)
    const [local, setLocal] = useState(null)
    const [isMovie, setIsMovie] = useState(true)

    const dispatch = useDispatch()
    const location = useLocation()
    const navigate = useNavigate()

    const listmovie = useSelector(state => state.film.tempFilm)
    const total_results_movie = useSelector(state => state.film.total_results)
    const total_pages_movie = useSelector(state => state.film.total_pages)
    const isLoading = useSelector(state => state.film.isLoading)

    const listtv = useSelector(state => state.tv.listTV)
    const total_results_tv = useSelector(state => state.tv.total_results)
    const total_pages_tv = useSelector(state => state.tv.total_pages)


    useScrollTop()

    useEffect(() => {
        const params = new URLSearchParams(location.search)
        const pageQuery = params.get('page')
        const genreQuery = params.get('genre')
        const pathname = location.pathname

        setPage(pageQuery)
        setGenre(genreQuery)

        if (pathname === '/movies') {
            dispatch(getFilm(page))
            setLocal('Movies')
            setIsMovie(true)
        } else if (pathname === '/comming-up') {
            dispatch(getCommingUp(page))
            setLocal('Comming Up')
            setIsMovie(true)
        } else if (pathname === '/trending') {
            dispatch(getTrending({ time: 'week', page: page }))
            setLocal('Trending')
            setIsMovie(true)
        } else if (pathname === '/movies/the-loai') {
            dispatch(getMoviesByGenre({ id: genre, page: page }))
            setLocal(`Thể Loại ${genre}`)
            setIsMovie(true)
        } else if (pathname === '/tv-shows') {
            dispatch(getListTV(page))
            setLocal('TV SHOWS')
            setIsMovie(false)
        } else if (pathname === '/tv-shows/the-loai') {
            dispatch(getTVShowByGenre({ id: genre, page: page }))
            setLocal(`Thể Loại ${genre}`)
            setIsMovie(false)
        }

    }, [page, location.search, location.pathname, genre, dispatch])

    const handleOnPageChange = (data) => {
        let selectedPage = data.selected
        const params = new URLSearchParams(location.search)
        const genreQuery = params.get('genre')
        if (genreQuery) {
            navigate({
                search: `?genre=${genreQuery}&page=${selectedPage + 1}`
            })
        } else {
            navigate(`?page=${selectedPage + 1}`)
        }
    }

    // const handleChangePage = (tag) => {
    //     if (tag === 'next') {
    //         setPage(page => page + 1)

    //     }
    //     if (tag === 'pre') {
    //         setPage(page => page - 1)
    //         if (page < 1) {
    //             setPage(1)
    //         }
    //     }
    //     if (tag === 'to') {
    //         let toPage = refPage.current.value
    //         setPage(toPage)
    //     }
    // }


    return (
        <>
            <div className='w-11/12 lg:w-10/12 xl:w-9/12 mx-auto mt-20'>
                <Location location={local?.toUpperCase()} />
                {isLoading ? <SpinnerLoading /> :
                    <>
                        <div className='flex flex-col lg:flex-row justify-between lg:items-center mb-4'>
                            <h4 className='mb-4 lg:mb-0'>Hiển thị
                                {
                                    isMovie ? <span className='font-medium mx-2'>
                                        {listmovie.length} / {total_results_movie}
                                    </span>
                                        :
                                        <span className='font-medium mx-2'>
                                            {listtv.length} / {total_results_tv}
                                        </span>
                                }
                                bộ phim</h4>
                            <div>
                                <ReactPaginate
                                    breakLabel="..."
                                    nextLabel="Tiếp"
                                    pageRangeDisplayed={1}
                                    pageCount={Math.ceil(isMovie ? total_pages_movie : total_pages_tv)}
                                    forcePage={page - 1}
                                    previousLabel="Lùi"
                                    className={'flex'}
                                    pageLinkClassName={'border border-cyan-500 ml-2 font-medium text-center px-3 py-1 hover:bg-cyan-200 duration-300'}
                                    breakClassName={'ml-2'}
                                    activeLinkClassName={'bg-cyan-500 text-white'}
                                    previousLinkClassName={'bg-cyan-500 text-white text-center rounded-md font-medium hover:opacity-70 duration-300 px-4 py-2'}
                                    nextLinkClassName={'bg-cyan-500 text-white text-center rounded-md font-medium hover:opacity-70 duration-300 px-4 py-2 ml-2'}
                                    onPageChange={handleOnPageChange}
                                    marginPagesDisplayed={2}
                                />
                            </div>
                        </div>
                        <div className='grid gap-4 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5'>
                            {isMovie ? <CardFilmMini listfilm={listmovie} /> : <CardTVMini listfilm={listtv} />}
                        </div>
                    </>
                }
            </div>
        </>
    )
}

export default FilmPage