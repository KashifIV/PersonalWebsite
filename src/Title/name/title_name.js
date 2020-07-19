import React, { useEffect, useState } from 'react'; 
import style from './title_name.module.css';
import {motion, useAnimation} from 'framer-motion'; 
import {Container, Row, Col} from 'react-bootstrap'; 
import TitleHeader from '../header/title_header'; 
import Lottie from 'react-lottie'; 
import animationData from '../../models/images/name_reveal.json'; 
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

    const defaultOptions = {
        loop: false,
        autoplay: true,
        animationData: animationData,
      };


    return (
        <div className={style.content}>
            <motion.div animate={background_animation} className={style.background} style={{opacity: 0.6}}/>    
            <motion.div animate={title_animation}>
                <Lottie 
                    options={defaultOptions}
                    height={window.innerHeight}
                    eventListeners={[
                        {
                        eventName: "complete",
                        callback: () =>
                            transitionTitle()
                        },
                    ]}
                />
            </motion.div>
            <TitleHeader name="experience." callback={() => click("crossing")} isHidden={isHidden} num={1}/>
            <TitleHeader name="skills." callback={() => click("overpass")} isHidden={isHidden} num={2}/>
            <TitleHeader name="projects." callback={() => click("crossing")} isHidden={isHidden} num={3}/>
    </div>); 
    
}

export default TitleName; 