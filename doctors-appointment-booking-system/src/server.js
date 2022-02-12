require("dotenv").config();
const express=require('express');
//import express from "express";
const configViewEngine=require("./config/viewEngine") ;
const initWebRoutes = require("./routes/web"); ;

let app = express();

//config view Engine
configViewEngine(app);

//init all web routes
initWebRoutes(app);

let port = process.env.PORT || 8080;

app.listen(port, ()=>{
   console.log(`App is running at the port ${port}`);
});