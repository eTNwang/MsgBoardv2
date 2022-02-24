/* eslint-disable react/jsx-filename-extension */
import React, { useState } from 'react'
import Reply from './Reply'

const FinalReplyList = ({ replyList }) => (
  <div>
    {replyList.map((reply, ind) => (
      <Reply key={reply.id} reply={reply} />
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
