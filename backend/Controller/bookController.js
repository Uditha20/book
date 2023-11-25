import { Book } from '../Model/bookModel.js';


const createBook=async(req,res)=>{
    try{
        const book=await Book.create(req.body);
        return res.status(201).send(book);

    }catch(err){
        console.log(err.message);
        res.status(500).send({
            message:err.message
        })
    }
}


const findBook=async(req,res)=>{
    try{
        const books=await Book.find({});
        res.status(200).json(books);

    }catch(err){
        console.log(err.message)
        res.status(500).send({message:err.message});
    }
}

const oneBook=async(req,res)=>{

    try{
        const book=await Book.findById(req.params.id);
        res.status(200).json(book);

    }catch(err){
        console.log(err.message);
        res.status(500).send({message:err.message})
    }

}

const updateBook =async(req,res)=>{
    try{
        const book=await Book.findByIdAndUpdate(req.params.id,req.body,{new:true});
        res.status(200).json(book);
    }catch(err){
        console.log(err.message);
        res.status(500).send({message:err.message})
    }
}

const deleteBook=async(req,res)=>{
    try{
        const deleteBook=await Book.findByIdAndDelete(req.params.id);
        res.status(204).send(deleteBook);
    }catch(err){
        console.log(err.message);
        res.status(404).send({message:err.message})
    }
}

export{createBook,findBook,oneBook,updateBook,deleteBook}