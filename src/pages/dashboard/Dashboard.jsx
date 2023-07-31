import React, { useEffect, useRef, useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Main from './Main';
import Aside from './Aside';
import store from './redux/stroe';
import {Provider} from 'react-redux';
function Dashboard() {
  document.title = 'Dashboard';
  const styles = `main_page relative py-[24px]  bg-blue-900 text-white h-full  h-[2000px]`;

  return (

<Provider store={store} >
    
    <div className=''>
      <header className='bg-green-600 fixed w-full z-[1]'>
        header
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
