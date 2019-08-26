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
        Introduction
      </Menu.Item>
      <Menu.Item as='a'>
      Work Experience
      </Menu.Item>
      <Menu.Item as='a'>
        Projects
      </Menu.Item>
      <Menu.Item as='a'>
        Who I Am
      </Menu.Item>
    </Sidebar>

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