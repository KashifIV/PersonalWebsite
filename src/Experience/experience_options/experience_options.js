import React from 'react'; 
import { motion } from 'framer-motion';
import style from './experience_options.module.css'; 

function ExperienceOptions(props) {

    const options = props.options; 
    console.log(options);
    return( <div>
        <div className={style.experienceTitle}>
            <motion.div>
                <h1>経験</h1>
            </motion.div>
            <motion.div>
                <h1 className={style.experienceTitle}>
                    Experience
                </h1>
            </motion.div>
        </div>

        {
            options.map((value) => 
                <div className={style.jobOption}>
                    <h2>{value['title']}</h2>
                    <h3>{value['company']}</h3>
                </div>
            )
        }
    </div>); 
}
export default ExperienceOptions;