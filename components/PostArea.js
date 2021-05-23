import React from 'react'
import Post from './Post'

const PostArea = ({ posts }) => {
  return (
    <div>
      {posts.map((post) => (
        <div key={post.PostID}>
          <Post post={post} />
        </div>
      ))}
    </div>
  )
}

export default PostArea