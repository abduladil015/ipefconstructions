import React from 'react';
import { Route, Switch ,BrowserRouter } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Projects from './Projects';
import ProjectView1 from './ProjectView1';
import ProjectView2 from './ProjectView2';
import ProjectView3 from './ProjectView3';
import ProjectView4 from './ProjectView4';
import Services from './Services';
import Contact from './Contact';
import Login from './Login';
import Quote from './Quote';



const Routes = () => {
  return (
    <BrowserRouter>
               
      <Switch>
        <Route exact path="/" >
        <Home/>
        </Route>

        <Route exact path="/About" >
        <About/>
        </Route>

        <Route exact path="/Projects">
        <Projects/>
        </Route>

        <Route exact path="/ProjectView1">
        <ProjectView1/>
        </Route>

        <Route exact path="/ProjectView2">
        <ProjectView2/>
        </Route>

        <Route exact path="/ProjectView3">
        <ProjectView3/>
        </Route>

        <Route exact path="/ProjectView4">
        <ProjectView4/>
        </Route>

        <Route exact path="/Services">
        <Services/>
        </Route>

        <Route exact path="/Contact" >
        <Contact/>
        </Route>

        <Route exact path="/Login" >
        <Login />
        </Route>

        <Route exact path="/Quote" >
        <Quote />
        </Route>

        <Route exact path="*">
          <div>No Match</div>
        </Route>
        
      </Switch>
    </BrowserRouter>
  );
};


export default Routes;