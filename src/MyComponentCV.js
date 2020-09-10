import React,{useState} from 'react';
import {Container} from 'react-bootstrap';
import {Dropdown} from 'react-bootstrap';
import {Button} from 'react-bootstrap';
import image from './portfolio.jpg';



const styles = {
    width: '100%',
    height: '1600px',
    color: 'white',
    margin: '0',
    backgroundImage: 'url('+image+')',
    backgroundSize: 'contain'
      
    };

    const stylesTwo = {
      width: '100%',
      height: '800px',
      color: 'grey',
      margin: '0',
      backgroundColor: 'black',
      backgroundSize: 'contain',
      overflowY: 'scroll',
      padding: '20px'
        
      };




export function MyComponentCV(){



  const [personal, setPersonal] = useState();
  const handleSelect = () => setPersonal(personalDetails)

  const [education, setEducation] = useState();
  const handleSelect2 = () => setEducation(educationInfo)

 
  const [employment, setEmployment] = useState();
  const handleSelect3 = () => setEmployment(myEmploy)

 
  
  function refreshPage() {
    window.location.reload(false);
  }
  

  function personalDetails() {
    return <div style ={stylesTwo}>
    <br/>
    <div>        
    <h5>CURRICULUM VITAE - Mark Gaunt DipRP</h5>
    <br />
    <p>A DipRP qualified recruitment director/manager with extensive 360 recruitment experience – mainly covering the IT and FE/work-based learning sectors.Joined The Developer Academy in Feb 2020, as a member of their newly established coding bootcamp, and the objective now is to make the transition from IT recruiter to IT developer! Coding tech stack covers: HTML, CSS, Bootstrap, Javascript, MERN Stack (React, Express, Node.JS, MongoDB, Mongoose) and some basic Python.</p>
    </div>
    <div>
    <h5>Personal Details</h5>
    <p>Name:<br/>Mark Leslie Gaunt</p>
    <p>Address:<br/>5 St Andrews Close<br/>Rodley<br/>Leeds<br/>LS13 1JE</p>
    <p><a href = "mailto: marklgaunt@googlemail.com">Email me</a></p>
    <p><a href="https://www.linkedin.com/in/mark-gaunt/">Connect on Linkedin</a></p>
    <p>Car driver/owner</p>
    </div> 
    <br/>
    <div>
      <Button variant="success" onClick={refreshPage}>Close Window</Button>
    </div>
    </div>
  }
 
  function educationInfo() {
    return <div style ={stylesTwo}>
    <br/>
    <div>        
    <h5>Education/Training</h5>
    <p>9 GCSEs:<br/>3 A'Levels</p>
    <p>Telesales Course (Yorkshire Post Training) - Introduction to Computing (CLAIT) - Diploma in Recruitment Practice (REC) - Level 2 ITQ (Bradford College) - Level 2 Equality & Diversity (Learning@Work) - Sage 50 Accounts - Sage Instant Accounts - Sage Bookkeeping Stage 1 - Sage Bookkeeping Stage 2 </p>
    <p>Introduction to Javascript: Drawing & Animation (online via Khan Academy, Sep 2019)</p>
    <p>Feb 2020 - Date<br/>Developer Course/Bootcamp, The Developer Academy, Sheffield<br/>Ongoing<br/><br/>
    This course is a split between a developer bootcamp and online course/assessment – allowing students the flexibility to study coding part-time/ad-hoc around their current employment/life commitments. Face to face mentorship/tuition is delivered via three – three hourly - sessions per week (Tuesday/Wednesday evenings and Saturday mornings) and online assessment via The Developer Academy’s own bespoke modules on the Repl.it learning portal.<br/><br/>
    The programme covers: Programming Foundations; Programming Fundamentals; Frontend Development; Backend Development; Final Projects<br/><br/>
    Technical: Python; HTML; CSS; Bootstrap; JavaScript; MERN Stack (React, Express, Node.JS, MongoDB, Mongoose)<br/><br/>
    This is not an accredited course, but instead tailored to create work-ready graduates skilled in the technical expertise employers are actually seeking.</p>
    </div>
    <br/>
    <div>
      <Button variant="success" onClick={refreshPage}>Close Window</Button>
    </div>
    </div>
  }
 

  
  function myEmploy() {
    return <div style ={stylesTwo}>
    <h5>Employment</h5>
    <br/>
    <div style={{textAlign: "left"}}>
    <p>June 06 - Date<br/>Strawberry Recruitment Solutions Ltd</p>
    <p>Strawberry Recruitment provides a UK wide recruitment service helping our clients and candidates to find the best solution for them.</p>
    <p>Our recruitment service mainly focuses on the following key sectors:</p>
    <p>IT/Digital<br/>Adult Education and Skills<br/>Executive Search<br/>Finance</p>
    <p>I have been responsible for the strategic management of a recruitment team, consisting of a Senior Recruitment Consultant and a number of Recruitment Consultants and Resourcers. My main duties and responsibilities have included:<br/>To drive KPIs and sales in order to achieve business objectives/targets.<br/>
    Ability to manage operations within budgetary constraints.<br/>
    Creating, managing and analyzing performance data and other information.<br/>
    Recruit staff, oversee their induction, appraisals and trainings.<br/>
    Meeting with clients to discuss potential recruitment needs and negotiating rates, contracts etc.<br/>
    Sourcing suitable candidates for client vacancies using a variety of different sources – internet job boards, company website, newspaper advertising and conferences/exhibitions.<br/>
    Thorough screening of candidates to ascertain suitability.<br/>
    Arranging candidate interviews and discussing offers of employment, rejections, etc.<br/>
    Selecting different advertising media, negotiating advertising costs, designing advertising copy and job board maintenance.<br/></p>
    </div>
    
    <div>
      <Button variant="success" onClick={refreshPage}>Close Window</Button>
    </div>

    </div>
  }

    
   

return (
  <div>
  <Container fluid style = {styles}>
  <br />
  <br />
  <h1>&lt;Curriculum Vitae/&gt;</h1>
  <br />      
  <h5>Please click below for CV section:</h5>  
  <br/>
  <Dropdown>
    <Dropdown.Toggle variant="success" id="dropdown-basic">
      CV Section
    </Dropdown.Toggle> 
    <Dropdown.Menu>
      <Dropdown.Item href="#/action-1" onSelect={handleSelect} >Personal Details</Dropdown.Item>
      <Dropdown.Item href="#/action-2" onSelect={handleSelect2} >Education/Training</Dropdown.Item>
      <Dropdown.Item href="#/action-3" onSelect={handleSelect3} >Employment</Dropdown.Item>
      <Dropdown.Item href="#/action-3" onClick={refreshPage}>Close Window</Dropdown.Item>
    </Dropdown.Menu>
  </Dropdown>
  <br/>
  
  {personal} {education} {employment}

  
  
  </Container>      
  



</div>
  );
}