import React, {useState} from 'react'; 
import { motion, useAnimation } from 'framer-motion';
import ExperienceItem from '../experience_item/experience_item'; 
import style from './experience_options.module.css'; 
import ExperienceDetail from '../experience_detail/experience_detail';

function ExperienceOptions(props) {

    const options = props.options; 

    const [isSelected, setSelected] = useState(new Array(options.length).fill(true)); 
    const [currentData, setData] = useState(null); 
    const title_anim = useAnimation(); 
    
    const callback = (selectedIndex) => {
        if (isSelected.every((value) => value)){
            title_anim.start(title_anim_props.raised); 
            var items = new Array(options.length).fill(false); 
            items[selectedIndex] = true; 
            setSelected(items); 
            setData(options[selectedIndex]); 
        }
        else if (isSelected[selectedIndex]){
            title_anim.start(title_anim_props.default); 
            setSelected(new Array(options.length).fill(true)); 
            setData(null); 
        }
    }; 

    const title_anim_props = {
        default: {
            y: 0, 
            transition: {
                duration: 1, 
                ease: "easeInOut"
            }
        }, 
        raised: {
            y: -200, 
            transition: {
                duration: 1, 
                ease: "easeInOut"
            }
        }
    }; 
    return( <div>
        <div className={style.experienceTitle}>
            <motion.div animate={title_anim}>
                <h1>経験</h1>
            </motion.div>
            <motion.div animate={title_anim}>
                <h1 className={style.experienceTitle}>
                    Experience
                </h1>
            </motion.div>
        </div>

        {
            options.map((value, index) => 
                <ExperienceItem data={value} callback={callback} index={index+1} isSelected={isSelected[index]}/>
            )
        }
        <ExperienceDetail data={currentData}/>
    </div>); 
}
export default ExperienceOptions;