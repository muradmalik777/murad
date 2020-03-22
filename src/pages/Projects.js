import React, { useState } from 'react';
import {Grid, Box} from '@material-ui/core';
import UserAvatar from '../components/UserAvatar/UserAvatar';
import CodeIcon from '@material-ui/icons/Code';
import {projects} from '../helpers/Data';

const Projects = () => {
    const [data] = useState(projects())

    return (
        <Grid container className="projects" direction="row" justify="center">
            <Grid item xs={12} sm={11} md={11} lg={12} container direction="column" justify="center" alignItems="center">
                <UserAvatar />
                <Box className="info" display="flex" flexWrap="wrap" flexDirection="row">
                    {data && data.map((item, index) =>
                        <Box key={index} className="project-box" display="flex" flexDirection="column" justifyContent="flex-start" alignItems="flex-start">
                            <span className="company subtitle">{item.role}</span>
                            <span className="position box-title">{item.name}</span>
                            <span className="date small-title">{item.fromDate} - {item.toDate}</span>
                            <Box className="stack-box" display="flex" flexDirection="row" flexWrap="wrap" justifyContent="flex-start" alignItems="center">
                                {item.stack && item.stack.map((item, index) =>
                                    <span key={index} className="chip"> {item} </span>
                                )}
                            </Box>
                            <a className="link" target="_blank" href={item.href}>see project</a>
                        </Box>
                    )}
                </Box>
            </Grid>
        </Grid>
    )
}

export default Projects;