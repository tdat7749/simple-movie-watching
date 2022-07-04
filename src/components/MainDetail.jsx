import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { getTVSeasonDetail } from '../slice/TvSlice'


function MainDetail({ detail, id, isMovie }) {

    const number_of_season = useSelector(state => state.tv.number_of_season)
    const detail_season = useSelector(state => state.tv.detail_season)

    const [url, setURL] = useState(null)


    const location = useLocation()
    const dispatch = useDispatch()

    useEffect(() => {

        if (isMovie) {
            setURL(`https://2embed.org/embed/movie?tmdb=${id}`)
        } else {
            dispatch(getTVSeasonDetail({ id: id, season: number_of_season }))

            const params = new URLSearchParams(location.search)
            const sea = params.get('season')
            const epi = params.get('episode')
            setURL(`https://2embed.org/embed/series?tmdb=${id}&sea=${sea}&epi=${epi}`)
        }

    }, [id, number_of_season, isMovie, location.search, dispatch])

    return (
        <>
            <div className='p-2 w-full lg:w-3/4'>
                <iframe src={url} frameBorder="0" className='w-full h-96 lg:h-[550px] rounded-md' allowFullScreen title={detail.title}></iframe>
                <div className='mt-4'>
                    <h2 className='text-2xl font-medium'>{detail?.title || detail?.name}</h2>
                    <div className='mt-2'>
                        <p className='font-medium'>Thể Loại: {
                            isMovie ? detail?.genres?.map((item, index) => {
                                return (
                                    <Link to={`/movies/the-loai?genre=${item.id}&page=1`} key={index} className='text-cyan-500 ml-2'>{item.name.slice(5)}</Link>
                                )
                            })
                                :
                                detail?.genres?.map((item, index) => {
                                    return (
                                        <Link to={`/tv-shows/the-loai?genre=${item.id}&page=1`} key={index} className='text-cyan-500 ml-2'>{item.name.slice(5)}</Link>
                                    )
                                })
                        }
                        </p>

                        <p className='font-medium'>Năm Sản Xuất: {detail.release_date}</p>
                    </div>
                    <div className='font-medium'>Nội Dung : <p className='font-normal'>{detail.overview || 'Đang cập nhật'}</p></div>
                </div>
                {!isMovie &&
                    <div className='mt-4'>
                        {detail_season.map((season) => {
                            return (
                                <div className='mb-4'>
                                    <h3 className='font-medium text-xl text-cyan-500 mb-4'>{season.name}</h3>
                                    {season?.episodes.map((epis) => {
                                        return (
                                            <Link to={`?season=${season.season_number}&episode=${epis.episode_number}`}>
                                                <button className='text-center w-10  px-1 py-2 rounded-md text-white bg-cyan-500 hover:opacity-90 duration-300 mr-4'>{epis.episode_number}</button>
                                            </Link>
                                        )
                                    })}
                                </div>
                            )
                        })}
                    </div>
                }
            </div>
        </>
    )
}

export default MainDetail