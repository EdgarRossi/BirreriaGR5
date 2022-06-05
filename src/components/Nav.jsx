import React from 'react';
import { Link } from 'react-router-dom';
import "./Nav.scss";

function Nav({getBirreria}) {
  return (
    <div className='navbar'>
        <nav>
            {/* <img src={Logo} alt='la birra'/> */}
            <ul className='menubar'>
                <Link to='Categories' className='link'><li>Categorias</li></Link>
                <Link to='Products' className='link'><li>Productos</li></Link>
                <li><button className='button'></button></li>
                <Link to='Us' className='link'><li>Nosotros</li></Link>
                <Link to='Contact' className='link'><li>Contacto</li></Link>
            </ul>
        </nav>
    </div>
  )
}

export default Nav