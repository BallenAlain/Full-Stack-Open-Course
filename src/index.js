import ReactDOM from 'react-dom'
import App from './Unicafe'
import Comments from './Comments'

const comments = [
  {
    id: 1,
    content: '',
    date: '2019-05-30T17:30:31.098Z'
  }
]

ReactDOM.render(
    <App/>,
    document.getElementById('root')
   )

ReactDOM.render(
  <Comments comments = {comments}/>,
  document.getElementById('root2')
)


