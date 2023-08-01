import React, { useEffect, useRef, useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Main from './Main';
import Aside from './Aside';
import {FiSearch,FiMoon} from 'react-icons/fi'
import {RiNotification2Line} from 'react-icons/ri'
import {AiOutlineAlignLeft} from 'react-icons/ai'
import img from './assets/1.jpg'
import img2 from './assets/logoD.png'
import LinksUser from './headerComponents/LinksUser';
import {setIsTop ,setIsTop_Ntf} from '../../redux/Reducers';
import { useDispatch, useSelector } from 'react-redux';
import Notifications from './headerComponents/Notifications';
import Search from './headerComponents/Search';

function Dashboard() {
  document.title = 'Dashboard';
  const styles = `main_page relative py-[24px]  animated-bg_test text-white  h-[2000px]`;
  const dispatch = useDispatch();
  return (
    <div className=''>
      <header className='bg-gray-50 select-none fixed w-full z-[1] flex justify-between items-center p-4 '>
      <span className='absolute p-2 w-4 h-4 right-[95px] top-[12px] text-white flex justify-center items-center rounded-full text-sm bg-[#ef3f3e]'>1</span>
        {/* logo */}
        <div className='flex items-center gap-3 md:hidden'>
          <AiOutlineAlignLeft size={20} className='cursor-pointer text-gray-500 lg:hidden'/>
          <img src={img2} onMouseLeave={()=>{console.log('its hover')}}    alt="" className='w-[100px] cursor-pointer' />
        </div>
        {/* search  */}
        <Search/>
        {/* tools */}
        <div className='flex items-center justify-between gap-3'>
          <FiSearch size={22} className='cursor-pointer text-gray-500'/>
          <div className=''>
          <div className='' onMouseEnter={()=>dispatch(setIsTop_Ntf(true))}   onMouseLeave={()=>{dispatch(setIsTop_Ntf(false))}} >
          <RiNotification2Line  size={22} className='cursor-pointer text-gray-500'/>
          <Notifications/>
          </div>
          </div>
          <FiMoon size={22} className='cursor-pointer text-gray-500'/>
          <div onMouseEnter={()=>dispatch(setIsTop(true))}   onMouseLeave={()=>{dispatch(setIsTop(false))}}   className='w-[40px] h-[40px]'>
          <LinksUser/>
            <img src={img} className='h-full w-full object-cover rounded-full cursor-pointer' alt="" />
          </div>
        </div>
      </header>
      <div className={styles}>
      <Routes>
        <Route exact path="/" element={<Main />} />
        <Route exact path="*" element={<h1>Not Found It !!</h1>} />
      </Routes>
      </div>
      <Aside/>
      <footer className='bg-blue-600 fixed w-full bottom-0'>
        footer
      </footer>

    </div>
  )
}

export default Dashboard
