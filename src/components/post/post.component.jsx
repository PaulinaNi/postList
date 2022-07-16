import "./post.style.css"

export default function Post(props) {
 const { title, body } = props.post
 const { username } = props.author
 const { comments } = props

 return (
  <div className='postContainer'>

   <span>Posted by: {username} </span>
   <header>{title}</header>
   <div>{body}</div>
   <div>Commments:</div>
   {comments.map((comment, index) => <p key={comment.id}>{index + 1}. {comment.body} </p>)}
  </div>
 )
}
