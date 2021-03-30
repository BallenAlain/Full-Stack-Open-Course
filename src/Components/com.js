import React from 'react'

const Com = ({ comment }) => {
    return(
        <li>
            <big>{comment.content}</big>
           <small>
            <pre>
            <span style={{"color":"grey"}}>     {comment.date}</span>
            </pre>
            </small>
        </li>
   
    )
 }

 export default Com