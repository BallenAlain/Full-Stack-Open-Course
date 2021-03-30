import React from 'react'
 
const Header = (course) => {
 console.log(course)
 return(
   <div>
     <h1>This is {course.name}</h1>
   </div>
 )
}
 
const Content = (name) => {
 console.log(name)
 return(
   <div>
    <p>Part: {name.part} - Exercise number: {name.exercise}</p>
    <p>Part: {name.part2} - Exercise number: {name.exercise2}</p>
    <p>Part: {name.part3} - Exercise number: {name.exercise3}</p>
   </div>
 ) 
}
 
const Total = (exercises) => {
 console.log(exercises)
 return(
   <div>
    <p>Number of exercises: {exercises.excersisesNum}</p>
   </div>
 ) 
}
 
const App = () => {
  const course = {
    course: 'Half Stack application development',
    parts: [
     {
       name: 'Fundamentals of React',
       exercises: 10
     },
     {
       name: 'Using props to pass data',
       exercises: 7
     },
     {
       name: 'State of a component',
       exercises: 14
     }
   ]
 }
 
 return (
   <div>
    <Header name = {course.course} />
    <Content part = {course.parts[0].name} exercise = {course.parts[0].exercises}
     part2 = {course.parts[1].name} exercise2 = {course.parts[1].exercises}
     part3 = {course.parts[2].name} exercise3 = {course.parts[2].exercises}/>
    <Total excersisesNum = {course.parts[0].exercises + course.parts[1].exercises + course.parts[2].exercises} />
   </div>
 )
}
 
export default App
