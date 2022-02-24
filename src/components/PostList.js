/* eslint-disable react/jsx-filename-extension */
import React, { useState } from 'react'
import Post from './Post'

// const constructList= posts => {

//   let postList = []
//   posts.forEach(post => {
//     postList.push({
//     sender: post.sender,
//     content: post.content,

//     })
//   })
//   return postList
// }

const FinalPostList = ({ postList }) => (
  <div>
    {postList.map((post, index) => (
      <Post key={Math.random(Math.random(3))} post={post} />
    ))}
  </div>
)

const PostList = ({ posts }) => {
  // const addPost= post => {
  //   const oldposts = state.posts
  //   const newposts = oldposts.push(post)
  //   setState({
  //     posts: newposts,
  //   })
  // }

  const postList = posts

  return <FinalPostList postList={postList} />
}

export default PostList
