import React from 'react';
import logo from './logo.svg';
import './App.css';
import './Home.css';
import { Button, Icon } from 'semantic-ui-react';
class Heading extends React.Component {
    render() {
        return( 
        <div className="header">
            <h1>Derek Nobbe</h1>
            <p>Developer | Innovator | Creator</p>
            <Button color='linkedin'>
                <Icon name='linkedin' /> LinkedIn
            </Button>   
            <Button color='github'>
                <Icon name='github' /> Github
            </Button>   
            <Button secondary>
                <Icon name='mail outline' /> Email Me
            </Button>           
        </div>
        )
    }
}
export default Heading