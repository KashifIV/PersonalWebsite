import React, {useState, useEffect} from 'react'; 
import style from './experience_item.module.css'; 
import {motion, useAnimation} from 'framer-motion'; 
function ExperienceItem(props){

    const data = props.data; 
    const callback = props.callback; 
    const index = props.index; 

    const anim = useAnimation(); 
    const [raised, setRaised] = useState(false); 
    const onClick = () => {

        if (raised){
            anim.start(item_anim_props.default); 
        }
        else{
            anim.start(item_anim_props.raised); 
        }
        setRaised(!raised); 

        callback(index-1); 

    }

    const item_anim_props = {
        default: {
            y: 0, 
            transition: {
                duration: 1, 
                ease: "easeInOut"
            }
        }, 
        hide: {
            opacity: 0, 
            transition: {
                duration: 1, 
                ease: "easeInOut"
            }
        }, 
        show: {
            opacity: 1, 
            transition: {
                duration: 1, 
                ease: "easeInOut"
            }
        }, 
        raised: {
            y: -50 - 150*index, 
            transition: {
                duration: 1, 
                ease: "easeInOut"
            }
        }
    }; 

    useEffect(() => {
        if (props.isSelected){
            anim.start(item_anim_props.show); 
        }
        else {
            anim.start(item_anim_props.hide); 
        }
    }, [props.isSelected]); 

    return (
        <motion.div 
            onClick={onClick}
            whileHover={{
                scale: 1.1,
                transition: { duration: 0.2 },
              }}
              animate={anim}
        >
            <div className={style.jobOption}>
                <h2>{data['title']}</h2>
                <h3>{data['company']}</h3>
            </div>
        </motion.div>
    ); 
}

export default ExperienceItem; 