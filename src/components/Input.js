import React from 'react'

const Input = ({ passlayer, posts, setPosts }) => {
  const [state, setState] = React.useState({
    sender: '',
    content: '',
    layer: 0,
  })

  const handleChange = e => {
    const { target } = e
    const { value } = target
    setState({
      ...state,
      [e.target.name]: value,
    })
  }

  const handleSubmit = e => {
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
    })
  }

  return (
    <form
      onSubmit={handleSubmit}

    >
      <input
        type="text"
        name="sender"
        value={state.sender}
        placeholder="Enter your name"
        onChange={handleChange}
      />
      <br />
      <input
        type="text"
        name="content"
        value={state.content}
        placeholder="Write a post"
        onChange={handleChange}

      />
      <br />
      <input type="submit" disabled={!state.content || !state.sender} value="Submit" />
    </form>
  )
}

export default Input