import React, { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { setIsVisible_true } from '../../redux/Reducers';
function Aside() {
  const aside = useRef('');
  const my_visible = useSelector(({my_visible})=>{
    return my_visible});
  const dispatch = useDispatch();
  const styles = `animated-bg fixed h-[100vh] ${my_visible?`left-[-100%]`:`left-0`} w-[300px] z-[11] top-0 duration-300`
  useEffect(()=>{
   const handleClick= (e)=>{
    if(!aside.current.contains(e.target)){
      dispatch(setIsVisible_true());
    }
    }
    document.addEventListener('mousedown',handleClick);

  },[])
  return (
    <aside ref={aside} className={styles}>
    aside bar
    <h1>abdellah</h1>
  </aside>
  )
}

export default Aside
