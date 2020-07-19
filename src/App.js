import React, {useState, useEffect} from 'react';
import logo from './logo.svg';
import './App.css';
import TitleName from './Title/name/title_name'
import Skills from './Skills/skills'; 
import Scene from './Title/scene/scene'; 
import Experience from './Experience/experience'; 
import TitleNavigation from './Title/navigation/title_navigation'; 
import { Button } from 'react-bootstrap';

function App() {

  const onClickNav = (location_name) => {
    console.log("clicked")
    setLocationIndex(locations.findIndex((item) => item == location_name)); 
  }; 


  const getTitle = (index) => {
    if (index == 0){
      return <TitleName callback={onClickNav}/> 
    }
    else if (index == 1){
      return <Experience callback={onClickNav}/>
    } 
    else if (index == 2){
      return <Skills callback={onClickNav}/>
    }
  }

  const locations = ['station', 'crossing', 'overpass']
  const [locationIndex, setLocationIndex] = useState(0); 
  const [title, setTitle] = useState(getTitle(0)); 
  

  useEffect(() => {
    setTimeout(() => {
      setTitle(getTitle(locationIndex)); 
    }, 1000)
  }, [locationIndex]); 


  return (
    <div className="App">
      <header className="App-header">
        {title}
        <Scene location={locations[locationIndex]}/>
      </header>
    </div>
  );
}

export default App;
