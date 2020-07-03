import React from 'react'; 
import {motion} from 'framer-motion'; 
import style from './title_header.module.css'; 

function TitleHeader(props){
    const name = props.name; 

    return <div>
        <motion.div className={style.headerBox} style={{backgroundColor: 'red'}}/>
    </div>
}

export default TitleHeader; 