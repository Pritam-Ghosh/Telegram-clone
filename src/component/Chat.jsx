import React from 'react'
import { useParams } from 'react-router-dom'

function Chat() {
    const id = useParams()
  return (
    <div>Chat: {id.id}</div>

  )
}

export default Chat