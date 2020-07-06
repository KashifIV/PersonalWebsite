import React, {Component, useEffect} from 'react'; 
import {Button} from 'react-bootstrap'; 
import {motion, useAnimation} from 'framer-motion'; 

function TitleNavigation(props){
    const callback = props.callback; 

    const anim = useAnimation(); 
    const anim_props = {
        show: {
            opacity: 1, 
            transition: {
                duration: 1
            }
        }, 
        hide: {
            opacity: 0, 
            transition: {
                duration: 0.5
            }
        }
    }; 

    useEffect(() => {
        if (props.index == 0){
            anim.start(anim_props.hide); 
        }
        else {
            console.log("Showing"); 
            anim.start(anim_props.show); 
        }
    }, [props.index])



    return(
        <motion.div
            style={{position: "absolute", left: 0, top: 0}} 
            whileHover={{
            scale: 1.1,
            transition: { duration: 0.2 },
            }} animate={anim}
        
        >
            <Button onClick={() => callback()}>
                バック/Back
            </Button>
        </motion.div>
    ); 
}

export default TitleNavigation; 