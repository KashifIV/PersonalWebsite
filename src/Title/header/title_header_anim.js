const outer_anim_props = {
    x: -(window.innerWidth/12 - 10), 
    opacity: 1, 
    transition: {
        duration: 1, 
        ease: "easeInOut"
    }
}; 
const inner_anim_props = {
    x:0, 
    opacity: 1, 
    transition: {
        duration: 1, 
        ease: "easeInOut"
    }
};
const hide_props = {
    y: -200, 
    opacity: 0, 
    transition: {
        duration: 1, 
        ease: "easeInOut"
    }
}; 

export {outer_anim_props, inner_anim_props, hide_props}; 