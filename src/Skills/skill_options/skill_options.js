import React from 'react'; 
import UnderliningButton from '../../general/underlining_button/underlining_button'; 

function SkillOptions(props){
    const callback = props.callback; 
    const options = props.options; 
    const selected = props.selected; 

    console.log(options); 

    const click = (option) => {

    }
    

    return (
        <div>
            <h1>Proficient in...</h1>
            {
                options.map((value) => 
                    <UnderliningButton callback={() => click(value)} value={value} isSelected={value == selected}>
                        {value}
                    </UnderliningButton>
                ) 
                
            }
        </div>
    ); 
}

export default SkillOptions; 