import React, { useEffect } from 'react'; 
import {motion, useAnimation} from 'framer-motion'; 
import style from './skill_item.module.css'; 

function SkillItem(props){
    const {isClosing, value, index} = props; 

    const general_anim = useAnimation(); 
    const general_anim_props = {
        x: 0, 
        opacity: 1, 
        transition: {
            duration: 1, 
            ease: "easeInOut"
        }
    }; 
    const anim_out_props = {
        opacity: 0, 
        transition: {
            duration: 0.5, 
            ease: "easeInOut"
        }
    }; 

    const animateOut = () => {
        setTimeout(() => general_anim.start(anim_out_props),index*100); 
    }; 

    useEffect(() => {
        if (props.isClosing){
            animateOut(); 
        }
    }, [props.isClosing]); 

    setTimeout(() => general_anim.start(general_anim_props), 500 + index*100); 
    

    return(
        <motion.div animate={general_anim} style={{x: 200, opacity: 0}}>
            <p>{value}</p>
        </motion.div>
    ); 
}

export default SkillItem; 