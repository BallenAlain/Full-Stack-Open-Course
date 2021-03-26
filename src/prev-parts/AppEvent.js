import React, { useState } from 'react'
 
const AppEvents = () => {
   const [ clicks, setClicks ] = useState({
       left: 0, right: 0
   })
 
   const[allClicks, setAll] = useState([])
  
   const handleLeftClick = () => {
       setClicks({...clicks, left: clicks.left + 1})
       setAll(allClicks.concat('L'))
   }
   const handleRightClick = () => {
       setClicks({...clicks, right: clicks.right + 1})
       setAll(allClicks.concat('R'))
   }
 
   const Reset = () => {
       setClicks({left: 0, right: 0})
       setAll([])
   }
 
   const Display = ({ counter }) => <span> {counter} </span>
 
   const History = (props) => {
       if(props.allClicks.length === 0) {
           return (
               <div>
                   The app is used by pressing the buttons
               </div>
           )
       }
       return (
           <div>
               Button press history: {props.allClicks.join(' - ')}
           </div>
       )
   }
 
   const Button = ({ handleClick, text }) => (
           <button onClick = {handleClick}>
               {text}
           </button>
   )
 
   return (
   <div>
       <p>--------------------------------</p>
       <h2>The app is used by pressing the buttons</h2>
       <Display counter = {clicks.left}/>
       <Button handleClick = {handleLeftClick} text = 'left' />
       <Button handleClick = {handleRightClick} text = 'right' />
       <Display counter = {clicks.right} />
       <p><Button handleClick = {Reset} text = 'reset' /></p>
       <History allClicks = {allClicks} />
   </div>
   )
 }
  export default AppEvents