import React, { useEffect, useRef, useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Main from './Main';
import Aside from './Aside';
import store from './redux/stroe';
import {Provider} from 'react-redux';
import {FiSearch,FiMoon} from 'react-icons/fi'
import {RiNotification2Line} from 'react-icons/ri'
import {AiOutlineAlignLeft} from 'react-icons/ai'
import img from './assets/1.jpg'
import img2 from './assets/logoD.png'
import LinksUser from './headerComponents/LinksUser';
function Dashboard() {
  document.title = 'Dashboard';
  const styles = `main_page relative py-[24px]  bg-blue-900 text-white h-full h-[2000px]`;
  return (

<Provider store={store} >
    
    <div className=''>
      <header className='bg-gray-50 fixed w-full z-[1] flex justify-between items-center p-4 '>
        <LinksUser/>
        {/* logo */}
        <div className='flex items-center gap-3'>
          <AiOutlineAlignLeft size={20} className='cursor-pointer text-gray-500'/>
          <img src={img2}  alt="" className='w-[100px]' />
        </div>
        {/* tools */}
        <div className='flex items-center justify-between gap-3'>
          <FiSearch size={22} className='cursor-pointer text-gray-500'/>
          <div className='relative'>
            <span className='absolute p-2 w-4 h-4 -right-[7px] top-[-12px] text-white flex justify-center items-center rounded-full text-sm bg-[#ef3f3e]'>1</span>
          <RiNotification2Line  size={22} className='cursor-pointer text-gray-500'/>
          </div>
          <FiMoon size={22} className='cursor-pointer text-gray-500'/>
          <div className='w-[40px] h-[40px]'>
            <img src={img} className='h-full w-full object-cover rounded-full' alt="" />
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
    </Provider>
  )
}

export default Dashboard
