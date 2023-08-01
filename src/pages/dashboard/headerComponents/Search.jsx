import React from 'react'
import { RiCloseFill } from 'react-icons/ri';
import { motion } from 'framer-motion';
import {FiSearch} from 'react-icons/fi'
function Search() {
    return (
        <>
            <form className='flex-1 md:flex-none ml-5 md:ml-0 relative  items-center gap-5 hidden md:flex w-[600px]'>
                <input className='  p-2 bg-gray-100 rounded-md outline-none pr-8 w-full md:p-3 md:px-5' type="text" placeholder='Search FastKart' />
                <RiCloseFill size={23} className='md:hidden text-gray-500 absolute top-[8px] right-[15px] ' />
                <button className='hidden md:block bg-orange-500 p-3 px-5 rounded-lg'>
                    <FiSearch size={22}  className='cursor-pointer text-white' />
                </button>
            </form>
        </>
    )
}

export default Search
