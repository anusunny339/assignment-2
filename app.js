const express=require("express");

const app=express();
const nav=[
    {
        link:'/books',name:'Books'
    },
    {
        link:'/authors',name:'Author'
    },
    {
        link:'/addbook',name:'Add Book'
    },
    {
        link:'/signup',name:'Signup'
    },
    {
        link:'/login',name:'login'
    },

];
const bookrouter=require("./src/routes/bookroutes")(nav);
const authorsrouter=require("./src/routes/authorsroutes")(nav);
const loginrouter=require("./src/routes/loginroutes")(nav);
const signuprouter=require("./src/routes/signuproutes")(nav);
const addbookrouter=require("./src/routes/addbookroutes")(nav);

app.use(express.static('./public'));
app.set('view engine','ejs');
app.set('views','./src/views')
app.get("/",function(req,res){
    //res.send("Hello World! Welcome");
    app.use("/books",bookrouter);
    app.use("/authors",authorsrouter);
    app.use("/login",loginrouter);
    app.use("/signup",signuprouter);
    app.use("/addbook",addbookrouter);
   

    res.render("index",
    {
        nav, 
        title:'library'
    });
});
 

app.listen(5000);