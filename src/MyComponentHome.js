import React from 'react';
import {Container} from 'react-bootstrap';
import image from './portfolio.jpg'

const styles = {
    width: '100%',
    height: '100%',
    color: 'white',
    margin: '0',
    backgroundImage: 'url('+image+')',
    backgroundSize: 'contain'
      
    };

    const stylesFour = {
        width: '100%',
        height: '100%',
        color: 'grey',
        margin: '0',
        backgroundColor: 'black',
        backgroundSize: 'contain',
        padding: '20px'
          
        };




export function MyComponentHome() {


return (
    <div>
        <Container fluid style = {styles}>
        <br />
        <br />
        <h1>&lt;PROFILE: MARK GAUNT/&gt;</h1>
        <br />        
        <div style ={stylesFour}>
        <br/>
        <h5>A DipRP qualified recruitment director/manager with extensive 360 recruitment experience – mainly covering the IT and FE/work-based learning sectors.</h5>
        <br/>
        <h5>Joined The Developer Academy in Feb 2020, as a member of their newly established coding bootcamp, and the objective now is to make the transition from IT recruiter to IT developer!</h5>
        <br/>
        <h5>Coding tech stack covers: HTML, CSS, Bootstrap, Javascript, MERN Stack (React, Express, Node.JS, MongoDB, Mongoose) and some basic Python.</h5>
        <div>
        
        </div>
        </div>
        <br /> 
        <br />
        <br />
        
        </Container>      
       
      </div>
  );
}