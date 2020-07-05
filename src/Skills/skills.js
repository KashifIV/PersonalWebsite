import React, { useState } from 'react'; 
import {Container, Row, Col} from 'react-bootstrap'; 
import data from '../data/skills.json'; 
import SkillOptions from './skill_options/skill_options'; 

function Skills(props){
    
    const callback = props.callback; 


    const sections = Object.keys(data); 
    const [sectionIndex, setSectionIndex] = useState(0); 

    const click = (section) => {

    }; 

    return(
    <div>
        <Container>
            <Row>
                <Col>
                    <SkillOptions callback={click} options={sections} selected={sections[sectionIndex]}/>
                </Col>
                <Col>
                    <p>a bunch of random crap</p>
                </Col>
            </Row>
        </Container>
    </div>
    )
}

export default Skills; 