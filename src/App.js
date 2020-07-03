import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import TitleName from './Title/name/title_name'
import Scene from './Title/scene/scene'; 
import TitleNavigation from './Title/navigation/title_navigation'; 
import { Button } from 'react-bootstrap';

function App() {

  const locations = ['station', 'crossing', 'overpass']
  const [locationIndex, setLocationIndex] = useState(0); 

  const onClickNav = () => {
    setLocationIndex((locationIndex + 1)% locations.length); 
  }
  return (
    <div className="App">
      <header className="App-header">
        <Button className='button' onClick={onClickNav}>
          Next
        </Button>
        <TitleName/>
        <Scene location={locations[locationIndex]}/>
      </header>
    </div>
  );
}

export default App;
