import React from 'react';
import './Home.css'; 
import { Container, Image } from 'semantic-ui-react';
class About extends React.Component {
    render() {
        return( 
            <div className='whoiam'>
                <h1 id="whoiam" style={{textAlign: 'center'}}>Who I am</h1>
                <div>
                <Container>
                <Image.Group size='large'>
                <Image src={require('./skiself.JPG')} size='small' />
                    <Image src={require('./profilepic.jpg')} size='small' />
                    <Image src={require('./arkboys.JPEG')} size='small' />
                    <Image src={require('./skitop.JPG')} size='small' />
                </Image.Group> 
                    <p style={{fontSize: 24, marginTop: 60}}>
                        I'm from a small town in Southeast Indiana. I enjoyed growing up there but I am excited to see where the next chapter of my life takes me.
                        In addition to learning new programming technologies and tools, I also love running, playing euchre with my friends, skiing, and playing guitar.       
                    </p>
                </Container>
                </div>  
            </div>
        );
    }
}
export default About