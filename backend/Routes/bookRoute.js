import express from 'express';
import { Book } from '../Model/bookModel.js';

const router =express.Router();


router.post("/", async (req, res) => {
    try {
      if (!req.body.name || !req.body.auther || !req.body.year) {
        return res.status(400).send({
          message: "send all req fiels",
        });
      }
      {
        const newBook = {
          name: req.body.name,
          auther: req.body.auther,
          year: req.body.year,
        };
  
        const book = await Book.create(newBook);
        return res.status(201).send(book);
      }
    } catch (err) {
      console.log(err.message);
      res.status(500).send({
        message: err.message,
      });
    }
  });


  router.get("/", async (req, res) => {
    try {
      const books = await Book.find({}); // Use a plural variable name here (books) instead of book
      res.status(200).json(books); // Send the books array directly
    } catch (err) {
      console.log(err.message);
      res.status(500).send({
        message: err.message,
      });
    }
  });
  


router.get("/:id", async (req,res) => {
    try {
      const book = await Book.findById(req.params.id);
      res.status(200).json({
        message: "find",
        data: {
          book,
        },
      });
    } catch (err) {
      res.status(404).json({
          status:'fail',
          message:err.message
      })
  
    }
  });

  

router.patch("/:id",async(req,res)=>{
    try{
        const updateBook=await Book.findByIdAndUpdate(req.params.id,req.body,{new:true})
        res.status(200).json({
            status:"update",
            data:{
                book:updateBook
            }
        })
    }catch(err){
        res.status(404).json({
            satus:"fail",
            Message:err.message
        })
    }
})


router.delete("/:id",async(req,res)=>{
    try{
        await Book.findByIdAndDelete(req.params.id);
        res.status(204).json({
            status:"delete",
            data:null
        })
    }catch(err){
        res.status(404).json({
            message:err.message,
        })
    }
})


export default router