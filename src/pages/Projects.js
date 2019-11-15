import React from 'react';
import {Grid, Box} from '@material-ui/core';
import UserAvatar from '../components/UserAvatar/UserAvatar';

const Projects = () => {
    return (
        <Grid container className="projects" direction="row" justify="center">
            <Grid item xs={12} sm={11} md={11} lg={8} container direction="row" justify="center" alignItems="center">
                <UserAvatar />
                <Box className="info" maxWidth="800px" p={3} display="flex" flexDirection="column" justify="center" alignItems="center">

                </Box>
            </Grid>
        </Grid>
    )
}

export default Projects;