import React, {useEffect} from 'react';
import Sidebar from './components/Sidebar/Sidebar';
import MobileMenu from './components/MobileMenu/MobileMenu';
import {Grid, Hidden} from '@material-ui/core';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Experience from './pages/Experience';
import Projects from './pages/Projects';
import About from './pages/About';

const App = () => {

  useEffect(() => {
    document.title = "Murad | Portfolio"
  })

  return (
    <Router>
      <Grid container className="app">
        <Hidden smUp>
          <Grid item xs={12} p={2}>
              <MobileMenu />
          </Grid>
        </Hidden>
        <Hidden xsDown>
          <Grid item xs={12} sm={3} md={3} lg={3}>
            <Sidebar />
          </Grid>
        </Hidden>
        <Grid item xs={12} sm={9} md={9} lg={9}>
          <Switch>
            <Route exact path={'/murad/'}> <Home /> </Route>
            <Route exact path={'/'}> <Home /> </Route>
            <Route path={'/about'}> <About /> </Route>
            <Route path={'/contact'}> <Contact /> </Route>
            <Route path={'/experience'}> <Experience /> </Route>
            <Route path={'/projects'}> <Projects /> </Route>
          </Switch>
        </Grid>
      </Grid>
    </Router>
  );
}

export default App;
