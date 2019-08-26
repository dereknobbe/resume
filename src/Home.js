import React from 'react';
import './App.css';
import './Home.css';
import Heading from './Heading';
import About from './About';
import { Reveal } from 'semantic-ui-react';
import { Header, Icon, Image, Menu, Sidebar } from 'semantic-ui-react';
class Home extends React.Component {
    render() {
        return( 
        <div>
<Sidebar.Pushable>
    <Sidebar
      as={Menu}
      animation='overlay'
      icon='labeled'
      inverted
      vertical
      visible
      width='thin'
    >
      <Menu.Item as='a'>
        Home
      </Menu.Item>
      <Menu.Item as='a'>
        Games
      </Menu.Item>
      <Menu.Item as='a'>
        Channels
      </Menu.Item>
    </Sidebar>

    <Sidebar.Pusher>
        <Heading/>
        <Info/>
        <About />
    </Sidebar.Pusher>
  </Sidebar.Pushable>
        </div>

        )
    }
}

export default Home