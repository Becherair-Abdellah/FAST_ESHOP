import React, { useEffect, useRef, useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Main from './Main';
import Aside from './Aside';
function Dashboard() {
  document.title = 'Dashboard';
  const [height,setNewHeight] = useState(0);
  const styles = `main_page top-[${height}px] relative bg-blue-900 text-white h-full pb-[${height}]`;

  console.log(styles);
  useEffect(()=>{
    setNewHeight(document.querySelector('header').offsetHeight);
  },[]);

  return (
    <div className=''>
      <header className='bg-green-600 fixed w-full z-[1]'>
        header
      </header>
      <div className={styles} style={{height:`calc(100vh - ${height}px)`}}>
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
