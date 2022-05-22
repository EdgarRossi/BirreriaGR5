import React from "react";
import s from './SearchBar.module.css'


export default function SearchBar() {
  return (
    <div className={s.SearchBar}>
        <input type="text" placeholder="Cerveceria..."/>
        <button className={s.btn}onClick={()=>{console.log('hola')}}>Buscar</button>
    </div>
  )
}

