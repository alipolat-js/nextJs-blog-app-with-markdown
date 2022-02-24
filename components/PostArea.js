import React from 'react'
import Post from './Post'

const PostArea = ({ posts }) => {
  return (
    <>
      {posts.map((post) => (
        <div key={post.slug}>
          <Post post={post} />
        </div>
      ))}
    </>
  )
}

export default PostArea