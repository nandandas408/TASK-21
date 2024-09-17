import React from 'react'

const Card = (props) => {
  return (
    <div className='card'>
      <img src={props.imageUrl} alt="" />
      <h3>Card {props.cardNumber}</h3>
      <p>This is card {props.cardNumber} description.</p>
    </div>
  )
}

export default Card
