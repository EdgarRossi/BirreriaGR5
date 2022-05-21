import React from 'react';
import CardBirra from './CardBirra';

 export default function CardsBirra({Birra}) {
  return (
    <div>{
        Birra.map((birreria) => {
          return(
            <CardBirra 
                key={birreria.id}
                name={birreria.name}
                type={birreria.brewery_type}            
            />
          )   
        })
      }</div>
  )
}

