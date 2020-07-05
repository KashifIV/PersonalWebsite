import React, { useEffect, useState } from 'react'; 
import style from './title_name.module.css';
import {motion, useAnimation} from 'framer-motion'; 
import {Container, Row, Col} from 'react-bootstrap'; 
import TitleHeader from '../header/title_header'; 
import {hide_props, divide_props, title_props, background_props} from './title_name_anim'; 

function TitleName(props){

    const callback = props.callback; 
    const title_animation = useAnimation(); 

    const [isHidden, setHidden] = useState(false); 

    const divide_animation = useAnimation(); 
    const background_animation = useAnimation(); 

    const transitionTitle = () => {
        title_animation.start(title_props); 
        divide_animation.start(divide_props); 
    }; 

    const click = (location) => {
        setHidden(true); 
        divide_animation.start(hide_props); 
        title_animation.start(hide_props); 
        background_animation.start(background_props); 
        callback(location); 
    }

    setTimeout(transitionTitle, 2000); 


    return (
        <div className={style.content}>
            <motion.div animate={background_animation} className={style.background} style={{opacity: 0.6}}/>    
            <Container>
                <Row>
                    <Col sm={8}>
                        <div className={style.focalAnim}>
                            <motion.div animate={title_animation}>
                                <h1 className={style.title}>
                                    Kashif Hussain
                                </h1>
                                <p className={style.tag}>create. learn. develop.</p> 
                            </motion.div>
                            <motion.div animate={divide_animation} className={style.divide}/>
                        </div>
                    </Col>
                    <Col sm={2}>
                        <TitleHeader name="experience." callback={() => click("station")} isHidden={isHidden}/>
                        <TitleHeader name="skills." callback={() => click("overpass")} isHidden={isHidden}/>
                        <TitleHeader name="projects." callback={() => click("crossing")} isHidden={isHidden}/>
                    </Col>
                </Row>
            </Container>
    </div>); 
    
}

export default TitleName; 