const express=require("express");
const addbookrouter=express.Router();
function router(nav){
    addbookrouter.get("/",function(req,res){
        res.render("addbook",{
            nav,
            title:'library'
           
        });
    });
    
    return addbookrouter;
}



module.exports=router;