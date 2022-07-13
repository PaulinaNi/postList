import { Component } from 'react'
import "./post.style.css"

export default class Post extends Component {
 render() {
  const { post, user, comments } = this.props.post

  return (
   <div className='postContainer'>
    <span>Posted by: {user.name} </span>
    <header>{post.title}</header>
    <div>{post.body}</div>
    <div>Commments:</div>
    {comments.map((comment, index) => <p key={comment.id}>{index + 1}. {comment.body} </p>)}
   </div>
  )
 }
}