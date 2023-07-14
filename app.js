const express=require("express")
const app=express()
const cookieParser=require('cookie-parser')
const errorMiddleware=require('./middleware/error')
// neacha wali do line file upload k liya
const bodyParser=require('body-parser')
const dotenv=require('dotenv')
const cors = require('cors');


//config
dotenv.config({path:"config/config.env"})
app.use(express.json())
app.use(cookieParser())
app.use(bodyParser.urlencoded({extended:true}))
// app.use(cors());
app.use(cors({
    origin: 'http://localhost:3000',
    optionsSuccessStatus: 200 
  }));
  
  const corsOptions = {
    origin: 'http://localhost:3000',
    optionsSuccessStatus: 200 // Some legacy browsers (e.g., IE11, various SmartTVs) choke on 204
  };
//routs imports
const user=require("./routes/userRoute")
app.use("/api/v1", cors(corsOptions),user)

//middleware for error
app.use(errorMiddleware)

module.exports=app