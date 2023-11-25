import React from "react";
import axios from "axios";
import { useParams,useNavigate  } from "react-router-dom";
import BackButton from "../components/BackButton";


function DeleteBook() {
  const { id } = useParams();
  const navigation=useNavigate()

  const handleDelete = () => {
    axios
      .delete(`http://localhost:5555/book/${id}`)
      .then(() => {
        alert("succes");
        navigation('/')

      })
      .catch((err) => {
        alert("fail");
        console.log(err);
      });
  };

  return <div className="p-4">
    <BackButton/>
    <h1 className="text-3xl my-4">Delete Book</h1>
    <div className="flex flex-col items-center border-2 border-sky-400 rounded-xl w-[600px] p-8 mx-auto">
      <h3 className="text-2xl">Are you want to delete this book</h3>
      <button className="bg-red-600 p-4 text-white m-8 w-full" onClick={handleDelete}>ok</button>
    </div>
  </div>;
}

export default DeleteBook;
