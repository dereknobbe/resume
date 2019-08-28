import React from 'react';
import './App.css';
import './Home.css';
import Heading from './Heading';
import About from './About';
import Info from './Info';
import { Divider } from 'semantic-ui-react';
import { Header, Icon, Image, Menu, Sidebar, Sticky} from 'semantic-ui-react';
class Home extends React.Component {
    render() {
        return( 
        <div>
<Sidebar.Pushable style={{transform: 'none'}}>
<Sticky >
    <Sidebar
      as={Menu}
      animation='overlay'
      icon='labeled'
      inverted
      vertical
      visible
      width='thin'
    >
      <Menu.Item as='a' onClick={() => document.getElementById("intro").scrollIntoView(true)}>
        Introduction
      </Menu.Item>
      <Menu.Item as='a' onClick={() => document.getElementById("work").scrollIntoView(true)}>
      Work Experience
      </Menu.Item>
      <Menu.Item as='a' onClick={() => document.getElementById("projects").scrollIntoView(true)}>
        Projects
      </Menu.Item>
      <Menu.Item as='a' onClick={() => document.getElementById("whoiam").scrollIntoView(true)}>
        Who I Am
      </Menu.Item>
    </Sidebar>
    </Sticky>

    <Sidebar.Pusher>
        <Heading/>
        <Info/>
        <About />
    </Sidebar.Pusher>
    
  </Sidebar.Pushable>
        </div>

        );
    }
}

export default Home