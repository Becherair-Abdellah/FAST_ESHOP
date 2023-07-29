import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Main from './Main';
function Dashboard() {
  document.title = 'Dashboard';
  return (
    <div className='text-green-800'>
      Dash Board
      <h1 className='text-red-800' >Static Dashborad</h1>
<Routes>
<Route exact path="/" element={<Main/>} />
<Route exact path="*" element={<h1>Not Found It !!</h1>} />
</Routes>
    </div>
  )
}

export default Dashboard
