import React from 'react'
import { useParams } from 'react-router-dom'

function Chat() {
    const id = useParams();
  return (
  <div>
<p>Chat: {id.id}</p>
  </div>
  )
}

export default Chat