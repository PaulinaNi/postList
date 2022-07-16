import { useEffect, useState } from "react"
import "./postList.style.css"

import Post from '../post/post.component'


export default function PostList() {
  const [postsDataBase, setPostsDataBase] = useState([])
  const [usersDataBase, setUsersDataBase] = useState([])
  const [commentsDataBase, setCommentsDataBase] = useState([])

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(res => res.json())
      .then(data => setPostsDataBase(data))
      .catch(e => console.log(e))

    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(data => setUsersDataBase(data))
      .catch(e => console.log(e))

    fetch('https://jsonplaceholder.typicode.com/comments')
      .then(res => res.json())
      .then(data => setCommentsDataBase(data))
      .catch(e => console.log(e))
  }, [])

  return (
    <div>
      {postsDataBase.filter(post => post.id%2 === 0 & post.id%7 ===0 ).map(post => {
        const authorData = usersDataBase.filter(user => user.id === post.userId)[0]
        return (
          <Post
            key={post.id}
            post={post}
            author={usersDataBase.filter(user => user.id === post.userId)[0]}
            comments={commentsDataBase.filter(comments => comments.postId === post.userId)}
          />
        )
      })}

    </div>
  )
}