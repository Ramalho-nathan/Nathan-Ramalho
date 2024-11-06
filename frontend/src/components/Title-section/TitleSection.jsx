import React from 'react'
import './titlesection.scss'
function TitleSection({children}) {
  return (
    <div className="title-section">
        <h1>{children}</h1>
        <span>{children}</span>
    </div>
  )
}

export default TitleSection