import React from 'react';
import {Container} from 'react-bootstrap';



const styles = {
    width: '100%',
    height: '100%',
    color: 'white',
    margin: '0',
    backgroundColor: 'black',
    backgroundSize: 'contain'
      
    };


    



export function MyComponentCVSelect() {




return (
    <div>
    <Container fluid style = {styles}>
    <br />
    <br />
    <div>        
    <h5>CURRICULUM VITAE - Mark Gaunt DipRP</h5>
    <br />
    <p>A DipRP qualified recruitment director/manager with extensive 360 recruitment experience – mainly covering the IT and FE/work-based learning sectors.Joined The Developer Academy in Feb 2020, as a member of their newly established coding bootcamp, and the objective now is to make the transition from IT recruiter to IT developer! Coding tech stack covers: HTML, CSS, Bootstrap, Javascript, MERN Stack (React, Express, Node.JS, MongoDB, Mongoose) and some basic Python.</p>
    </div>
    <div>
    <h5>Personal Details</h5>
    <br/>
    <p>Name:</p>
    <p>Mark Leslie Gaunt</p>
    <p>Address:</p>
    <p>5 St Andrews Close</p>
    <p>Rodley</p>
    <p>Leeds</p>
    <p>LS13 1JE</p>
    <br/>
    <p><a href = "mailto: marklgaunt@googlemail.com">Send me an email</a></p>
    <p><a href="url">Check out my Linkedin profile</a></p>
    <p>Car driver/owner</p>
    <br/>

    </div>

    <br />
    <br /> 
    </Container>      
   
  </div>
  );
}