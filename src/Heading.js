import React from 'react';
import logo from './logo.svg';
import './App.css';
import './Home.css';
import { Button, Icon, Popup } from 'semantic-ui-react';
class Heading extends React.Component {

    constructor(props) {
        super(props);
        this.copyToClip = this.copyToClip.bind(this);
    }

    state = {
        isOpen: false
    }
       
        handleOpen = () => {
            this.setState({isOpen: true})
            this.timeout = setTimeout(() => {
                this.setState({isOpen: false})},1000)
            }

        copyToClip = () => {
            var emailval = 'nobbe1@purdue.edu';
            var email = document.createElement('textarea');
            email.value = emailval;
            email.setAttribute('readonly','');
            //email.style = {position:'absolute', left: '-9999px'};
            document.body.appendChild(email);
            email.select();
            email.setSelectionRange(0,9999);
            document.execCommand("copy");
            document.body.removeChild(email);
        }

        render() {
        return( 
        <div className="header">
            <h1>Derek Nobbe</h1>
            <p>Developer | Innovator | Creator</p>
            <Button href="https://www.linkedin.com/in/dereknobbe/" color='linkedin'>
                <Icon name='linkedin' /> LinkedIn
            </Button>   
            <Button href="https://github.com/dereknobbe" color='github'>
                <Icon name='github' /> Github
            </Button>
            <Popup
                open={this.state.isOpen}
                onOpen={this.handleOpen}
                content='Copied to clipboard'
                on='click'
                trigger={  <Button id='emailbutton' secondary onClick={this.copyToClip}>
                <Icon name='mail outline'/>nobbe1@purdue.edu
            </Button>}
            />       
        </div>
        )
    }
}
export default Heading