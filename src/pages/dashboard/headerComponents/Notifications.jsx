import React from 'react'
import { BiSolidCircle } from 'react-icons/bi'
import { motion } from 'framer-motion'
import { useSelector } from 'react-redux';
function Notifications() {
    const isTop = useSelector(({ hover_Ntf }) => hover_Ntf);
    return (
        <motion.div animate={{
            display: isTop ? 'block' : 'none',
            top: isTop ? '55px' : '90px',
            opacity: isTop ? 1 : 0,
            // top: isAtTop ? 0 : '50%',
        }}
            transition={{
                duration: 0.3,
            }} className='dash absolute left-[2.5%] rounded-md w-[95%]  bg-white shadow-lg top-[55px]'>
            <h1 className='text-white text-2xl text-center bg-greenColor p-2 rounded-md rounded-b-none'>Notitications</h1>
            <ul className='p-4 border-b-[1px] border-gray-200 '>
                <li className='text-gray-500 text-[16px] p-2 flex justify-between items-center'><span className='flex items-center gap-3'><BiSolidCircle size={11} className='text-c1' /> delivery processing</span><span>10min</span></li>
                <li className='text-gray-500 text-[16px] p-2 flex justify-between items-center'><span className='flex items-center gap-3'><BiSolidCircle size={11} className='text-c2' />Order Complete</span><span>1h</span></li>
                <li className='text-gray-500 text-[16px] p-2 flex justify-between items-center'><span className='flex items-center gap-3'><BiSolidCircle size={11} className='text-c3' />Tickets Generated</span><span>3h</span></li>
                <li className='text-gray-500 text-[16px] p-2 flex justify-between items-center'><span className='flex items-center gap-3'><BiSolidCircle size={11} className='text-c4' />Delivery Complete</span><span>6h</span></li>
            </ul>
            <div className='p-3'>
                <button className='bg-greenColor text-center  p-1 text-white rounded-lg w-[90%] ml-[5%]'>check all notification</button>
            </div>
        </motion.div>
    )
}

export default Notifications
