import React from 'react'; 
import {motion, useAnimation} from 'framer-motion'; 
import style from './title_header.module.css'; 

function TitleHeader(props){
    const name = props.name;
    const box_slide = useAnimation(); 
    const box_slide_b = useAnimation(); 
    const box_slide_c = useAnimation(); 
    
    const outter_anim_props = {
        x: -(window.innerWidth/12 - 10), 
        opacity: 1, 
        transition: {
            duration: 1, 
            ease: "easeInOut"
        }
    }; 
    const inner_anim_props = {
        x:0, 
        opacity: 1, 
        transition: {
            duration: 1, 
            ease: "easeInOut"
        }
    };

    const transitionHeader = () => {
        box_slide.start(outter_anim_props); 
        setTimeout(box_slide_b.start(inner_anim_props), 500);
        setTimeout(box_slide_c.start(inner_anim_props), 1000);  
    }; 

    setTimeout(transitionHeader, 3000); 

    return <div className={style.headerContent}>
        <div className={style.parentHeader}>
            <motion.div animate={box_slide} className={style.headerBox} style={{backgroundColor: 'red', x: 300, opacity: 0}}>
                <motion.div animate={box_slide_b} className={style.headerBox} style={{backgroundColor: 'blue', x: 300, opacity: 0}}>
                    <motion.div animate={box_slide_c} className={style.headerBox} style={{x: 300, opacity: 0}}>
                        <div className={style.text}>
                            <h2>{name}</h2>
                        </div>
                    </motion.div>
                </motion.div>
            </motion.div>
        </div>
    </div>
}

export default TitleHeader; 