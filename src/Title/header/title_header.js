import React, { useEffect, useState } from 'react'; 
import {motion, useAnimation} from 'framer-motion'; 
import style from './title_header.module.css'; 
import {outer_anim_props, inner_anim_props, hide_props} from './title_header_anim'; 

function TitleHeader(props){
    const name = props.name;
    const callback = props.callback; 

    const box_slide = useAnimation(); 
    const box_slide_b = useAnimation(); 
    const box_slide_c = useAnimation(); 

    const anims = [box_slide, box_slide_b, box_slide_c]; 
    
    const click = () => {
        console.log("click button"); 
        callback(); 
    }

    const transitionHeader = () => {
        box_slide.start(outer_anim_props); 
        setTimeout(box_slide_b.start(inner_anim_props), 500);
        setTimeout(box_slide_c.start(inner_anim_props), 1000);  
    }; 
    const hideHeader = () => {
        anims.forEach((item) => {
            item.start(hide_props); 
        }); 
    }; 

    useEffect(() => {
       if (props.isHidden){
            hideHeader(); 
       }else {
            setTimeout(transitionHeader, 3000); 
       }
    }, [props.isHidden]); 

    setTimeout(transitionHeader, 3000); 

    return <div className={style.headerContent}>

        <motion.div onClick={click} animate={box_slide} className={style.headerBox} style={{backgroundColor: 'red', x: 300, opacity: 0}}>
            <motion.div onClick={click} animate={box_slide_b} className={style.headerBox} style={{backgroundColor: 'blue', x: 300, opacity: 0}}>
                <motion.div animate={box_slide_c} className={style.headerBox} style={{x: 300, opacity: 0}}>
                    <div onClick={click} className={style.headerText}>
                        <h2>{name}</h2>
                    </div>
                </motion.div>
            </motion.div>
        </motion.div>
    </div>
}

export default TitleHeader; 