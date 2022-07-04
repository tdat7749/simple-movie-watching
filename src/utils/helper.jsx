import { AiOutlineHome, AiOutlinePlaySquare } from 'react-icons/ai'
import { BiSlideshow } from 'react-icons/bi'
import { useLocation } from 'react-router-dom'
import { useEffect } from 'react'

export const menu = [
    {
        route: '/',
        title: 'Trang Chủ'
    },
    {
        route: '/phim-bo',
        title: 'Phim Bộ'
    },
    {
        route: '/phim-le',
        title: 'Phim Lẻ'
    },
    {
        route: '/',
        title: 'Thể Loại'
    },
    {
        route: '/',
        title: 'Quốc Gia'
    },
]


export const TimeWindow = [
    {
        tag: 'Ngày',
        time: 'day'
    },
    {
        tag: 'Tuần',
        time: 'week'
    }
]

export const leftbar = [
    {
        title: 'Trang Chủ',
        icon: <AiOutlineHome />,
        path: '/'
    },
    {
        title: 'Movies',
        icon: <AiOutlinePlaySquare />,
        path: '/movies?page=1'
    },
    {
        title: 'TV Shows',
        icon: <BiSlideshow />,
        path: '/tv-shows?page=1'
    },
    {
        title: 'Thể Loại',
        icon: <BiSlideshow />,
        path: '/the-loai'
    }
]


export const useScrollTop = () => {
    const location = useLocation()
    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }, [location])
}
