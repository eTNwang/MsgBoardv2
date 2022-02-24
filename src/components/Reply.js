import React, { useState } from 'react'
import s from 'styled-components'
import Input from './Input'
import ReplyList from './ReplyList'

const Reply = ({ layer, reply, setReply }) => {
  const [state, setState] = React.useState(
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
          {reply.sender}
        </p>
        <p>{reply.content}</p>

        <button onClick={upVote}>Up-vote</button>
        <p>{votes}</p>
        <button onClick={downVote}>Down-vote</button>
        <div>"Why not send a reply ?"</div>
        {reply.layer < 2
        && (
        <>
          <Input passlayer={reply.layer} posts={state} setPosts={setState} />
          <ReplyList replies={state} />
        </>
        )}

      </Wrapper>
    </>
  )
}

export default Reply

const Wrapper = s.div`
  border: 10px solid blue;
  padding: 5;
  justify-content: space-between;
`
