import React from 'react';
import { Card } from 'semantic-ui-react';

class Projects extends React.Component {
    render() {
        return (
            <div>
            <Card centered>
                <Image src={require('./profilepic.jpg')}/>
                <Card.Content>
                    <Card.Description>
                        I am a Science Student at Purdue University in my senior year
                    </Card.Description>
                </Card.Content>
            </Card>
            </div>
            );
    }
}