import React from 'react';
import './Home.css';
import { Container } from 'semantic-ui-react';
import { Divider } from 'semantic-ui-react';
class Info extends React.Component {
    render() {
        return( 
            <Container className="info">
                <ul>About Me</ul>
                <Divider />
                <p>I am a senior studying Computer Science at Purdue University in West Lafayette, Indiana. I love solving problems and learning about the technologies that can help me
                    do that. 
                </p>
                <ul>Education</ul>
                <Divider />
                <p>Purdue's rigourous education has definitely been a challenge, but I am thankful for the amount of knowledge my wonderful professors have shared with me. Throughout my time here
                    I have taken courses in the following areas
                </p>
                <ul>
                    <li>Objected Oriented Programming in Java</li>
                    <li>C Programming for Engineers</li>
                    <li>Front-End Web Development</li>
                    <li>Data Structures and Algorithms</li>
                    <li>Computer Architechture</li>
                    <li>Discrete Mathematics for Computer Science</li>
                    <li>Systems Programming in a Linux environment</li>
                </ul>
                <p>Currently, I'm taking courses in software testing and operating systems</p>
                <ul>About Me</ul>
                <Divider />
                <p>I am a senior studying Computer Science at Purdue University in West Lafayette, Indiana. I love solving problems and learning about the technologies that can help me
                    do that. My favorite solution stacks right now are Java, C, and React. 
                </p>
            </Container>
        )
    }
}
export default Info