import React, {useState} from 'react';
import {Grid, Box} from '@material-ui/core';
import {experience, stack} from '../helpers/Data';
import WorkIcon from '@material-ui/icons/WorkOutline';
import UserAvatar from '../components/UserAvatar/UserAvatar';


const Experience = () => {
    const [data] = useState(experience())
    const [tech] = useState(stack())

    return (
        <Grid container className="experience" direction="row" justify="center">
            <Grid item xs={12} sm={11} md={11} lg={10} container direction="column" justify="center" alignItems="center">
                <UserAvatar />
                <Box className="info" p={3} display="flex" flexDirection="row" flexWrap="wrap" justifyContent="center" alignItems="center">
                    { data && data.map((item, index) =>
                        <Box key={index} className="job"  display="flex" flexDirection="row" justifyContent="flex-start" alignItems="center">
                            <WorkIcon className="icon" />
                            <Box className="job-info" display="flex" flexDirection="column" justifyContent="center">
                                <span className="company subtitle">{item.company}</span>
                                <span className="position box-title">{item.position}</span>
                                <span className="date small-title">{item.fromDate} - {item.toDate}</span>
                            </Box>
                        </Box>
                    )}
                </Box>
                <Box className="stack" p={3} display="flex" flexDirection="row" flexWrap="wrap" justifyContent="center" alignItems="center">
                    <span className="box-title t-c">Technologies</span>
                    { tech && tech.map((item, index) =>
                        <span className="tech-stack" key={index}>{item},</span>
                    )}
                </Box>
            </Grid>
        </Grid>
    )
}

export default Experience;