const express=require("express");
const bookrouter=express.Router();
function router(nav){

    var books=[{
        title:"The Alchemist",
        author:"Paulo Coelho",
        genre:"novel",
        img:"alchemist.jpg"
    
    },
    {
        title:"Harry potter",
        author:"J K Rowling",
        genre:"fantasy",
        img:"harry.jpg"
    },
    {
        title:"Rich Dad Poor Dad",
        author:"Robert Kiyosaki and Sharon Lechter",
        genre:"Self help book",
        img:"rich dad poor dad.jpg"
    }
    
    ]
    bookrouter.get("/",function(req,res){
        res.render("books",{
            nav,
            title:'library',
            books
        });
    });
    bookrouter.get("/:id",function(req,res){
        const id=req.params.id;
        res.render("book",{
           nav,
            title:'library', 
            book:books[id]
        })
    })
    return bookrouter;
}



module.exports=router;