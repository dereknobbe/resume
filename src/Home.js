import React from 'react';
import './App.css';
import './Home.css';
import Heading from './Heading';
import { Header } from 'semantic-ui-react'
class Home extends React.Component {
    render() {
        return( 
        <div>
                <Heading/>
                <h1 style={{textAlign: 'center'}}>Who I am</h1>
            <div>
                <img className="picture" src={require('./profilepic.jpg')}/>
                
            </div>
        </div>

        )
    }
}

export default Home