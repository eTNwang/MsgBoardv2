import React from 'react'

const Input = ({ passlayer, posts, setPosts }) => {
  const [state, setState] = React.useState({
    sender: '',
    content: '',
    layer: 0,
    id: Math.random(3),
  })

  const updateinputs = e => {
    const { target } = e
    const { value } = target
    setState({
      ...state,
      [e.target.name]: value,
    })
  }

  const submitinputs = e => {
    e.preventDefault()
    // then call functions to set the comment
    setPosts(

      [
        ...posts,
        {
          sender: state.sender,
          content: state.content,
          layer: passlayer + 1,
        },
      ],
    )

    setState({
      sender: '',
      content: '',
      layer: passlayer,
      id: Math.random(100),
    })
  }

  return (
    <form
      onSubmit={submitinputs}

    >
      <input
        type="text"
        name="sender"
        value={state.sender}
        placeholder="Enter your name"
        onChange={updateinputs}
      />
      <br />
      <input
        type="text"
        name="content"
        value={state.content}
        placeholder="Write a post"
        onChange={updateinputs}

      />
      <br />
      <input type="submit" disabled={!state.content || !state.sender} value="Submit" />
    </form>
  )
}

export default Input
