import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import TitleName from './Title/name/title_name'
import Scene from './Title/scene/scene'; 
import TitleNavigation from './Title/navigation/title_navigation'; 

function App() {

  const locations = ['station', 'overpass']
  const [locationIndex, setLocation] = useState(0); 

  const onClickNav = () => {
    if (locationIndex + 1 >= locations.length){
      setLocation(0); 
    }
    else {
      setLocation(locationIndex + 1); 
    }
    console.log(locationIndex); 
  }

  return (
    <div className="App">
      <header className="App-header">
        <TitleNavigation callback={onClickNav}/>
        <Scene location={locations[locationIndex]}/>
      </header>
    </div>
  );
}

export default App;
