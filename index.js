const express = require('express')
const app = express()
const cors = require('cors')
app.use(cors())

const Port = process.env.Port || 5000;

app.get('/' , (req , res)=>{
   res.send("Welcome To Edukite Server")
})

app.listen(Port , ()=>{
    console.log(`Serbver is Running on : ${Port}`);
})