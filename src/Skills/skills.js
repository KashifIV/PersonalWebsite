import React, { useState } from 'react'; 
import {Container, Row, Col} from 'react-bootstrap'; 
import data from '../data/skills.json'; 
import SkillOptions from './skill_options/skill_options'; 
import SkillList from './skill_list/skill_list'; 
import TitleNavigation from '../Title/navigation/title_navigation'; 
import style from './skills.module.css'; 

function Skills(props){
    
    const callback = props.callback; 


    const sections = Object.keys(data); 
    const [sectionIndex, setSectionIndex] = useState(0); 
    const [isClosing, setClosing] = useState(false); 

    const onChangeLocation = (location) => {
        callback(location); 
    }; 

    const click = (section) => {
        console.log("settingindex"); 
        setClosing(true); 
        setTimeout(() => setSectionIndex(sections.findIndex((value) => value == section)), 500);
        setTimeout(() => setClosing(false), 500);   
    }
    
    const [isKilling, setKilling] = useState(false); 

    const back = () => {
        setKilling(true);
        setClosing(true); 
        callback('station')
    }; 

    return(
    <div>
        <TitleNavigation callback={back}/>
        <SkillOptions callback={click} options={sections} selected={sections[sectionIndex]} isKilling={isKilling}/>
        <SkillList data={data[sections[sectionIndex]]} isClosing={isClosing} isKilling={isKilling}/>
    </div>
    ); 
}

export default Skills; 