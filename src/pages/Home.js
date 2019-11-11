import React from 'react';
import {Grid, Button, Box} from '@material-ui/core';
import murad from '../assets/images/murad.jpg';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import FacebookIcon from '@material-ui/icons/Facebook';

const Home = () => {
    
    const showResume = () => {
        window.location.replace('https://drive.google.com/file/d/1L-t8pJ6OGCnc3q12NtG8Hwj90Tp52cfQ/view?usp=sharing')
    }

    return (
        <Grid container className="home" direction="row" justify="center">
            <Grid item xs={12} sm={12} md={6} lg={5} container direction="row" justify="center" alignItems="center">
                <img alt="Murad Malik" src={murad} className="murad"/>
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={5} className="info" container direction="column" justify="center" alignItems="flex-start">
                <h1 className="name">Muhammad Murad Malik</h1>
                <h2 className="degree">Software Engineer</h2>
                <Button onClick={showResume} variant="outlined" color="primary" size="large" className="resume-btn">Resume</Button>
                <Box mt={2} className="box">
                    <a href="https://www.linkedin.com/in/murad-malik-13731ab6/"><LinkedInIcon className="social-icon" /></a>
                    <a href="https://github.com/muradmalik777"><GitHubIcon className="social-icon" /></a>
                    <a href="https://web.facebook.com/murad.malik1"><FacebookIcon className="social-icon" /></a>
                </Box>
            </Grid>
        </Grid>
    )
}

export default Home;