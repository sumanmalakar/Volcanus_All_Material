import React from 'react'
import { useNavigate } from 'react-router-dom'

const Career = () => {
  const navigate = useNavigate()
  return (
    <div>This is Career page
      <button onClick={()=>navigate('/team')}>Navigate to Teams page</button>
    </div>
  )
}

export default Career