import React,{useState} from 'react';
import {Container} from 'react-bootstrap';
import {Dropdown} from 'react-bootstrap';
import {Button} from 'react-bootstrap';
import {Card} from 'react-bootstrap';
import image from './portfolio.jpg';
import imageTwo from './icecream2.jpg';
import imageThree from './peterkay.jpg';
import imageFour from './jboard4.jpg';








const styles = {
    width: '100%',
    height: '1600px',
    color: 'white',
    margin: '0',
    backgroundImage: 'url('+image+')',
    backgroundSize: 'auto'
      
    };

    const stylesTwo = {
      width: '100%',
      height: '40%',
      color: 'grey',
      margin: '0',
      backgroundColor: 'black',
      backgroundSize: 'contain',
      overflowY: 'scroll',
      padding: '20px'
        
      };




export function MyComponentProjects(){



  const [projects, setProjects] = useState();
  const handleSelect = () => setProjects(myProjects)

 
  function refreshPage() {
    window.location.reload(false);
  }
  

  function myProjects() {
    return <div style ={stylesTwo}>
    <br/>
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>         
    <Card style={{ color: 'white', backgroundImage: 'url('+imageFour+')', width: '90%' }}>
  <Card.Img  />
  <Card.Body>
    <Card.Title>Job Board App</Card.Title>
    <Card.Text>
      A Front and Back End CRUD app built using the MERN stack. Allows the user to post, update, view and delete multi-field vacancies.
    </Card.Text>
    <Button variant="primary" href="https://jbfrontend.herokuapp.com/" target="_blank">Visit App!</Button>
  </Card.Body>
</Card>
    </div> 
    <br/>
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>         
    <Card style={{ color: 'black', fontWeight: 'bold', backgroundImage: 'url('+imageTwo+')',width: '90%' }}>
  <Card.Img  />
  <Card.Body>
    <Card.Title>Inventory (Icecream Co) App</Card.Title>
    <Card.Text>
        Another Front and Back End CRUD app built using the MERN stack. Allows the user to add, update, view and delete stock for a fictitious icecream company. Also included is a pop-up alert to warn the user if stock drops under a certain number.
    </Card.Text>
    <Button variant="primary" href="https://iceinventory76.herokuapp.com/" target="_blank">Visit App!</Button>
  </Card.Body>
</Card>
    </div> 
    <br/>
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>         
    <Card style={{ color: 'white', backgroundImage: 'url('+imageThree+')', width: '90%', backgroundSize: 'cover' }}>
  <Card.Img />
  <Card.Body>
    <Card.Title>Weather App</Card.Title>
    <Card.Text>
      Single page REST API app built (one of my first projects) using React Hooks and incorporating Fetch, useState and useEffect. Fetching JSON weather data for three cities: Leeds, Manchester and London.
    </Card.Text>
    <Button variant="primary" href="https://isitspitting.herokuapp.com/" target="_blank">Visit App!</Button>
  </Card.Body>
</Card>
    </div> 
    <br/>
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>         
    <Card style={{ color: 'white', backgroundImage: 'url('+image+')', width: '90%' }}>
  <Card.Img  />
  <Card.Body>
    <Card.Title>Portfolio App!</Card.Title>
    <Card.Text>
      You're in it now! Built using React Hooks (with the addition of react-router for multi-pages) and incorporating useState.
    </Card.Text>
    <Button variant="primary" href="https://intense-cliffs-12035.herokuapp.com/" target="_blank">Visit App (lol)!</Button>
  </Card.Body>
</Card>
    </div> 
    <br/>
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
  <h1>&lt;My Projects/&gt;</h1>
  <br />      
  <h5>Please click below to find info and links to a selection of my current live React apps:</h5>  
  <br/>
  <Dropdown>
    <Dropdown.Toggle variant="success" id="dropdown-basic">
      Projects
    </Dropdown.Toggle> 
    <Dropdown.Menu>
      <Dropdown.Item href="#/action-1" onSelect={handleSelect} >View Projects</Dropdown.Item>
      <Dropdown.Item href="#/action-3" onClick={refreshPage}>Close Window</Dropdown.Item>
    </Dropdown.Menu>
  </Dropdown>
  <br/>
  
 
  {projects}
  

  
  
  </Container>      
  



</div>
  );
}