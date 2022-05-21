import React from 'react';
import Logo from '../img/birra.jpeg';
import SerchBar from './SerchBar';

function Nav({getBirreria}) {
  return (
    <div>
        <nav>
            <div>
                <img src={Logo} alt='la birra'/>
            </div>
            <ul>
                <li><button onClick={()=>getBirreria()}>Inicio</button></li>
                <li>Productos</li>
                <li>Nosotros</li>
            </ul>
            <div>
                <SerchBar />
            </div>
        </nav>
    </div>
  )
}

export default Nav