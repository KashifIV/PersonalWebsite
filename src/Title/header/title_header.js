import React, { useEffect, useState } from 'react'; 
import {motion, useAnimation} from 'framer-motion'; 
import style from './title_header.module.css'; 
import {outer_anim_props, inner_anim_props, hide_props} from './title_header_anim'; 
import {Button} from 'react-bootstrap'; 

function TitleHeader(props){
    const name = props.name;
    const callback = props.callback; 

    const box_slide = useAnimation(); 
    const box_slide_b = useAnimation(); 
    const box_slide_c = useAnimation(); 

    const anims = [box_slide, box_slide_b, box_slide_c]; 
    
    const click = () => {
        callback(); 
    }

    const transitionHeader = () => {
        var anim = outer_anim_props; 
        anim.y = props.num*100 - 150; 
        box_slide.start(anim); 
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
        <motion.div animate={box_slide} style={{y:200, opacity: 0}}>
            <Button primary onClick={click}>
                {name}
            </Button>
        </motion.div>
    </div>
}

export default TitleHeader; 