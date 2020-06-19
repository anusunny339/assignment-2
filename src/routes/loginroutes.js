const express=require("express");
const loginrouter=express.Router();
function router(nav){
    loginrouter.get("/",function(req,res){
        res.render("login",{
            nav,
            title:'library'
           
        });
    });
    
    return loginrouter;
}

module.exports=router;