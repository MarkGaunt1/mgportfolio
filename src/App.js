import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import { MyComponentHome} from './MyComponentHome';
import { MyComponentObjective} from './MyComponentObjective';
import { MyComponentCV} from './MyComponentCV';
import { MyComponentProjects} from './MyComponentProjects';
import { MyComponentContact} from './MyComponentContact';




const navStyles = {
  width: '100%',
  height: '100px',
  color: 'white',
  
  backgroundColor: 'black',
  backgroundSize: 'contain'
    
  };

  

function App() {
  return (
    <div className="App">
      <header className="App-header"><link
      rel="stylesheet"
      href="https://maxcdn.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"
      integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh"
      crossorigin="anonymous"
  />
      </header>

      <Router>
      <div>
        <nav style = {navStyles} >
          <br/>
          
            
              <Link style={{color: "white", marginRight: '15px'}} to="/">Profile</Link>
            
              <Link style={{color: "white", marginRight: '15px'}} to="/objective">Objective</Link>
            
              <Link style={{color: "white", marginRight: '15px'}} to="/curriculumvitae">Curriculum Vitae</Link>
           
              <Link style={{color: "white", marginRight: '15px'}} to="/projects">My Projects</Link>
            
              <Link style={{color: "white", marginRight: '15px'}} to="/contactme">Contact Me</Link>
            
          
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/objective">
            <MyComponentObjective/>
          </Route>
          <Route path="/curriculumvitae">
            <MyComponentCV />
          </Route>
          <Route path="/projects">
            <MyComponentProjects />
          </Route>
          <Route path="/contactme">
            <MyComponentContact />
          </Route>
          <Route path="/">
            <MyComponentHome />
          </Route>
        </Switch>
      </div>
    </Router>

    

    
        
        

    </div>
  );
}



export default App;
