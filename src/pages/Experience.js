import React, {useState} from 'react';
import {Grid, Box, Chip} from '@material-ui/core';
import {experience, stack} from '../helpers/Data';
import WorkIcon from '@material-ui/icons/WorkOutline';


const Experience = () => {
    const [data] = useState(experience())
    const [tech] = useState(stack())
    return (
        <Grid container className="experience" direction="row" justify="center">
            <Grid item xs={12} sm={11} md={11} lg={8} container direction="row" justify="center" alignItems="center">
                <Box className="info" maxWidth="800px" p={3} display="flex" flexDirection="column" justify="center" alignItems="flex-start">
                    { data && data.map((item, index) => 
                        <Box key={index} mb={3} className="job" minWidth="500px" maxWidth="800px"  display="flex" flexDirection="row" justify="center" alignItems="center">
                            <WorkIcon className="icon" />
                            <Box className="job-info">
                                <h3 className="company">{item.company}</h3>
                                <h2 className="position">{item.position}</h2>
                                <h4 className="date">{item.fromDate} - {item.toDate}</h4>
                            </Box>
                        </Box>
                    )}
                    <h3>Technologies:</h3>
                    <Box className="stack" maxWidth="500px"  display="flex" flexDirection="row" flexWrap="wrap">
                        {tech && tech.map((item, index) => 
                            <Chip key={index} label={item} className="chip" />
                        )}
                    </Box>
                </Box>
            </Grid>
        </Grid>
    )
}

export default Experience;