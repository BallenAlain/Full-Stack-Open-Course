import React, {useState} from 'react'
import Com from './Components/com'

const Comments = (props) => {
    const[comments, setComments] = useState([])
    const[newComment, setNewComment] = useState(''
    )

    const addComment = (event) => {
        event.preventDefault()
        const commentObject = {
            content: newComment,
            date: new Date().toString(),
            id: comments.length + 1,
        }

        setComments(comments.concat(commentObject))
        setNewComment('')
    }

    const handleCommentChange = (event) => {
        console.log(event.target.value)
        setNewComment(event.target.value)
    }

    return(
        <div>

            <h1>Comments</h1>
              <ul style={{"listStyleType":"none"}}>{comments.map(comment =>
                    <Com key = {comment.id} comment = {comment} />
                    )}
              </ul>
            <form onSubmit = {addComment}>
                <input value = {newComment}
                onChange = {handleCommentChange}
                placeholder="enter comment"
                />
                <button type = "submit">save</button>
            </form>
          
        </div>
    )
}

export default Comments