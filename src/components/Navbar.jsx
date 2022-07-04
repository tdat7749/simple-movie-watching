import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Modal from './Modal'
import { AiOutlineMenu } from 'react-icons/ai'


function Navbar() {

    const [modal, setModal] = useState(false)

    const handleOpenModal = () => {
        setModal(true)
    }

    const handleCloseModal = () => {
        setModal(false)
    }

    return (
        <>
            <nav className='bg-white shadow-md shadow-cyan-100'>
                <div className='flex items-center justify-between h-[87px] w-11/12 lg:w-10/12 xl:w-9/12 mx-auto'>
                    <div className='flex items-center'>
                        <AiOutlineMenu className='text-2xl text-cyan-500 mr-2 mt-0.5 hover:opacity-80 duration-300 cursor-pointer' onClick={handleOpenModal} />
                        <Link to={'/'}>
                            <h2 className='text-2xl text-cyan-500 font-semibold'>SGU MOVIE</h2>
                        </Link>
                    </div>
                    <input type="text" className='py-1.5 px-2 w-2/5 rounded-md outline-none border focus:border-cyan-300 bg-slate-50' placeholder='search...' />
                    <button className='py-2 px-4 bg-cyan-500 rounded-md text-white hover:opacity-90 duration-300 hidden md:block'>Đăng Nhập</button>
                </div>
            </nav>
            <Modal handleCloseModal={handleCloseModal} modal={modal} />
        </>
    )
}

export default Navbar