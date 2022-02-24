import React, { useState } from 'react'
import s from 'styled-components'
import Input from './Input'
import ReplyList from './ReplyList'

const Post = ({ post }) => {
  const [replies, setReplies] = React.useState(
    [],
  )

  const [votes, setVotes] = useState(0)

  const upVote = () => {
    setVotes(votes + 1)
  }

  const downVote = () => {
    setVotes(votes - 1)
  }
  return (

    <>
      <Wrapper>
        <p>
          Sender: {post.sender}
        </p>
        <p>Post Content: {post.content}</p>

        <button onClick={upVote}>Up-vote</button>
        <p>Votes: {votes}</p>
        <button onClick={downVote}>Down-vote</button>
        
        <p>Why not send a reply ?</p>

        <Input passlayer={0} posts={replies} setPosts={setReplies} />
        <ReplyList replies={replies} />
      </Wrapper>
    </>

  )
}

export default Post

const Wrapper = s.div`
  border: 10px solid red;
  padding: 5;
  justify-content: space-between;
`
