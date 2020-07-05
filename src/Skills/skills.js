import React from 'react'; 
import {Container, Row, Col} from 'react-bootstrap'; 

function Skills(props){
    
    const callback = props.callback; 

    return(
    <div>
        <Container>
            <Row>
                <Col>
                    <h1>Proficiency in</h1>
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