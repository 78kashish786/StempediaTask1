import { useSelector, useDispatch } from 'react-redux'

import React from 'react'
import { selectallposts } from './postSlice'

const PostList = () => {

    const posts = useSelector(selectallposts)

    const renderedPost = posts.map(post=>(
        <article key ={post.id}>
          <h1>{post.title}</h1>
        </article>  

    ))
  return (
    <div>
      {renderedPost }
    </div>
  )
}

export default PostList
