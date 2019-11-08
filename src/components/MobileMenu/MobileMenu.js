import React, {useState} from 'react';
import './mobile-menu.scss';
import {Drawer, List, ListItem, ListItemIcon} from '@material-ui/core';
import HomeIcon from '@material-ui/icons/Home';
import {Link} from 'react-router-dom';
import ClearIcon from '@material-ui/icons/Clear';
import MenuIcon from '@material-ui/icons/Menu';


const MobileMenu = () => {
    const [drawer, setDrawer] = useState(true)

    const showMenu = () => {
        setDrawer(!drawer)
    }

    return(
        <div className="burger">
            <MenuIcon className="icon burger-btn" onClick={showMenu} />        
            <Drawer anchor={'left'} onClose={showMenu} open={drawer} variant={'temporary'} classes={{paper: 'mobile-menu'}}>
                <ClearIcon className="icon close-btn" onClick={showMenu} />
                <List>
                    {['home', 'about', 'education', 'experience', 'projects', 'contact'].map((item, index) => 
                        <ListItem key={index} className={'menu-item'}>
                            <ListItemIcon><HomeIcon className={'icon'}/></ListItemIcon>
                            <Link to={item === 'home' ? '/' : '/'+item}>{item}</Link>
                        </ListItem>
                    )}
                </List>
            </Drawer>
        </div>
    )
}

export default MobileMenu;