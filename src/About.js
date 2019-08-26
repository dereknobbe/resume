import React from 'react';
import './Home.css'; 
import { Card } from 'semantic-ui-react'
class About extends React.Component {
    render() {
        return( 
            <div>
                  <Card>
    <Image src='https://react.semantic-ui.com/images/avatar/large/matthew.png' wrapped ui={false} />
    <Card.Content>
      <Card.Header>Matthew</Card.Header>
      <Card.Meta>
        <span className='date'>Joined in 2015</span>
      </Card.Meta>
      <Card.Description>
        Matthew is a musician living in Nashville.
      </Card.Description>
    </Card.Content>
    <Card.Content extra>
      <a>
        <Icon name='user' />
        22 Friends
      </a>
    </Card.Content>
  </Card>
                <h1 style={{textAlign: 'center'}}>Who I am</h1>
                <div>
                    <img className="picture" src={require('./profilepic.jpg')}/>
                </div>  
            </div>
        )
    }
}
export default About