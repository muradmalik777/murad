import React, {Fragment} from 'react';
import './sidebar.scss';
import {Drawer, List, ListItem} from '@material-ui/core';
import {Link} from 'react-router-dom';


const Sidebar = (props) => {
    return(
        <Fragment>
            <Drawer anchor={'left'} open={true} variant={'permanent'} classes={{paper: 'sidebar', docked: 'parent'}}>
                <List>
                    {['home', 'about', 'education', 'experience', 'projects', 'contact'].map((item, index) => 
                        <ListItem key={index} className={'menu-item'}>
                            <Link to={item === 'home' ? '/' : '/'+item}>{item}</Link>
                        </ListItem>
                    )}
                </List>
            </Drawer>
        </Fragment>
    )
}

export default Sidebar;