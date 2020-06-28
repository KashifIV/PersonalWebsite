import React from 'react'; 
import style from './title_name.module.css'; 

class TitleName extends React.Component{

    render(){
        return <div>
            <h1 className={style.title}>
                Overpass
            </h1>
        </div>
    }
}

export default TitleName; 