import React from 'react'; 
import style from './title_name.module.css';
import {motion, useAnimation} from 'framer-motion'; 
import {Container, Row, Col} from 'react-bootstrap'; 
import TitleHeader from '../header/title_header'; 

function TitleName(props){


    const title_animation = useAnimation(); 
    const title_props = {
        x: -160, 
        textAlign: 'right', 
        transition: {
            duration: 1,
            ease: "easeInOut",
        }
    }; 

    const divide_animation = useAnimation(); 
    const divide_props = {
        y: -100, 
        opacity: 1, 
        transition: {
            duration: 1,
            ease: "easeInOut",
        }
    }; 

    const transitionTitle = () => {
        title_animation.start(title_props); 
        divide_animation.start(divide_props); 
    }; 

    setTimeout(transitionTitle, 2000); 


    return (<div className={style.background}>
        <div className={style.content}>    
            <Container>
                <Row>
                    <Col sm={8}>
                        <motion.div animate={title_animation}>
                            <h1 className={style.title}>
                                Kashif Hussain
                            </h1>
                            <p className={style.tag}>create. learn. develop</p> 
                        </motion.div>
                        <motion.div animate={divide_animation} className={style.divide}/>
                    </Col>
                    <Col sm={2}>
                        <TitleHeader name="skills"/>
                    </Col>
                </Row>
            </Container>
        </div>
    </div>); 
    
}

export default TitleName; 