const express = require('express')
const app = express()
const cors = require('cors')
app.use(cors())
const Port = process.env.Port || 5000;

const courses = require('./Data/data.json')
// Main Path
app.get('/api' , (req , res)=>{
   res.send("Welcome To Edukite Server")
})

// All Courses api
app.get('/api/allcourses' , (req , res)=>{
    res.send(courses)
 })

// get single course by id
app.get('/api/course/:id' , (req , res)=>{
    let {id} = req.params
    let course = courses.find(perCourse => perCourse.id == id )
    res.send(course)
 })

app.listen(Port , ()=>{
    console.log(`Serbver is Running on : ${Port}`);
})