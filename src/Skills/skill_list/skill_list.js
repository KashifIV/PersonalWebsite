import React, { useState, useEffect } from 'react'; 
import style from './skill_list.module.css'; 
import SkillItem from '../skill_item/skill_item'; 
import {motion, useAnimation} from 'framer-motion'; 
function SkillList(props){

    const {data, isClosing} = props; 
    const width_items = 4; 
    const vertical = 3


    const background_anim = useAnimation(); 
    const background_anim_props = {
        show: {
            y: 0, 
            transition: {
                duration: 1, 
                ease: "easeInOut"
            }
        }, 
        hide: {
            y: 500, 
            transition: {
                duration: 1, 
                ease: "easeInOut"
            }
        }
       
    }; 

    const back = () => {
        background_anim.start(background_anim_props.hide); 
    }

    useEffect(() => {
        if (props.isKilling){
            back(); 
        }
    }, [props.isKilling])

    background_anim.start(background_anim_props.show); 

    return(<div>
        <motion.div animate={background_anim} className={style.background} style={{y: 500}}/>
        <div className={style.table, style.listContent}>
        {
            Array(vertical).fill().map((_, i) => <ul className={style.horizontalList}>
                {
                    data.slice(i*width_items, (i*width_items + width_items < data.length)? i*width_items + width_items: data.length).map((item) => 
                        <li><SkillItem isClosing={isClosing} value={item} index={i}/></li>
                    )
                }
            </ul>)
        }
        </div>
    </div>); 
}

export default SkillList; 