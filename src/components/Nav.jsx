import React from 'react';
import s from "./Nav.module.css";

function Nav({getBirreria}) {
  return (
    <div className={s.navbar}>
        <nav>
            {/* <img src={Logo} alt='la birra'/> */}
            <ul className={s.menubar}>
                <li>Categorias</li>
                <li>Productos</li>
                <li><button className={s.button} onClick={()=>getBirreria()}></button></li>
                <li>Nosotros</li>
                <li>Contacto</li>
            </ul>
        </nav>
    </div>
  )
}

export default Nav