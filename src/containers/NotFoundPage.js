import React from 'react'
import { useLocation } from 'react-router-dom'
import { prop } from 'ramda'

const NotFoundPage = () => {
  const location = useLocation()

  return (
    <div>
      <h1>
        This is not the page, you are looking for:
        <code> {prop('pathname', location)}</code>
      </h1>
    </div>
  )
}

export default NotFoundPage
