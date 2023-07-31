import React, { useState } from 'react'
import {FiUsers,FiSettings,FiLogOut} from 'react-icons/fi'
import {BsBox,BsTelephone} from 'react-icons/bs'
import { motion } from 'framer-motion'
import { useSelector } from 'react-redux';
function LinksUser() {
    // const [isTop,setIsTop] = useState(false);
    const isTop = useSelector(({hover})=>hover);
  return (
    <motion.ul  animate={{
        top: isTop? '60px': '90px',
        opacity: isTop? 1: 0,
        // top: isAtTop ? 0 : '50%',
      }}
      transition={{
        duration: 0.1,
      }} className='opacity-0 duration-300 absolute left-[2.5%] text-gray-600 top-[90px] bg-white shadow-lg w-[95%] p-3'>
      <li className='flex items-center gap-3 p-2 text-[15px] hover:text-c1 cursor-pointer'><FiUsers size={21}/> Users</li>
      <li className='flex items-center gap-3 p-2 text-[15px] hover:text-c1 cursor-pointer'><BsBox size={21}/> Orders</li>
      <li className='flex items-center gap-3 p-2 text-[15px] hover:text-c1 cursor-pointer'><BsTelephone size={21}/> Supports Tickets</li>
      <li className='flex items-center gap-3 p-2 text-[15px] hover:text-c1 cursor-pointer'><FiSettings size={21}/>Settings</li>
      <li className='flex items-center gap-3 p-2 text-[15px] hover:text-c1 cursor-pointer'><FiLogOut size={21}/>Log Out</li>
    </motion.ul>
  )
}

export default LinksUser
