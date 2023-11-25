import React, { useState } from 'react'
import {useNavigation} from 'react-router-dom'
import axios from 'axios';
import BackButton from '../components/BackButton'

function CreateBook() {
  const [name,setName]=useState('');
  const [auther,setAuther]=useState('');
  const [year,setYear]=useState('');
 
  const handleSaveBook=()=>{
    const data={
      name,auther,year
    }
    axios.post('http://localhost:5555/book',data).
    then(()=>{
      alert('succes')
    })
    .catch((err)=>{
      alert('An error...')
      console.log(err)
    })
   
  }


  return (
    <div className='p-4'>
        <BackButton/>
        <h1 className='text-3xl my-4'>Create Book</h1>
        <div className='flex flex-col border-2 border-sky-400 rounded-xl w-[600px] p-4 mx-auto'>
          <div className='my-4'>
          <label className='text-xl mr-4 text-gray-500'>name</label>
          <input type='text' value={name} onChange={(e)=>setName(e.target.value)} className='border-2 border-gray-500 px-4 py-2 w-full'/>

          </div>
          <div className='my-4'>
          <label className='text-xl mr-4 text-gray-500'>auther</label>
          <input type='text' value={auther} onChange={(e)=>setAuther(e.target.value)} className='border-2 border-gray-500 px-4 py-2 w-full'/>

          </div><div className='my-4'>
          <label className='text-xl mr-4 text-gray-500'>year</label>
          <input type='text' value={year} onChange={(e)=>setYear(e.target.value)} className='border-2 border-gray-500 px-4 py-2 w-full'/>

          </div>
          <div>
            <button className='p-5 rounded bg-sky-500 m-8' onClick={handleSaveBook}>save</button>
          </div>
        </div>
    </div>
  )
}

export default CreateBook