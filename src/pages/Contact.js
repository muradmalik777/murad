import React from 'react';
import {Grid, Box, Avatar} from '@material-ui/core';
import murad from '../assets/images/murad.jpg';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import PhoneIcon from '@material-ui/icons/Phone';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import HomeIcon from '@material-ui/icons/Home';

const Contact = () => {
    return (
        <Grid container className="contact" direction="row" justify="center" alignItems="center">
            <Grid item xs={12} sm={11} md={11} lg={8} container direction="row" justify="center" alignItems="center">
                <Box className="head" maxWidth="800px" p={3} display="flex" flexDirection="row" justify="center" alignItems="center">
                    <Avatar src={murad} className="avatar" variant="square" />
                    <h2 className="name">Muhammad Murad Malik</h2>
                </Box>
                <Box className="info" maxWidth="800px" p={3} display="flex" flexDirection="column" justify="center" alignItems="center">
                    <Box mt={2} className="address" display="flex" flexDirection="row" justify="center">
                        <HomeIcon className="address-icon"/><p>House no 353, Street 51 E11/3 Islamabad, Pakistan</p>
                    </Box>
                    <p><MailOutlineIcon className="contact-icon"/> <a className="email" href="mailto:muradmalik7@gmail.com">muradmalik7@gmail.com</a></p>
                    <p><PhoneIcon className="contact-icon"/> +923035523525</p>
                    <Box mt={2} className="box">
                        <a href="https://web.facebook.com/murad.malik1"><FacebookIcon className="social-icon" /></a>
                        <a href="https://www.instagram.com/muradmalik7/"><InstagramIcon className="social-icon" /></a>
                        <a href="https://twitter.com/murad_malik7"><TwitterIcon className="social-icon" /></a>
                        <a href="https://www.linkedin.com/in/murad-malik-13731ab6/"><LinkedInIcon className="social-icon" /></a>
                        <a href="https://github.com/muradmalik777"><GitHubIcon className="social-icon" /></a>
                    </Box>
                </Box>
            </Grid>
        </Grid>
    )
}

export default Contact;