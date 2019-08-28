import React from 'react';
import './App.css';
import './Home.css';
import Heading from './Heading';
import About from './About';
import Info from './Info';
import { Menu, Sidebar, Sticky} from 'semantic-ui-react';

class Home extends React.Component {
    constructor(props) {
      super(props);
      this.state = {bigScreen: false}
      this.updatePredicate = this.updatePredicate.bind(this);
    }

    componentDidMount() {
      this.updatePredicate();
      window.addEventListener("resize", this.updatePredicate);
    }

    componentWillUnmount() {
      window.removeEventListener("resize",this.updatePredicate);
    }

    updatePredicate() {
      this.setState({bigScreen: window.innerWidth > 1000})
    }
    render() {
        return( 
        <div>
          <Sidebar.Pushable style={{transform: 'none'}}>
            {this.state.bigScreen ? (
          //<MediaQuery query="(max-device-width: 500px)">
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
              //</MediaQuery>
            ) : (<div></div>)
            }
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