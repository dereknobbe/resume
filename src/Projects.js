import React from 'react';
import { Card, Image, Modal, Button, Container } from 'semantic-ui-react';

class Projects extends React.Component {
    render() {
        return (
            <div>
            <Card.Group>
                <Card centered>
                    <Image src={require('./officium.png')}/>
                        <Card.Content>
                            <Card.Description>
                                <p style={{textAlign: 'center'}}>Job Tracker</p>
                                <Modal trigger={<Button style={{display: 'block', margin: '0 auto'}}color='primary'>Officium</Button>}>
                                    <Container>
                                    <Image src={require('./officium123.png')}/>
                                        <div className='modalheaders'>
                                            <h1>Officium</h1>
                                            <h3><a href="https://officium-app.firebaseapp.com">https://officium-app.firebaseapp.com</a></h3>
                                            <p style={{fontSize: 18}}>
                                                Officium is a web application I made with a team last year. Its goal is to simplify applying for jobs. It allows a user to 
                                                enter each job they apply for and track their status. Furthermore, it gives detailed information about the location of 
                                                each job and includes a comparison page where a user can see a side by side comparison of different jobs based on certain
                                                metrics. It includes email functionality to remind users to follow up on applications
                                                that haven't had a response. I was on the front end team for this project. We built it using React paired with a handy 
                                                styling library called Material UI on the front end and used firebase for our back end. We used some cool APIs to track job
                                                locations and data It is currently hosted and you can
                                                see it by visiting the link above!
                                            </p>
                                        </div>                                        
                                    </Container>
                                </Modal>
                            </Card.Description>
                    </Card.Content>
                </Card>
                <Card centered>
                    <Image src={require('./profilepic.jpg')}/>
                        <Card.Content>
                            <Card.Description>
                            <p style={{textAlign: 'center'}}>Social Media Platform</p>
                            <Modal trigger={<Button style={{display: 'block', margin: '0 auto'}}color='primary'>Travel Talk</Button>}>
                                <Container>
                                        <div className='modalheaders'>
                                            <h1>Travel Talk</h1>
                                            <p style={{fontSize: 18}}>
                                                Travel Talk is a web based social media platform I made with a team last year. It allows users to log their travels
                                                on an interactive map we linked through an API. Most of my work on this project was iimplementing a friends feature
                                                that allows users to search for and add other users to their friend's list. When a user is friends with another, 
                                                they can see where their friends have been and what they had to say about each location.
                                            </p>
                                        </div>                                        
                                    </Container>
                            </Modal>
                            </Card.Description>
                    </Card.Content>
                </Card>
                <Card centered>
                    <Image src={require('./muthur.png')}/>
                        <Card.Content>
                            <Card.Description>
                            <p style={{textAlign: 'center'}}>Replacement for Bash</p>
                            <Modal trigger={<Button style={{display: 'block', margin: '0 auto'}}color='primary'>Custom Linux Shell</Button>}>
                            <Container>
                                <Image src={require('./muthur.png')}/>
                                        <div className='modalheaders'>
                                            <h1>Custom Linux Shell</h1>
                                            <p style={{fontSize: 18}}>
                                                In my systems programming class I made a custom linux shell. It had most of the functionality of bash
                                                and taught me some valuable low level programming skills. My shell implemented piping, system calls,
                                                recursive directory searching, and subshells. It was written in C++ and utilized lex and yacc for parsing
                                                and lexical analysis.  
                                            </p>
                                        </div>                                        
                                    </Container>
                            </Modal>
                            </Card.Description>
                    </Card.Content>
                </Card>
                <Card centered>
                    <Image src={require('./webserver.png')}/>
                        <Card.Content>
                            <Card.Description>
                            <p style={{textAlign: 'center'}}>C/C++ Server</p>
                            <Modal trigger={<Button style={{display: 'block', margin: '0 auto'}}color='primary'>Web Server</Button>}>
                                <Container>
                                    <Image src={require('./webserverterminal.png')}/>
                                        <div className='modalheaders'>
                                            <h1>Web Server</h1>
                                            <p style={{fontSize: 18}}>
                                                A web server written in C/C++. It allows custom choice on the server side for ports.
                                                Additionally, it allows for multithreading and multiple processes. This was a great 
                                                project as it allowed me to dive into the world of HTTP. 
                                            </p>
                                        </div>                                        
                                </Container>
                            </Modal>
                            </Card.Description>
                    </Card.Content>
                </Card>
                <Card centered>
                    <Image src={require('./vrproject.png')}/>
                        <Card.Content>
                            <Card.Description>
                                <p style={{textAlign: 'center'}}>Unity 3D project</p>
                                <Modal trigger={<Button style={{display: 'block', margin: '0 auto'}} color='primary'>VR Project</Button>}>
                                <Container>
                                        <div className='modalheaders'>
                                        <Image className='middlepic' src={require('./vrproject.png')}/>
                                            <h1>Unity 3D VR</h1>
                                            <h3><a href="https://www.youtube.com/watch?v=t-LX4aD1c_I&feature=youtu.be">Youtube Link</a></h3>
                                            <p style={{fontSize: 18}}>
                                                A game made in Unity 3D using c# scripting and a Vive virtual reality headset. The game allows full 
                                                use of hand mechanisms and the vive headset as a camera.
                                            </p>
                                        </div>                                        
                                </Container>
                                </Modal>
                            </Card.Description>
                    </Card.Content>
                </Card>

                <Card centered>
                    <Image src={require('./phibetakappa.png')}/>
                        <Card.Content>
                            <Card.Description>
                                <p style={{textAlign: 'center'}}>Phi Beta Kappa</p>
                                <Modal trigger={<Button style={{display: 'block', margin: '0 auto'}} color='primary'>Phi Beta Kappa Website</Button>}>
                                <Container>
                                        <div className='modalheaders'>
                                        <Image className='middlepic' src={require('./phibetakappa.png')}/>
                                            <h1>Phi Beta Kappa</h1>
                                            <p style={{fontSize: 18}}>
                                            A website I made for Purdue honor society Phi Beta Kappa. Unfortunately it is no longer live, but it included a basic about section,
                                            a list of past members, and an embedded calendar they could use to schedule events.    
                                            </p>
                                        </div>                                        
                                </Container>
                                </Modal>
                            </Card.Description>
                    </Card.Content>
                </Card>
            </Card.Group>
            </div>
            );
    }
}

export default Projects