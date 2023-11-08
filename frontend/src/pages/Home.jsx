import React, { useEffect, useState } from "react";
import axios from "axios";
import Spinner from "../components/Spinner";
import { Link } from "react-router-dom";
import { AiOutlineEdit } from "react-icons/ai";
import { BsInfoCircle } from "react-icons/bs";
import { MdOutlineAddBox, MdOutlineDelete } from "react-icons/md";
function Home() {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    
    axios
      .get('http://localhost:5555/book')
      .then((response) => {
        setBooks(response.data);
        console.log(books);
        
      })
      .catch((error) => {
        console.log(error);

      });
  }, []);

  return(
    <div className="p-4">
        <div className="flex justify-between items-center">
            <h1 className="text-3xl my-8">Books list</h1>
            <Link to='/book/create'>
              <MdOutlineAddBox className="text-sky-800 text-4xl"/>
            </Link>
        </div>

        <table className="w-full border-separate border-spacing-2">
   <thead>
    <tr>
      <th className="border border-slate-600 rounded-md">no</th>
      <th className="border border-slate-600 rounded-md">name</th>
      <th className="border border-slate-600 rounded-md max-md:hidden">author</th>
      <th className="border border-slate-600 rounded-md max-md:hidden">year</th>
      <th className="border border-slate-600 rounded-md">operation</th>


  

    </tr>
   </thead>


   <tbody>
     {
      books.map(book=>{
        return <tr  key={book._id}>
          <td className="border border-slate-700 rounded-md text-center">
          {+1}
        </td>
        <td className="border border-slate-700 rounded-sm text-center">
          {book.name}
        </td>
        <td className="border border-slate-700 rounded-sm text-center max-md:hidden">
          {book.auther}
        </td>
        <td className="border border-slate-700 rounded-sm text-center max-md:hidden">
          {book.year}
        </td>
        <td className="border border-slate-700 rounded-sm text-center">
           <div className="flex justify-center gap-x-4">
            <Link to={`/book/details/${book._id}`}>
              <BsInfoCircle className="text-2xl text-yellow-600"/>
            </Link>
            <Link to={`/book/edit/${book._id}`}>
              <AiOutlineEdit className="text-2xl text-yellow-600"/>
            </Link>
            <Link to={`/book/delete/${book._id}`}>
              <md className="text-2xl text-yellow-600"/>
            </Link>
           </div>
        </td>
        </tr>
      })
     }
     
    
    </tbody>
  
        </table>
        
    </div>
  )
}

export default Home