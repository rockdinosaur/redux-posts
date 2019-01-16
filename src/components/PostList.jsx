import React from 'react';
import Post from './Post.jsx';

const PostList = ({ posts }) => {
  return (
    <ul>
      {posts.map((post, idx) => {
        return (
          <li key={idx.toString()}>
            <Post {...post} />
          </li>
        )
      })}
    </ul>
  )
}

export default PostList;