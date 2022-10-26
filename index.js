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

// get all categories
app.get('/api/allcategories' , (req , res)=>{
   let categories = [];
   for (var i=0; i < courses.length ; ++i)
   categories.push(courses[i].category);
   const uniqueArray = categories.filter((value, index) => {
    const _value = JSON.stringify(value);
    return index === categories.findIndex(obj => {
      return JSON.stringify(obj) === _value;
    });
  });
    res.send(uniqueArray)
 })

//  get course by category 

app.get('/api/courses/:category' , (req , res)=>{
    let {category} = req.params
    let filteredCourses = courses.filter(perCourse => perCourse.category == category )
    res.send(filteredCourses)
 })



app.listen(Port , ()=>{
    console.log(`Server is Running on : ${Port}`);
})