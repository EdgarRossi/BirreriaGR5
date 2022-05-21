import logo from './logo.svg';
import './App.css';
import Nav from './components/Nav';
import { useState } from 'react';
import CardsBirra from './components/CardsBirra';

function App() {

  const [Birra, setBirra] = useState([]);

  function getBirreria(){
    fetch('https://api.openbrewerydb.org/breweries')
      .then(r => r.json())
      .then((recurso)=>{
        if(recurso !== undefined){
          setBirra([...recurso]);
          console.log(Birra);
        } else {
          alert("Birra no encontrada");
        }
      })
  }


  return (
   <div>
     <Nav getBirreria={getBirreria}/>
     <div>
       <CardsBirra Birra={Birra}/>
     </div>
   </div>
  );
}

export default App;
