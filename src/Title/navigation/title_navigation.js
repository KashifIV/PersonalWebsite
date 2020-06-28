import React, {Component} from 'react'; 
import {Button} from 'react-bootstrap'; 

class TitleNavigation extends Component{
    constructor(props){
        super(props); 
        this.callback = props.callback; 
    }

    render(){
        return(
            <div>
                <Button onClick={() => this.callback()}>
                    Next
                </Button>
            </div>
        ); 
    }
}

export default TitleNavigation; 