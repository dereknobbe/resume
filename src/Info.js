import React from 'react';
import './Home.css';
import Projects from './Projects.js'
import { Container } from 'semantic-ui-react';
import { Divider } from 'semantic-ui-react';
import { Image } from 'semantic-ui-react';
class Info extends React.Component {
    render() {
        return( 
            <Container className="info">
                <ul id="intro">About Me</ul>
                <Divider />
                <p>I am a senior studying Computer Science at Purdue University in West Lafayette, Indiana. I love solving problems and learning about the technologies that can help me
                    do that. 
                </p>
                
                <ul style={{marginTop: '100px'}}>Education</ul>
                <Divider />
                <p>Purdue's rigourous education has definitely been a challenge, but I am thankful for the amount of knowledge my wonderful professors have shared with me. Throughout my time here
                    I have taken courses in the following areas:
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
                <Image.Group size='large'>
                    <Image src={require('./_MG_9885.jpg')} size='small' />
                    <Image src={require('./_AH36048.jpg')} size='small' />
                    <Image src={require('./aerial 4.jpg')} size='small' />
                    <Image src={require('./aerial1.jpg')} size='small' />
                </Image.Group> 
               <p style={{textAlign: 'center'}}>I'm going to miss this place</p>
                <p style={{fontSize: 12}}>Photos courtesy of Purdue Marketing</p>
                <ul id="work" style={{marginTop: 100}}>Work Experience</ul>
                 <Divider />
                <h3>I have been lucky enough to work at two companies during my time as a student.</h3>
                <p>In the Summer of 2019 I worked for Fast Enterprises in Little Rock, Arkansas. 
                    At Fast, I was an implementation consultant. I had the opportunity to consult 
                    with Arkansas Department of Finance and Administration staff. After executing 
                    meetings and maintaining a one-to-one developer to client relationship, I worked 
                    to implement the software updates they required.  
                </p>
                <Image.Group size='large'>
                    <Image src={require('./ezgif.com-gif-maker.jpg')} size='small' />
                    <Image src={require('./Arkansas_State_Capitol.jpg')} size='small' />
                </Image.Group> 
                <p style={{fontSize: 14}}>I recieved the Arkansas Traveler certificate. An award that gives "special recognition 
                    to out-of-state visitors who have contributed to the progress, enjoyment or well-being 
                    of the State of Arkansas or to her people." Pictured on the right is the Capitol building. I loved
                    seeing this every day walking into work. Photo Courtesy of Daniel Schwen, Wikipedia.org
                </p>
                <p style={{marginTop: 30}}>
                    In the Fall semester of 2017, I worked as a Process Engineer at an Agricultural Chemical Company
                    called Nufarm. At this point in my college career I was still studying Mechanical Engineering. 
                    I'm thankful for Nufarm - although I switched majors soon after my time with them, it was there
                    that I started my first steps into software. I worked on automating some productivity processes
                    with Visual Basic for Applications and immediately fell in love with the problem solving skills 
                    software development can teach you. 
                </p>

                <ul id="projects" style={{marginTop: 100}}>Projects</ul>
                <Divider />
                <Projects/>                
            </Container>
        );
    }
}
export default Info