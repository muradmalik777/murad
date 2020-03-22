import React from 'react';
import {Grid, Button, Box} from '@material-ui/core';
import murad from '../assets/images/murad.jpg';
import stof from '../assets/images/stack-overflow.svg';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';

const Home = () => {

    return (
        <Grid container className="home" direction="row" justify="center">
            <Grid item xs={12} sm={12} md={6} lg={5} container direction="row" justify="center" alignItems="center">
                <img src={murad} className="murad" alt="Murad Malik"/>
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={5} className="info" container direction="column" justify="center" alignItems="flex-start">
                <h2 className="name">Muhammad Murad Malik</h2>
                <h3 className="degree">Software Developer</h3>
                <h4 className="city">Islamabad, Pakistan</h4>
                <a href="https://drive.google.com/open?id=1fsS2OgVfQHwFwB3fAuW9QkJSl5lkvsko" rel="noopener noreferrer" target="_blank" className="resume-btn">Resume</a>
                <Box mt={2} className="box">
                    <a href="https://www.linkedin.com/in/murad-malik-13731ab6/"><LinkedInIcon className="social-icon" /></a>
                    <a href="https://github.com/muradmalik777"><GitHubIcon className="social-icon" /></a>
                    <a href="https://stackoverflow.com/users/11982443/murad-malik"><img src={stof} className="stack-icon" alt="" /></a>
                    <a href="https://web.facebook.com/murad.malik1"><FacebookIcon className="social-icon" /></a>
                    <a href="https://www.instagram.com/muradmalik7/"><InstagramIcon className="social-icon" /></a>
                    <a href="https://twitter.com/murad_malik7"><TwitterIcon className="social-icon" /></a>
                </Box>
            </Grid>
        </Grid>
    )
}

export default Home;