import React from 'react'
import { leftbar } from '../utils/helper'
import { AiOutlineCloseCircle } from 'react-icons/ai'
import { Link } from 'react-router-dom'
import { FiLogIn } from 'react-icons/fi'

function Modal({ modal, handleCloseModal }) {
    return (
        <>
            <div className={`bg-black fixed top-0 bottom-0 right-0 left-0 bg-opacity-50 justify-center items-center ${modal ? 'flex' : 'hidden'}`}>
                <div className='h-auto w-10/12 md:w-3/4 lg:w-2/4 py-4 bg-white rounded-md ease-in animate-[modal_.5s_ease-in-out]' style={{ textAlign: '-webkit-center' }}>
                    <div className='w-40'>
                        {
                            leftbar.map((item, index) => {
                                return (
                                    <Link to={item.path} onClick={handleCloseModal}>
                                        <div className='bg-cyan-500 flex items-center py-2 px-3 mb-5 text-white text-xl rounded-md hover:opacity-80 duration-300 cursor-pointer' key={index}>
                                            {item.icon}
                                            <h3 className='ml-2'>{item.title}</h3>
                                        </div>
                                    </Link>
                                )
                            })
                        }
                        <Link to={'/'} className='md:hidden'>
                            <div className='bg-cyan-500 flex items-center py-2 px-3 mb-5 text-white text-xl rounded-md hover:opacity-80 duration-300 cursor-pointer'>
                                <FiLogIn />
                                <h3 className='ml-2'>Đăng Nhập</h3>
                            </div>
                        </Link>
                        <div onClick={handleCloseModal} className='bg-cyan-500 flex items-center py-2 px-3 mb-5 text-white text-xl rounded-md hover:opacity-90 duration-300 cursor-pointer'>
                            <AiOutlineCloseCircle />
                            <h3 className='ml-2'>Đóng Lại</h3>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Modal