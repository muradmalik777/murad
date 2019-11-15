import React from 'react';
import {Grid, Box} from '@material-ui/core';
import UserAvatar from '../components/UserAvatar/UserAvatar';
import stof from '../assets/images/stack-overflow.svg';
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
                <UserAvatar />
                <Box className="info" maxWidth="800px" p={3} display="flex" flexDirection="column" justify="center" alignItems="flex-start">
                    <Box mt={2} className="address" display="flex" flexDirection="row" justify="center">
                        <HomeIcon className="address-icon"/><p>House no 353, Street 51 E11/3 Islamabad, Pakistan</p>
                    </Box>
                    <p><MailOutlineIcon className="contact-icon"/> <a className="email" href="mailto:muradmalik7@gmail.com">muradmalik7@gmail.com</a></p>
                    <p><MailOutlineIcon className="contact-icon"/> <a className="email" href="mailto:14bscsmmurad@seecs.edu.pk">14bscsmmurad@seecs.edu.pk</a></p>
                    <p><MailOutlineIcon className="contact-icon"/> <a className="email" href="mailto:murad@hireninja.com">murad@hireninja.com</a></p>
                    <p><PhoneIcon className="contact-icon"/> +923035523525</p>
                    <Box mt={2} className="box">
                        <a href="https://web.facebook.com/murad.malik1"><FacebookIcon className="social-icon" /></a>
                        <a href="https://www.instagram.com/muradmalik7/"><InstagramIcon className="social-icon" /></a>
                        <a href="https://twitter.com/murad_malik7"><TwitterIcon className="social-icon" /></a>
                        <a href="https://www.linkedin.com/in/murad-malik-13731ab6/"><LinkedInIcon className="social-icon" /></a>
                        <a href="https://github.com/muradmalik777"><GitHubIcon className="social-icon" /></a>
                        <a href="https://stackoverflow.com/users/11982443/murad-malik"><img src={stof} className="stack-icon" alt="" /></a>
                    </Box>
                </Box>
            </Grid>
        </Grid>
    )
}

export default Contact;