import React from 'react'
import { BsArrowLeft, BsTypeH1 } from 'react-icons/bs'
import { Link } from 'react-router-dom'


function BackButton() {
  return (
    <div className='flex'>
        <Link to='/' className='bg-sky-800 text-white px-4 mx-5 py-2 my-3 rounded-md w-fit'>
            <BsArrowLeft className='text-2xl'/>
        </Link>
    </div>
  )
 
}

export default BackButton