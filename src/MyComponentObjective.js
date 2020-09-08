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

    const stylesThree = {
      width: '100%',
      height: '100%',
      color: 'grey',
      margin: '0',
      backgroundColor: 'black',
      backgroundSize: 'contain',
      padding: '20px'
        
      };




export function MyComponentObjective() {


return (
    <div>
    <Container fluid style = {styles}>
    <br />
    <br />
    <h1>&lt;OBJECTIVE/&gt;</h1>
    <br />  
    <div style ={stylesThree}>   
    <br/>   
    <h5>After spending many years working in the recruitment industry, my objective is to now change career direction and obtain a Junior Developer position.</h5>
    <br/>
    <h5>This has been an ambition held for many years, but only now – with the option of flexible learning via The Developer Academy’s online course/developer bootcamp – have I been able to put the wheels in motion.</h5>
    <br/>
    <h5>As detailed above, the course is delivered through both online assessments and three weekly group sessions (each session 3 hours long) held evenings/weekends in Sheffield (this moved fully to an online/Zoom model post March due to Covid19). Prior to signing up for this course, I had already completed some online Javascript training – but with TDA’s tutor/mentor access, I was able to take my training to the next level.</h5>
    <br /> 
    <h5>The tutors/mentors at TDA are from the industry and work with some of the region’s leading tech employers (ie Sky). They are able to teach students the skills employers really need - ie front and back-end development using Python, HTML, CSS, Bootstrap, JavaScript, MERN Stack (React, Express, Node.JS, MongoDB, Mongoose).</h5>
    <br />
    <h5>Again, my aim is to obtain a Junior Developer post – I appreciate I will need support and further mentorship/training, but I am able to be completely flexible re salary and engagement type (although, full-time perm is obviously the preferred option). Plus, I also bring with me extensive transferable skills; mainly covering recruitment management/resourcing, but also customer service, sales/business development/account management, strategic management and finance/bookkeeping – therefore, I am more than willing to offer additional/dual support in any of these areas to a potential employer!</h5>
    <br/>
    </div>
    <br />
    <br />
    <br /> 
    </Container>      
   
  </div>
  );
}