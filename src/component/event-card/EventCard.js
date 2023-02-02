import React from 'react'
import "./EventCard.css"

export default function EventCard(props) {
  
  return (
    <div className='card'>
      <h3 className={props.category}>{props.category}</h3>
      <h1>{props.event}</h1>
    </div>
  )
}

