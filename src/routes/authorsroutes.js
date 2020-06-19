const express=require("express");
const authorsrouter=express.Router();

function aurouter(nav){

    var authors=[{
        name:"Paulo Coelho",
        designation:"Brazilian lyricist and novelist",
        born:"24 august 1947",
        img:"paulo coelho.jpg"
    
    },
    {
        name:"J K Rowling",
        designation:"British author",
        born:"31 july 1965",
        img:"jk rowling.jpg"
        
    },
    {
        name:"Robert Kiyosaki",
        designation:"American businessman &author",
        born:"8 April 1947",
        img:"robert kiyosaki.jpg"
    },
    {
        name:"Sharon Lechter",
        designation:"American accountant, author, and businesswoman",
        born:"12 January 1954",
        img:"sharon lechter.jpg"
    }
    
    
    ]
    authorsrouter.get("/",function(req,res){
        res.render("authors",{
            nav,
            title:'library',
            authors
        });
    });

    authorsrouter.get("/:id",function(req,res){
        const id=req.params.id;
        res.render("author",{
           nav,
            title:'library', 
            author:authors[id]
        })
    })
   
    return authorsrouter;
}



module.exports=aurouter;