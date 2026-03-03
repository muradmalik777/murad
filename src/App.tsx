import React, { useEffect } from "react";
import Sidebar from "./components/Sidebar/Sidebar";
import MobileMenu from "./components/MobileMenu/MobileMenu";
import { Grid, useMediaQuery, useTheme } from "@material-ui/core";
import { BrowserRouter as Router, Route, Navigate, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Experience from "./pages/Experience";
import Projects from "./pages/Projects";
import About from "./pages/About";

const App: React.FC = () => {
  const theme = useTheme();
  const isSmUp = useMediaQuery(theme.breakpoints.up("sm"));

  useEffect(() => {
    document.title = "Murad | Portfolio";
  });

  return (
    <Router>
      <Grid container className='app'>
        {!isSmUp && (
          <Grid item xs={12}>
            <MobileMenu />
          </Grid>
        )}
        {isSmUp && (
          <Grid item xs={12} sm={3} md={3} lg={3}>
            <Sidebar />
          </Grid>
        )}
        <Grid item xs={12} sm={9} md={9} lg={9}>
          <Routes>
            <Route path={"/murad/"} element={<Home />} />
            <Route path={"/"} element={<Navigate to='/murad' />} />
            <Route path={"/murad/about"} element={<About />} />
            <Route path={"/murad/contact"} element={<Contact />} />
            <Route path={"/murad/experience"} element={<Experience />} />
            <Route path={"/murad/projects"} element={<Projects />} />
          </Routes>
        </Grid>
      </Grid>
    </Router>
  );
};

export default App;
