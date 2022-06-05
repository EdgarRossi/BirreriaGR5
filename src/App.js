import './App.css';
import Nav from './components/Nav';
import { useState } from 'react';
import CardsBirra from './components/CardsBirra';
import SearchBar from './components/SearchBar'
import backgroundvideo from './img/beer-background.mp4'
import { Route } from 'react-router-dom'

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
   <div className='App'>
     <Route path={'/'}>
      <video autoPlay muted loop className="myVideo">
          <source src={backgroundvideo} type="video/mp4"/>
        </video>
      <Nav getBirreria={getBirreria}/>
     </Route>
     <Route path={'/Birrerias'}>
      <CardsBirra Birra={Birra}/>
      <SearchBar />
     </Route>
   </div>
  );
}

export default App;
