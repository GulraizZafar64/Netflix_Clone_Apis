const express=require("express")
const app=express()
const cookieParser=require('cookie-parser')
const errorMiddleware=require('./middleware/error')
// neacha wali do line file upload k liya
const bodyParser=require('body-parser')
const dotenv=require('dotenv')
const cors = require('cors');

app.use(cors(
  {
    origin:["https://netflix-clone-web-ten.vercel.app/"],
    methods:["POST","GET"],
    credentials:true
  }
))
//config
dotenv.config({path:"config/config.env"})
app.use(express.json())
app.use(cookieParser())
app.use(bodyParser.urlencoded({extended:true}))
// app.use(cors());
// app.use(cors({
//   origin: '*'
// }));

//routs imports

const user=require("./routes/userRoute")
app.use("/api/v1",user)

//middleware for error
app.use(errorMiddleware)

module.exports=app