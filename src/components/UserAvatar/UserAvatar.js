import React from 'react';
import './avatar.scss';
import {Box, Avatar} from '@material-ui/core';
import murad from '../../assets/images/murad.jpg';

const UserAvatar = () => {
    return (
        <Box className="user-avatar" maxWidth="500px" p={2} display="flex" flexDirection="row" justify="center" alignItems="center">
            <Avatar src={murad} className="avatar" variant="square" />
            <h2 className="name">Muhammad Murad Malik</h2>
        </Box>
    )
}

export default UserAvatar;