import React from 'react'

function CardBirra({name, type}) {
  return (
    <div>
        <h1>{name}</h1>
        <h4>{type}</h4>
    </div>
  )
}

export default CardBirra