import React from 'react';
import {Grid, Box, Avatar} from '@material-ui/core';
import murad from '../assets/images/murad.jpg';

const About = () => {
    return (
        <Grid container className="about" direction="row" justify="center" alignItems="center">
            <Grid item xs={12} sm={11} md={11} lg={8} container direction="row" justify="center" alignItems="center">
                <Box className="head" maxWidth="800px" p={3} display="flex" flexDirection="row" justify="center" alignItems="center">
                    <Avatar src={murad} className="avatar" variant="square" />
                    <h2 className="name">Muhammad Murad Malik</h2>
                </Box>
                <Box className="info" maxWidth="800px" p={3} display="flex" flexDirection="column" justify="center" alignItems="center">
                    <p>
                        I am a Computer Science graduate with more than two years of 
                        development experience as a Full Stack Developer. My skill set as a Frontend Developer covers
                        ReactJS, VueJS, NextJS, Javascript, Html, CSS, Vuetify, ElementUI, Ant Design, Material Design 
                        and as a Backend Developer, I have used stacks like Php, NodeJs, Laravel/Lumen, GoLang, ExpressJS.
                        For the past two and a half year, I have been part of development team for a 
                        software firm named Hireninja which is working in collaboration with Luminary, 
                        a US based company aiming to bring a revolutionary product in the podcast industry 
                        and my role there had been mostly as a frontend developer. Apart from this, 
                        I have been working as a freelance web developer and did many projects.
                    </p>
                    <p>
                        I am hardworking, creative, responsible, collaborative and team worker. 
                        I am passionate about development and love developing websites and working with different projects.
                    </p>
                </Box>
            </Grid>
        </Grid>
    )
}

export default About;