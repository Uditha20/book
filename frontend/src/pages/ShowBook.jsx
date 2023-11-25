import React, { useEffect, useState } from 'react'
import BackButton from '../components/BackButton'
import { useParams } from 'react-router-dom';
import axios from 'axios';


function ShowBook() {
  const [book,setBooks]=useState({});
  const {id}=useParams();
  useEffect(()=>{
    axios.get(`http://localhost:5555/book/${id}`)
    .then((res)=>{
      setBooks(res.data);
    }).catch((err)=>{
      console.log(err)
    })
  },[])
  return (
    
    <div>
      <BackButton/>
      <div className='flex flex-col border-2 mx-5 border-sky-400 rounded-xl w-fit p-4'>
        <div className='my-4'>
          <span className='text-xl mr-4 text-gray-500'>
            id
          </span>
          <span>{book._id}</span>
        </div>
        <div className='my-4'>
          <span className='text-xl mr-4 text-gray-500'>
            name
          </span>
          <span>{book.name}</span>
        </div>
        <div className='my-4'>
          <span className='text-xl mr-4 text-gray-500'>
            auther
          </span>
          <span>{book.auther}</span>
        </div>
        <div className='my-4'>
          <span className='text-xl mr-4 text-gray-500'>
            auther
          </span>
          <span>{book.year}</span>
        </div>
      </div>
    
    
    
    </div>
  
  )
}

export default ShowBook