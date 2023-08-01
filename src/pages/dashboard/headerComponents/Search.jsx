import React from 'react'
import { RiCloseFill } from 'react-icons/ri';
import { motion } from 'framer-motion';
import {FiSearch} from 'react-icons/fi'
import { setIsTop_ClcikSearch_false} from '../../../redux/Reducers';
import { useDispatch, useSelector } from 'react-redux';
function Search() {
    const dispatch = useDispatch();
    const isClick = useSelector(({isClick})=> isClick);
    return (
        <>
            <motion.form  animate={{
                display: isClick? 'flex':'none',
                scale:isClick? 1:0,
                transition: .3,
            }} className='flex-1 md:flex-none ml-5 md:ml-0 relative  items-center gap-5 hidden mfx w-[600px]'>
                <input className='  p-2 bg-gray-100 rounded-md outline-none pr-8 w-full md:p-3 md:px-5' type="text" placeholder='Search FastKart' />
                <RiCloseFill onClick={()=>dispatch(setIsTop_ClcikSearch_false(false))} size={23} className='md:hidden text-gray-500 absolute top-[8px] right-[10px] cursor-pointer ' />
                <button className='hidden md:block bg-orange-500 p-3 px-5 rounded-lg'>
                    <FiSearch size={22}  className='cursor-pointer text-white' />
                </button>
            </motion.form>
        </>
    )
}

export default Search
