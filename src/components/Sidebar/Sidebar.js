import React from 'react';
import './sidebar.scss';
import {Grid, Drawer, List, ListItem, ListItemIcon} from '@material-ui/core';
import HomeIcon from '@material-ui/icons/Home';
import {Link} from 'react-router-dom';


const Sidebar = (props) => {
    return(
        <Drawer anchor={'left'} open={true} variant={'permanent'} classes={{paper: 'sidebar', docked: 'parent'}}>
            <List>
                {['home', 'about', 'education', 'experience', 'projects', 'contact'].map((item, index) => 
                    <ListItem key={index} className={'menu-item'}>
                        <ListItemIcon><HomeIcon className={'icon'}/></ListItemIcon>
                        <Link to={item === 'home' ? '/' : '/'+item}>{item}</Link>
                    </ListItem>
                )}
            </List>
        </Drawer>
    )
}

export default Sidebar;