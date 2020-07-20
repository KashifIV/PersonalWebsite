import React from 'react'; 
import TitleNavigation from '../Title/navigation/title_navigation'; 
import ExperienceOptions from './experience_options/experience_options'; 
import data from '../data/experience.json'; 

function Experience(props){

    const callback = props.callback; 
    const options = data['experience'].map((value) => {return {'title': value['Title'], 'company':value['Company']}})


    const back = () => {
        callback('station'); 
    }

    return <div>
        <TitleNavigation callback={back}/>
        <ExperienceOptions options={options}/>
    </div>
}

export default Experience; 