import React from 'react'; 
import UnderliningButton from '../../general/underlining_button/underlining_button'; 
import {Container, Row, Col} from 'react-bootstrap'; 
import style from './skill_options.module.css'

import {motion, useAnimation} from 'framer-motion'; 
function SkillOptions(props){
    const callback = props.callback; 
    const options = props.options; 
    const selected = props.selected; 


    const click = (option) => {
        callback(option); 
    }
    
    const title_animation = useAnimation(); 
    const jap_animation = useAnimation(); 

    const general_anim_props = {
        x: 0, 
        opacity: 1, 
        transition: {
            duration: 0.6, 
            ease: "easeInOut"
        }
    }
    title_animation.start(general_anim_props); 
    setTimeout(() => jap_animation.start(general_anim_props), 500); 

    return (
        <div className={style.skillOptions}>
            <motion.div className={style.skillsTitle} animate={jap_animation} style={{x: 200, opacity: 0}}>
                <h1>手まめ</h1>
            </motion.div>
            <motion.div animate={title_animation} style={{x: 200, opacity: 0}}>
                <h1 className={style.skillsTitle}>Proficient in...</h1>
            </motion.div>
            <Container>
                <Row>
                    {options.map((value) => 
                        <Col>
                            <UnderliningButton callback={() => click(value)} value={value} isSelected={value == selected}>
                                {value}
                            </UnderliningButton>
                        </Col>
                    ) }
                </Row>
            </Container>
     
        </div>
    ); 
}

export default SkillOptions; 