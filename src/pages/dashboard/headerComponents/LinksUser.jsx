import React, { useState } from 'react'
import {FiUsers,FiSettings,FiLogOut} from 'react-icons/fi'
import {BsBox,BsTelephone} from 'react-icons/bs'
import { motion } from 'framer-motion'
import { useSelector } from 'react-redux';
function LinksUser() {
    const isTop = useSelector(({hover})=>hover);
  return (
    <motion.ul initial={{
      top:'90px'
    }} animate={{
        display: isTop?'block': 'none',
        top: isTop? '55px': '90px',
        opacity: isTop? 1: 0,
      }}
      transition={{
        duration: 0.1,
      }} className='opacity-0 duration-300 absolute right-[2.5%] text-gray-600 top-[90px] bg-white sh w-[95%] p-4 py-4 rounded-md md:w-[400px]'>
      <li className='flex items-center gap-3 p-2 text-[15px] hover:text-c1 cursor-pointer'><FiUsers size={21}/> Users</li>
      <li className='flex items-center gap-3 p-2 text-[15px] hover:text-c1 cursor-pointer'><BsBox size={21}/> Orders</li>
      <li className='flex items-center gap-3 p-2 text-[15px] hover:text-c1 cursor-pointer'><BsTelephone size={21}/> Supports Tickets</li>
      <li className='flex items-center gap-3 p-2 text-[15px] hover:text-c1 cursor-pointer'><FiSettings size={21}/>Settings</li>
      <li className='flex items-center gap-3 p-2 text-[15px] hover:text-c1 cursor-pointer'><FiLogOut size={21}/>Log Out</li>
    </motion.ul>
  )
}

export default LinksUser
