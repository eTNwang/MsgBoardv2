/* eslint-disable react/jsx-filename-extension */
import React, { useState } from 'react'
import Reply from './Reply'

const FinalReplyList = ({ replyList }) => (
  <div>
    {replyList.map((reply, ind) => (
      <Reply key={Math.random(Math.random(5))} reply={reply} />
    ))}
  </div>
)

const ReplyList = ({ replies }) => {
  // const addPost= post => {
  //   const oldposts = state.posts
  //   const newposts = oldposts.push(post)
  //   setState({
  //     posts: newposts,
  //   })
  // }

  const replyList = replies

  return <FinalReplyList replyList={replyList} />
}

export default ReplyList
