import React from "react";


export default function SerchBar() {
  return (
    <div>
        <input type="text" placeholder="Que tipo de birra queres?"/>
        <button onClick={()=>{console.log('hola')}}>Agregar</button>
    </div>
  )
}

