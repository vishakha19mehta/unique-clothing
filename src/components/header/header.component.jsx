import React from "react";
import { Box, Typography, Button, IconButton } from "@material-ui/core";
import {Link} from 'react-router-dom';
import { ListItem } from '@material-ui/core';
import List from '@material-ui/core/List';
import {auth} from '../../firebase/firebase.utils'; 

const Header = ({currentUser}) =>
(
    <Box display="flex" bgcolor="grey.200" p={2} alignItems="center">
        <Link to="/">
            <Typography>Unique Clothing</Typography>
        </Link>

        <Box flexGrow={1} textAlign="right">
            <List style={{
                    display: 'flex',
                    flexDirection: 'row',
                    padding: 0}}>
                <Link to="/shop"><ListItem>SHOP</ListItem></Link>
                <Link to="/contact"><ListItem>CONTACT</ListItem></Link>
                {
                    currentUser ? 
                    <div onClick={() => auth.signOut()}>SIGN OUT</div>
                    :
                    <Link to='/login'>SIGN IN</Link>
                }

            </List>
        </Box>
    </Box>
)

export default Header;
