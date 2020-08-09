import React, {useEffect} from 'react'; 
import {motion, useAnimation} from 'framer-motion'; 
import style from './experience_detail.module.css'; 

function ExperienceDetail(props){

    const data = props.data; 
    const anim = useAnimation(); 

    const anim_props = {
        show: {
            y: 0, 
            transition: {
                duration: 1, 
                ease: "easeInOut"
            }
        }, 
        hide: {
            y: 1000, 
            transition: {
                duration: 1, 
                ease: "easeInOut"
            }
        }
    }; 

    useEffect(() => {
        if (props.data == null){
            anim.start(anim_props.hide); 
        }
        else {
            anim.start(anim_props.show); 
        }
    }, [props.data]); 

    return(
        <motion.div animate={anim} style={{y:1000}}>
            <div className={style.detail}>
                {
                    (data == null)? <div/> : (data['Bullets'].map((value) => 
                        <p>{value}</p>
                    ))
                }
            </div>
        </motion.div>
    ); 
}

export default ExperienceDetail; 