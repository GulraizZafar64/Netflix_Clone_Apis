const express=require("express")
const app=express()
const cookieParser=require('cookie-parser')
const errorMiddleware=require('./middleware/error')
// neacha wali do line file upload k liya
const bodyParser=require('body-parser')
const dotenv=require('dotenv')
const { createProxyMiddleware } = require('http-proxy-middleware');


//config
dotenv.config({path:"config/config.env"})
app.use(express.json())
app.use(cookieParser())
app.use(bodyParser.urlencoded({extended:true}))
//routs imports

module.exports = function(app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'http://localhost:3000',
      changeOrigin: true,
    })
  );
};
const user=require("./routes/userRoute")
app.use("/api/v1",user)

//middleware for error
app.use(errorMiddleware)

module.exports=app