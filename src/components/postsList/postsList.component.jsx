import { Component } from 'react'
import "./postList.style.css"

import Post from '../post/post.component'

export default class PostList extends Component {
 constructor() {
  super()
  this.state = {
   posts: [],
  }
 }
 componentDidMount() {
  const postsDatabase = []
  for (let i = 1; i < 3; i++) {
   const postModel = {
    user: {},
    post: {},
    comments: [],
   }
   fetch(`https://jsonplaceholder.typicode.com/posts/${i}`)
    .then(res => res.json())
    .then(data => postModel.post = data)
    .catch(e => console.log(e))

   fetch(`https://jsonplaceholder.typicode.com/posts/${i}/comments`)
    .then(res => res.json())
    .then(data => postModel.comments = data)
    .catch(e => console.log(e))

   fetch(`https://jsonplaceholder.typicode.com/users/${i}`)
    .then(res => res.json())
    .then(data => postModel.user = data)
    .catch(e => console.log(e))
   postsDatabase.push(postModel)
  }
  this.setState({ posts: postsDatabase })
 }
 render() {
  console.log(this.state.posts)
  return (
   <div>
    {this.state.posts.map((post, index) => <Post key={index} post={post} />)}

   </div>
  )
 }
}