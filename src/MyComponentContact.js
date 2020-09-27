import React from 'react';
import {Container} from 'react-bootstrap';
import image from './portfolio.jpg'

const styles = {
    width: '100%',
    height: '1000px',
    color: 'white',
    margin: '0',
    backgroundImage: 'url('+image+')',
    backgroundSize: 'auto'
      
    };

    const stylesFour = {
        width: '100%',
        height: '60%',
        color: 'grey',
        margin: '0',
        backgroundColor: 'black',
        backgroundSize: 'contain',
        padding: '20px'
          
        };




export function MyComponentContact() {


return (
    <div>
        <Container fluid style = {styles}>
        <br />
        <br />
        <h1>&lt;CONTACT ME/&gt;</h1>
        <br />        
        <div style ={stylesFour}>
        <br/>
        <h5>Name:<br/>Mark Leslie Gaunt</h5>
        <h5>Address:<br/>5 St Andrews Close<br/>Rodley<br/>Leeds<br/>LS13 1JE</h5>
        <h5><a href = "mailto: marklgaunt@googlemail.com">Email me</a></h5>
        <h5><a href="https://www.linkedin.com/in/mark-gaunt/">Connect on Linkedin</a></h5>
        
        </div>
        
        
        <br /> 
        <br />
        <br />
        
        </Container>      
       
      </div>
  );
}