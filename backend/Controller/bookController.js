

exports.postBooks=async(req,res)=>{
    try{
        const book=await Book.create(req.body);
        res.status(201).json({
            status:"create",
            data:{
                book
            }
        })
    }
    catch(err){

        res.status(400).json({
            status:'fail',
            message:err.message,
        })

    }
}


