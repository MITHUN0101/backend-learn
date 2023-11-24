import express from "express";

const app = express();

app.set("view engine","ejs");
//configuring the static file
app.use(express.static("./public"));

//Middleware
app.use((req,res,next)=>{
    console.log("middleware");
    next();
})


//Dynamic Routing
app.get("/user/:name",(req,res)=>{
    res.send(`<h1>It is ${req.params.name}</h1>`)
})

app.get("/service/:name",(req,res)=>{  //"/service/:name" --> is said to be params
    res.send(`<h1>It is ${req.params.name}</h1>`)
})

app.get("/learnejs",(req,res)=>{
    res.render("home",{name:"Mithun"});
})

app.get("/learnejs2",(req,res)=>{
    res.render("contact",{number:78768678768,});
})

app.get("/",(req,res)=>{
    res.send("<h1>Bhaiyo bheno</h1>");
})

//Error handelling

app.get("/error",(req,res)=>{
    throw new Error()
})

app.use(function errorHandler (err, req, res, next) {
    if (res.headersSent) {
      return next(err)
    }
    res.status(500)
    res.render('error', { error: err })
  })

app.listen("3000",()=>{
    console.log("listening at 3000");
})




//Template Engine --> EJS

//1) Install EJS -->npm i ejs

//2) configure ejs--> app.set("view engine","ejs")

//3) make one views folder

//4) make ejs files in that folder like contact.ejs

//5) in node write res.render in place of res.send


//============================||==============================//

//statcic Files --> it means to setup HTML stylesheet and frontend js setup karna.

//1) create a folder named public

//2) create three folder inside it which named as images, stylesheets,javascripts

//3) configure the express static

//4) understand the path
