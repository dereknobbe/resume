import React from 'react';
import './Home.css'; 
import { Button } from 'semantic-ui-react';
class About extends React.Component {
    render() {
        return( 
            <div>
                <h1 style={{textAlign: 'center'}}>Who I am</h1>
                <div>
                    <img className="picture" src={require('./profilepic.jpg')}/>
                </div>  
            </div>
        )
    }
}
export default About