import React from 'react';
import './Home.css'; 
class Info extends React.Component {
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
export default Info