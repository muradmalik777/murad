import React, {useState} from 'react';
import './menu.scss';
import {Box, Drawer, List, ListItem} from '@material-ui/core';
import {Link} from 'react-router-dom';
import ClearIcon from '@material-ui/icons/Clear';
import MenuIcon from '@material-ui/icons/Menu';


const MobileMenu = () => {
    const [drawer, setDrawer] = useState(false)

    const showMenu = () => {
        setDrawer(!drawer)
    }

    return(
        <Box p={2} className="mobile">
            <MenuIcon classes={{root: 'burger-btn pointer'}} onClick={showMenu} />
            <Drawer anchor={'left'} onClose={showMenu} open={drawer} variant={'temporary'} classes={{paper: 'menu'}}>
                <ClearIcon classes={{root: 'close-btn pointer'}} onClick={showMenu} />
                <List>
                    {['home', 'about', 'education', 'experience', 'projects', 'contact'].map((item, index) => 
                        <ListItem key={index} className={'menu-item'}>
                            <Link to={item === 'home' ? '/' : '/'+item} onClick={showMenu}>{item}</Link>
                        </ListItem>
                    )}
                </List>
            </Drawer>
        </Box>
    )
}

export default MobileMenu;