import React from 'react';
import { Route, Switch, useLocation,BrowserRouter } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Projects from './Projects';
import Contact from './Contact';
import Login from './Login';
import Quote from './Quote';



const Routes = () => {
  return (
    <BrowserRouter>
      
      <LocationDisplay />
               
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

export function LocationDisplay(){
  const {pathname} = useLocation();
  return <div data-testid="location-display">{pathname}</div>;
}


export default Routes;