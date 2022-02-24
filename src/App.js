import React, { useState } from 'react'

import Title from './components/Title'
import Input from './components/Input'
import PostList from './components/PostList'

const App = () => {
  const [posts, setPosts] = React.useState(
    [],

    /// SHOULD STORE EVERYTHING, REPLIES AND ALL
  )

  return (
    <>
      <Title />
      <Input passlayer={0} posts={posts} setPosts={setPosts} />
      <PostList posts={posts} />

    </>
  )
}

export default App
